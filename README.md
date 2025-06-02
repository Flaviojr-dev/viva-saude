#viva-saude

O Viva Saúde é uma solução desenvolvida para otimizar o acesso da população a informações e serviços de saúde, minimizando deslocamentos desnecessários, filas e dificuldades na obtenção de atendimentos.

## Funcionalidades Principais

### 1. Buscar Unidade de Atendimento
 Consulta sobre quais unidades de saúde estão perto de sua localização.
 Evita deslocamentos desnecessários e perda de tempo.

### 2. Consulta de Especialidades
 Permite que o usuário busque postos de saúde com base em uma especialidade específica, como pediatria.

### 3. Especialidades médicas disponíveis
 Permite que o usuário veja de uma maneira mais ampla as funcionalidades presentes nas UPAs

### 4. Encontre o serviço de saúde ideal
 Ter botões ou outras funcionalidades chamativas que levem o usuário a sanar suas dúvidas.

### 5. Localização de Postos por Região
 Permite que o usuário visualize os postos de saúde em um mapa, filtrando por regiões ou bairros.

### 6. Guia de Procedimentos
 Disponibiliza para o usuário um guia simples e direto com os principais serviços que os postos de saúde oferecem.

### 7. Avaliação do Atendimento
 Permite que o usuário avalie o atendimento do posto.

### 8. Dicas de Saúde
 Permite ao usuário acessar informações gerais sobre saúde preventiva para evitar consultas desnecessárias e melhorar seu bem-estar.

### 9. Direcionamento para Farmácias Populares
 Permite que o usuário encontre farmácias populares próximas onde possa adquirir medicamentos de forma acessível.

### 10. Lista de Documentos Necessários
 Permite que o usuário saiba quais documentos são exigidos para cada tipo de atendimento nos postos de saúde para evitar problemas na hora do atendimento.

## Tecnologias Utilizadas
  **Geolocalização**: Identificação de unidades próxima
  
  **Banco de Dados**: Armazenamento de informações
  
  **Interface Acessível**: Usabilidade para todos os públicos

## Público-Alvo
   Trabalhadores com rotinas apertadas
   Idosos e pessoas com dificuldades de locomoção
   Pais preocupados com saúde infantil
   Usuários com pouca familiaridade tecnológica


## Screencast
   Acesse o vídeo por esse link : https://youtu.be/DGZ97a13bkc?si=l23V6P_hzwcB1wMq

## Backlog
 <img width="958" alt="backlog" src="https://github.com/user-attachments/assets/4a9b4e5a-7c2f-419d-a0f6-30f28ff543f9" />




