const fs = require('fs');

// Função para corrigir a codificação
function fixEncoding(text) {
    return text
        .replace(/Ãš/g, 'Ú')
        .replace(/Ã‰/g, 'É')
        .replace(/Ã"/g, 'Ó')
        .replace(/Ãƒ/g, 'Ã')
        .replace(/Ã‡/g, 'Ç')
        .replace(/Ã¢/g, 'â')
        .replace(/Ãª/g, 'ê')
        .replace(/Ã£/g, 'ã')
        .replace(/Ã¡/g, 'á')
        .replace(/Ã©/g, 'é')
        .replace(/Ãº/g, 'ú')
        .replace(/Ã­/g, 'í')
        .replace(/Ã³/g, 'ó')
        .replace(/Ãµ/g, 'õ');
}

// Lê o arquivo JSON
fs.readFile('medicamentos.json', 'utf8', (err, data) => {
    if (err) {
        console.error('Erro ao ler o arquivo:', err);
        return;
    }

    try {
        // Parse o JSON
        const jsonData = JSON.parse(data);

        // Corrige a codificação dos registros
        jsonData.records = jsonData.records.map(record => {
            return record.map(field => {
                if (typeof field === 'string') {
                    return fixEncoding(field.trim());
                }
                return field;
            });
        });

        // Salva o arquivo corrigido
        fs.writeFile('medicamentos_fixed.json', JSON.stringify(jsonData, null, 2), 'utf8', err => {
            if (err) {
                console.error('Erro ao salvar o arquivo:', err);
                return;
            }
            console.log('Arquivo corrigido salvo com sucesso!');
        });

    } catch (error) {
        console.error('Erro ao processar o JSON:', error);
    }
});
