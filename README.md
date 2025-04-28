#viva-saude

O Viva Saúde é uma solução desenvolvida para otimizar o acesso da população a informações e serviços de saúde, minimizando deslocamentos desnecessários, filas e dificuldades na obtenção de atendimentos.

## Funcionalidades Principais

### 1. Buscar Unidade de Atendimento
 Consulta sobre quais unidades de saúde estão perto de sua localização.
 Evita deslocamentos desnecessários e perda de tempo.

### 2. Consulta de Especialidades
 Permite que o usuário busque postos de saúde com base em uma especialidade específica, como pediatria.

### 3. Informações Sobre Funcionamento
 Permite que o usuário consulte os horários de funcionamento das unidades de saúde para se programar melhor.

### 4. Notificações de Lembretes
 Notificações sobre agendamentos.

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
 Durante o desenvolvimento do projeto, nossa equipe optou por não utilizar a prática de Programação em Par. A equipe de desenvolvimento avaliou que, para garantir uma maior agilidade no andamento das tarefas, seria mais eficiente dividir as atividades individualmente. Cada membro ficou responsável pela implementação de seu respectivo storyboard, o que permitiu um avanço mais rápido e organizado das entregas. Essa decisão foi tomada de forma consciente visando o melhor aproveitamento de tempo.

## Site em construção da Viva Saúde (Clique na imagem para entrar no Screencast do entregável 2)
 [![Site)](https://github.com/user-attachments/assets/03560ea2-dc4e-4cb4-b0c3-95b1656b31a7)](https://www.youtube.com/watch?v=OWLg_ma6RLw)
 Acesse por esse link : https://viva-saude-nine.vercel.app/

## Quadro Trello Viva Saúde
 ![Quadro](https://github.com/user-attachments/assets/b091e426-a5c5-4d40-8ed3-a195f39c69a0)


##DIAGRAMA DE ATIVIDADES

```mermaid 
flowchart LR
    A([Início]) --> B{Escolher Ação};

    subgraph Buscar Atendimento
        B -- Buscar Atendimento --> C[Inserir Termo de Busca];
        C --> D{Filtrar por Região/Bairro?};
        D -- Sim --> E[Selecionar Região/Bairro];
        E --> F[Exibir Resultados (Nome do Posto, Serviços Oferecidos)];
        D -- Não --> F;
    end

    subgraph Consulta de Especialidade
        B -- Consulta de Especialidade --> G[Inserir Especialidade Desejada];
        G --> H{Filtrar por Região/Bairro?};
        H -- Sim --> I[Selecionar Região/Bairro];
        I --> J[Exibir Resultados (Nome do Posto, Especialidade, Dias e Horários)];
        H -- Não --> J;
    end

    subgraph Guia de Procedimentos
        B -- Guia de Procedimentos --> K[Exibir Guia de Procedimentos (Categorias/Temas)];
        K --> L{Buscar por Palavra-chave?};
        L -- Sim --> M[Inserir Palavra-chave];
        M --> K;
        L -- Não --> N((Fim - Guia));
    end

    F --> O((Fim - Atendimento));
    J --> P((Fim - Especialidade));

    style A fill:#9fdf9f,stroke:#333,stroke-width:2px,color:#000
    style O fill:#ff9999,stroke:#333,stroke-width:2px,color:#000
    style P fill:#ff9999,stroke:#333,stroke-width:2px,color:#000
    style N fill:#ff9999,stroke:#333,stroke-width:2px,color:#000
    style B fill:#66b3ff,stroke:#333,stroke-width:2px,color:#000
    style C fill:#ffcc66,stroke:#333,stroke-width:2px,color:#000
    style D fill:#f0e68c,stroke:#333,stroke-width:2px,color:#000
    style E fill:#a9a9a9,stroke:#333,stroke-width:2px,color:#000
    style F fill:#e0ffff,stroke:#333,stroke-width:2px,color:#000
    style G fill:#ffcc66,stroke:#333,stroke-width:2px,color:#000
    style H fill:#f0e68c,stroke:#333,stroke-width:2px,color:#000
    style I fill:#a9a9a9,stroke:#333,stroke-width:2px,color:#000
    style J fill:#e0ffff,stroke:#333,stroke-width:2px,color:#000
    style K fill:#e0ffff,stroke:#333,stroke-width:2px,color:#000
    style L fill:#f0e68c,stroke:#333,stroke-width:2px,color:#000
    style M fill:#a9a9a9,stroke:#333,stroke-width:2px,color:#000
```
 

 
 



  

   