## Storyboard 1 - Tela de pesquisa de posto (História 1)
 ![Storyboard 1 - Tela de pesquisa de posto](https://github.com/user-attachments/assets/3ae63b32-810e-40e0-8987-8e2b60809edc)

## Storyboard 2 - Tela de geolocalização (História 5)
 ![Storyboard 2 - Tela de geolocalização](https://github.com/user-attachments/assets/eedeadd1-7165-4541-8cb9-5e84cae6e528)

## Storyboard 3 -  Tela de atendimento especializado (História 2)
 ![Storyboard 3 -  Tela de atendimento especializado](https://github.com/user-attachments/assets/f0a7f2d9-1057-47bd-9245-f689abd60c18)

## Storyboard 4 - Tela de informações sobre funcionamento (História 3)
 ![Storyboard 4 - Tela de informações sobre funcionamento](https://github.com/user-attachments/assets/978f51c4-ed49-4752-9e26-84dff697769c)

## Storyboard 5 - Tela de especialidades mais requisitadas pela população (História 6)
 ![Storyboard 5 - Tela de atendimentos mais requisitados pela população](https://github.com/user-attachments/assets/d07c5eb1-8dd1-42bc-b962-cce08ab24932)

## Issue / Bug tracker (No code)
 ![Issue  bug tracker](https://github.com/user-attachments/assets/431d97a9-699e-4a62-8dab-34e16d82e82f)

## Programação em par
 Durante parte do nosso projeto, deixamos de lado a ideia de usar programação em par, mas depois percebemos que seria um desperdício de conhecimento e talento se descartássemos essa técnica de desenvolvimento. Nossa equipe não ficou separada em duplas específicas, mas   sim por quem tinha mais disponibilidade para se juntar, tanto pessoalmente quanto online.

 No início, nos reuníamos antes das aulas para nos ajudarmos uns aos outros, sanar dúvidas sobre o código e corrigir erros. Depois, começamos a nos juntar no Discord quase todos os dias para "codar" usando a técnica de programação em par. Todos os integrantes da equipe  participaram dessa troca de conhecimento e talento, fortalecendo nossa equipe não só individualmente, mas também coletivamente.
 ![programacao em par evidencia](https://github.com/user-attachments/assets/e65669d7-fd35-41a1-a79c-23a7a135773b)



## Equipe
 ![Equipe 1](https://github.com/user-attachments/assets/f7ca8fe4-2773-44de-9bae-b334ccfbc5f9)
 ![Equipe 2](https://github.com/user-attachments/assets/0147098f-fc63-4a7e-b6a3-e46592682c11)



## Site em construção da Viva Saúde (Clique na imagem para entrar no Screencast do entregável 2)
 [![Site)](https://github.com/user-attachments/assets/03560ea2-dc4e-4cb4-b0c3-95b1656b31a7)](https://www.youtube.com/watch?v=OWLg_ma6RLw)
 Acesse por esse link : https://viva-saude-nine.vercel.app/

## Quadro Trello Viva Saúde
 ![Captura de tela 2025-06-02 153137](https://github.com/user-attachments/assets/f81f5157-480f-4c4e-9c72-7905d95600de)



## DIAGRAMA DE ATIVIDADES

# Diagrama de Atividades - Viva Saúde

```mermaid
flowchart TD
    A[Início] --> B{Selecione a opção}
    
    %% Cartão 1 - Buscar Unidade por Localização
    B --> C1["🔍 Buscar Unidade (Cartão 1)"]
    C1 --> D1{Usar localização?}
    D1 -->|Sim| E1[📍 Ativar GPS]
    D1 -->|Não| F1[🏠 Digitar endereço]
    E1 --> G1[🔎 Buscar postos próximos]
    F1 --> G1
    G1 --> H1{Encontrou?}
    H1 -->|Sim| I1[📋 Mostrar lista + mapa]
    H1 -->|Não| J1["❌ 'Nenhum posto próximo'"]
    
    %% Cartão 2/4 - Especialidades Médicas
    B --> C2["🏥 Consultar Especialidades (Cartão 2/4)"]
    C2 --> D2[🩺 Selecionar especialidade]
    D2 --> E2[🗺️ Filtrar por região]
    E2 --> F2[🕒 Mostrar unidades com horários]
    
    %% Cartão 5 - Mapa Interativo
    B --> C3["🗺️ Mapa de Postos (Cartão 5)"]
    C3 --> D3[🌍 Carregar mapa]
    D3 --> E3[🖱️ Clique nos marcadores]
    E3 --> F3[ℹ️ Exibir detalhes da unidade]
    
    %% Cartão 6 - Guia de Procedimentos
    B --> C4["📚 Guia de Procedimentos (Cartão 6)"]
    C4 --> D4[🔎 Buscar por palavra-chave]
    D4 --> E4[📝 Exibir requisitos do serviço]
    
    %% Cartão 7 - Disponibilidade em Tempo Real
    B --> C5["🔄 Disponibilidade em Tempo Real (Cartão 7)"]
    C5 --> D5[💉 Selecionar serviço]
    D5 --> E5[✅ Verificar estoque/horário]
    
    %% Cartão 9 - Farmácias Populares
    B --> C6["💊 Farmácias Populares (Cartão 9)"]
    C6 --> D6[🔍 Buscar por medicamento]
    D6 --> E6[🏥 Mostrar farmácias próximas]
    
    %% Conexões entre fluxos
    I1 --> C3
    F2 --> C5
    F2 --> C3
    E4 --> C5
    
    classDef cartao fill:#f9f9f9,stroke:#333,stroke-width2px;
    class C1,C2,C3,C4,C5,C6 cartao;
```
**Legenda:**  
🔍 Busca | 📍 GPS | 🏠 Endereço | 🏥 Saúde | 🕒 Horários | 💉 Vacinas | 💊 Medicamentos  
