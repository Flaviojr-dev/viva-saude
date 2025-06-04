const fs = require('fs');

// Read and parse each file
const readJsonFile = (filename) => {
    try {
        const data = fs.readFileSync(filename, 'utf8');
        return JSON.parse(data);
    } catch (error) {
        console.error(`Error reading ${filename}:`, error);
        return null;
    }
};

// Check if a facility is public
const isPublicFacility = (facility) => {
    // List of known private hospitals and facilities to exclude
    const privateHospitals = [
        'UNIMED', 'REAL PORTUGUES', 'SAO MARCOS', 'ESPERANCA', 
        'ALBERT SABIN', 'SANTA JOANA', 'MEMORIAL SAO JOSE'
    ];

    const name = facility.properties.NMUNIDAD.toUpperCase();
    const isPrivateHospital = privateHospitals.some(hospital => 
        name.includes(hospital.toUpperCase())
    );

    // Check if it's a public facility
    const isPublic = facility.properties.NMPATRIM === 'PROPRIO';
    
    return isPublic && !isPrivateHospital;
};

// Main function to merge data
const mergeHealthFacilityData = () => {
    // Read source files
    const logradouros = readJsonFile('./logradouro_us.json');
    const unidadesSaude = readJsonFile('./unidades_saude.json');
    const ubs = readJsonFile('./ubs.json');
    
    if (!logradouros || !unidadesSaude || !ubs) {
        console.error('Failed to read one or more source files');
        return;
    }

    // Create lookup maps for faster merging
    const logradouroMap = new Map();
    logradouros.forEach(item => {
        const [cnes] = item['cnes;cusaud_codigo;nome_us;codbairro;nomeBairro;distrito_sanitario;codlogradouro;nome_oficial_logradouro;latitude;longitude;atendimento_usf'].split(';');
        logradouroMap.set(cnes, item);
    });

    const ubsMap = new Map();
    ubs.forEach(item => {
        ubsMap.set(item.cnes, item);
    });

    // Create merged GeoJSON structure
    const mergedGeoJSON = {
        type: "FeatureCollection",
        features: []
    };

    // Filter and process each public health facility
    unidadesSaude.features
        .filter(isPublicFacility)
        .forEach(facility => {
            // Find matching records from other sources
            const facilityName = facility.properties.NMUNIDAD;
            const matchingUbs = ubs.find(u => u.nome_oficial.includes(facilityName) || facilityName.includes(u.nome_oficial));
            const cnes = matchingUbs ? matchingUbs.cnes : null;
            const logradouroData = cnes ? logradouroMap.get(cnes) : null;

            // Create merged feature
            const mergedFeature = {
                type: "Feature",
                id: facility.id,
                properties: {
                    // Basic information
                    name: facility.properties.NMUNIDAD,
                    address: facility.properties.NMENDUNID,
                    type: facility.properties.CDTIPO,
                    
                    // Additional information from UBS data
                    ...(matchingUbs && {
                        rpa: matchingUbs.rpa,
                        distrito_sanitario: matchingUbs.distrito_sanitario,
                        microregiao: matchingUbs.microregiao,
                        cnes: matchingUbs.cnes,
                        cod_nat: matchingUbs.cod_nat,
                        tipo_servico: matchingUbs.tipo_servico,
                        bairro: matchingUbs.bairro
                    }),

                    // Location data from logradouro
                    ...(logradouroData && {
                        district: logradouroData['cnes;cusaud_codigo;nome_us;codbairro;nomeBairro;distrito_sanitario;codlogradouro;nome_oficial_logradouro;latitude;longitude;atendimento_usf'].split(';')[4],
                        atendimento_usf: logradouroData['cnes;cusaud_codigo;nome_us;codbairro;nomeBairro;distrito_sanitario;codlogradouro;nome_oficial_logradouro;latitude;longitude;atendimento_usf'].split(';')[10]
                    })
                },
                geometry: facility.geometry
            };

            mergedGeoJSON.features.push(mergedFeature);
        });

    // Also save filtered version of original unidades_saude.json
    const filteredUnidadesSaude = {
        type: "FeatureCollection",
        features: unidadesSaude.features.filter(isPublicFacility)
    };

    // Write merged data to file
    fs.writeFileSync(
        './unidades_saude_merged.json',
        JSON.stringify(mergedGeoJSON, null, 2),
        'utf8'
    );

    // Write filtered original data to file
    fs.writeFileSync(
        './unidades_saude.json',
        JSON.stringify(filteredUnidadesSaude, null, 2),
        'utf8'
    );

    console.log('Data merge completed. Private facilities removed from both files.');
};

// Run the merge
mergeHealthFacilityData();