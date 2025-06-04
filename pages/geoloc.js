// Map configuration
let map;
let markers = [];
let allUnits = [];

// Initialize map
async function initMap() {
    // Create map centered on Recife
    map = L.map('map').setView([-8.0522, -34.8828], 13);

    // Add OpenStreetMap tiles
    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution: '&copy; OpenStreetMap contributors'
    }).addTo(map);

    try {
        // Load health units from merged JSON
        const response = await fetch('../data/unidades_saude_merged.json');
        if (!response.ok) throw new Error('Falha ao carregar dados');
        
        const data = await response.json();
        allUnits = data.features.map(feature => ({
            id: feature.id,
            name: feature.properties.name || feature.properties.NMUNIDAD,
            type: feature.properties.type || feature.properties.CDTIPO,
            address: {
                street: feature.properties.address || feature.properties.NMENDUNID,
                district: feature.properties.district || '',
                neighborhood: feature.properties.bairro || ''
            },
            location: {
                latitude: feature.geometry.coordinates[0][0][1],
                longitude: feature.geometry.coordinates[0][0][0]
            },
            extras: {
                rpa: feature.properties.rpa,
                distrito_sanitario: feature.properties.distrito_sanitario,
                microregiao: feature.properties.microregiao,
                tipo_servico: feature.properties.tipo_servico
            }
        }));
        
        showAllUnits();
    } catch (error) {
        console.error('Erro:', error);
        document.getElementById('resultados').innerHTML = 
            '<div class="error">Erro ao carregar dados. Por favor, tente novamente mais tarde.</div>';
    }
}

// Show all health units on the map
function showAllUnits() {
    clearMarkers();
    
    allUnits.forEach(unit => {
        addMarker(unit);
    });

    // Fit map to show all markers
    if (markers.length > 0) {
        const group = L.featureGroup(markers);
        map.fitBounds(group.getBounds().pad(0.1));
    }
}

// Add a marker for a health unit
function addMarker(unit) {
    const marker = L.marker([
        unit.location.latitude,
        unit.location.longitude
    ])
    .bindPopup(`
        <strong>${unit.name}</strong><br>
        ${unit.address.street}<br>
        ${unit.address.district ? `<em>Distrito: ${unit.address.district}</em><br>` : ''}
        ${unit.address.neighborhood ? `<em>Bairro: ${unit.address.neighborhood}</em><br>` : ''}
        <em>Tipo: ${unit.type}</em><br>
        ${unit.extras.distrito_sanitario ? `<em>Distrito Sanitário: ${unit.extras.distrito_sanitario}</em><br>` : ''}
        ${unit.extras.tipo_servico ? `<em>Tipo de Serviço: ${unit.extras.tipo_servico}</em>` : ''}
    `)
    .addTo(map);
    
    markers.push(marker);
}

// Clear all markers from the map
function clearMarkers() {
    markers.forEach(marker => map.removeLayer(marker));
    markers = [];
}

// Search health units
function searchUnits() {
    const searchTerm = document.getElementById('bairro').value.toLowerCase();
    
    if (!searchTerm) {
        showAllUnits();
        return;
    }

    const filteredUnits = allUnits.filter(unit => 
        unit.name.toLowerCase().includes(searchTerm) ||
        unit.address.street.toLowerCase().includes(searchTerm) ||
        (unit.address.district && unit.address.district.toLowerCase().includes(searchTerm)) ||
        (unit.address.neighborhood && unit.address.neighborhood.toLowerCase().includes(searchTerm))
    );

    clearMarkers();
    
    if (filteredUnits.length === 0) {
        document.getElementById('resultados').innerHTML = 
            '<div class="no-results">Nenhuma unidade de saúde encontrada com os critérios informados.</div>';
        return;
    }

    filteredUnits.forEach(unit => {
        addMarker(unit);
    });

    // Update results list
    const resultsList = document.getElementById('resultados');
    resultsList.innerHTML = filteredUnits.map(unit => `
        <div class="posto-card">
            <h3>${unit.name}</h3>
            <p><strong>Endereço:</strong> ${unit.address.street}</p>
            ${unit.address.district ? `<p><strong>Distrito:</strong> ${unit.address.district}</p>` : ''}
            ${unit.address.neighborhood ? `<p><strong>Bairro:</strong> ${unit.address.neighborhood}</p>` : ''}
            <p><strong>Tipo:</strong> ${unit.type}</p>
            ${unit.extras.tipo_servico ? `<p><strong>Serviço:</strong> ${unit.extras.tipo_servico}</p>` : ''}
        </div>
    `).join('');

    // Center map on results
    const group = L.featureGroup(markers);
    map.fitBounds(group.getBounds().pad(0.1));
}

// Initialize when page loads
document.addEventListener('DOMContentLoaded', () => {
    initMap();
    
    // Add search event listeners
    document.getElementById('bairro').addEventListener('keypress', (e) => {
        if (e.key === 'Enter') searchUnits();
    });
    
    document.querySelector('.btn1').addEventListener('click', searchUnits);
});
