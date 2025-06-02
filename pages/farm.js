$(document).ready(function () {
    // Inicialização - garantir que a primeira tab está ativa
    $('#medicines-tab').hide();
    $('#pharmacies-tab').show();
    $('.tab[data-tab="pharmacies"]').addClass('active');

    // Controle das abas
    $('.tab').on('click', function () {
        $('.tab').removeClass('active');
        $(this).addClass('active');

        const tab = $(this).data('tab');
        
        if (tab === 'pharmacies') {
            $('#pharmacies-tab').show();
            $('#medicines-tab').hide();
            $('.hero h2').text('Encontre unidades de saúde próximas a você');
            $('.hero p').text('Localize unidades de saúde no seu bairro.');
        } else {
            $('#medicines-tab').show();
            $('#pharmacies-tab').hide();
            $('.hero h2').text('Encontre medicamentos gratuitos ou com desconto');
            $('.hero p').text('Veja onde encontrar os medicamentos de que precisa.');
        }
    });

    // Busca de unidades de saúde
    $('#search-pharmacies').on('click', function () {
        const bairro = $('#neighborhood').val().toLowerCase();
        const pharmacyName = $('#pharmacy-name').val().toLowerCase();

        if (!bairro) {
            $('#pharmacy-results').html('<p>Por favor, digite o nome do bairro para buscar.</p>');
            return;
        }

        // Limpa resultados anteriores
        $('#pharmacy-results').empty().html('<div class="loading">Buscando unidades de saúde...</div>');

        // Buscar dados do arquivo medicamentos.json
        $.getJSON('../data/medicamentos.json', function(data) {
            if (data && data.records) {
                // Agrupa os registros por unidade de saúde
                const unidades = data.records.reduce((acc, record) => {
                    const unidadeNome = record[2].trim();
                    const distrito = record[1];
                    
                    // Verifica se corresponde aos critérios de busca
                    if (unidadeNome.toLowerCase().includes(bairro) &&
                        (!pharmacyName || unidadeNome.toLowerCase().includes(pharmacyName))) {
                        
                        if (!acc[unidadeNome]) {
                            acc[unidadeNome] = {
                                nome: unidadeNome,
                                distrito: distrito,
                                medicamentos: []
                            };
                        }
                        // Adiciona o medicamento à unidade
                        if (record[9] > 0) { // Só adiciona se tiver estoque
                            acc[unidadeNome].medicamentos.push({
                                nome: record[7],
                                quantidade: record[9],
                                tipo: record[5],
                                apresentacao: record[4]
                            });
                        }
                    }
                    return acc;
                }, {});

                const results = Object.values(unidades);
                displayPharmacyResults(results);
            } else {
                $('#pharmacy-results').html('<p>Erro ao carregar os dados das unidades de saúde.</p>');
            }
        }).fail(function() {
            $('#pharmacy-results').html('<p>Erro ao carregar o arquivo de dados.</p>');
        });
    });

    // Busca de medicamentos
    $('#search-medicines').on('click', function () {
        const medicineName = $('#medicine-name').val().toLowerCase();
        const medicineDistrict = $('#medicine-district').val().toLowerCase();
        const medicineType = $('#medicine-type').val().toLowerCase();

        $('#medicine-results').empty().html('<div class="loading">Buscando medicamentos...</div>');

        $.getJSON('../data/medicamentos.json', function(data) {
            if (data && data.records) {
                let results = data.records
                    .filter(function(med) {
                        // Filtra pelo nome do medicamento
                        const nomeMatch = !medicineName || 
                            med[7].toLowerCase().includes(medicineName);
                        // Filtra pelo distrito/bairro, se informado
                        const distritoMatch = !medicineDistrict || 
                            med[2].toLowerCase().includes(medicineDistrict);
                        // Filtra pelo tipo, se selecionado
                        const tipoMatch = !medicineType || 
                            med[5].toLowerCase().includes(medicineType);
                        // Filtra apenas medicamentos com estoque maior que 0
                        const temEstoque = Number(med[9]) > 0;
                        return nomeMatch && distritoMatch && tipoMatch && temEstoque;
                    });

                displayMedicineResults(results);
            } else {
                $('#medicine-results').html('<p>Erro ao carregar os dados de medicamentos.</p>');
            }
        }).fail(function() {
            $('#medicine-results').html('<p>Erro ao carregar o arquivo de medicamentos.</p>');
        });
    });
});

// Função para exibir resultados de unidades de saúde
function displayPharmacyResults(unidades) {
    $('#pharmacy-results').empty();

    if (unidades.length > 0) {
        // Adiciona resumo da busca
        const resumo = $('<div class="search-summary"></div>');
        resumo.append(`<p>Encontradas ${unidades.length} unidades de saúde</p>`);
        $('#pharmacy-results').append(resumo);

        // Ordena unidades por quantidade de medicamentos disponíveis
        unidades.sort((a, b) => b.medicamentos.length - a.medicamentos.length);

        unidades.forEach(function (unidade) {
            const pharmacyCard = `
                <div class="pharmacy-card">
                    <h3>${unidade.nome}</h3>
                    <p><strong>Distrito:</strong> ${unidade.distrito}</p>
                    <p><strong>Medicamentos disponíveis:</strong> ${unidade.medicamentos.length}</p>
                    <div class="medicine-list">
                        ${unidade.medicamentos.slice(0, 5).map(med => `
                            <div class="medicine-item">
                                <p><strong>${med.nome}</strong></p>
                                <p>Quantidade: ${med.quantidade} unidades</p>
                                <p>Apresentação: ${med.apresentacao}</p>
                                <p>Tipo: ${med.tipo}</p>
                            </div>
                        `).join('')}
                        ${unidade.medicamentos.length > 5 ? 
                            `<p>E mais ${unidade.medicamentos.length - 5} medicamentos...</p>` : ''}
                    </div>
                </div>
            `;

            $('#pharmacy-results').append(pharmacyCard);
        });
    } else {
        $('#pharmacy-results').html('<p>Nenhuma unidade de saúde encontrada com os critérios informados.</p>');
    }
}

// Função para exibir resultados de medicamentos
function displayMedicineResults(results) {
    $('#medicine-results').empty();

    if (results.length > 0) {
        // Agrupa resultados por unidade de saúde
        const porUnidade = results.reduce((acc, med) => {
            if (!acc[med[2]]) {
                acc[med[2]] = [];
            }
            acc[med[2]].push(med);
            return acc;
        }, {});

        // Ordena unidades por quantidade de medicamentos disponíveis
        const unidadesOrdenadas = Object.entries(porUnidade)
            .sort((a, b) => b[1].length - a[1].length);

        // Adiciona resumo da busca
        const resumo = $('<div class="search-summary"></div>');
        resumo.append(`<p>Encontrados ${results.length} medicamentos em ${Object.keys(porUnidade).length} unidades de saúde</p>`);
        $('#medicine-results').append(resumo);

        unidadesOrdenadas.forEach(([unidade, medicamentos]) => {
            const unidadeCard = $('<div class="pharmacy-card"></div>');
            unidadeCard.append(`<h3>${unidade.trim()}</h3>`);
            unidadeCard.append(`<p><strong>Distrito:</strong> ${medicamentos[0][1]}</p>`);
            unidadeCard.append(`<p><strong>Medicamentos disponíveis:</strong> ${medicamentos.length}</p>`);
            
            const medList = $('<div class="medicine-list"></div>');
            medicamentos.forEach(med => {
                medList.append(`
                    <div class="medicine-item">
                        <p><strong>${med[7]}</strong></p>
                        <p>Quantidade: ${med[9]} unidades</p>
                        <p>Apresentação: ${med[4]}</p>
                        <p>Classe: ${med[3]}</p>
                    </div>
                `);
            });
            
            unidadeCard.append(medList);
            $('#medicine-results').append(unidadeCard);
        });
    } else {
        $('#medicine-results').html('<p>Nenhum medicamento encontrado com estoque disponível nos critérios selecionados.</p>');
    }
}
