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



##DIAGRAMA DE ATIVIDADES

```mermaid
flowchart TD
    A[Início: Página Principal] --> B{Escolha do Usuário}
   
    B --> C1[Buscar por Especialidade]
    B --> C2[Consultar Guia de Serviços]
    B --> C3[Encontrar Posto Mais Próximo]
   
    %% Fluxo Buscar por Especialidade
    C1 --> D1[Exibir campo de busca por especialidade]
    D1 --> E1[Permitir filtros de bairro/região]
    E1 --> F1[Consultar banco de dados]
    F1 --> G1[Exibir lista de postos: nome, endereço, horários]
    G1 --> H1{Ordenar resultados?}
    H1 -- Sim --> I1[Ordenar por distância ou horário]
    H1 -- Não --> J1[Fim da busca por especialidade]

    %% Fluxo Consultar Guia de Serviços
    C2 --> D2[Exibir categorias de serviços]
    D2 --> E2[Campo de busca por palavra-chave]
    E2 --> F2[Exibir informações acessíveis]
    F2 --> G2[Área administrativa para atualização de dados]
    G2 --> J2[Fim da consulta ao guia]

    %% Fluxo Encontrar Posto Mais Próximo
    C3 --> D3{Usar localização atual?}
    D3 -- Sim --> E3[Solicitar permissão de GPS]
    E3 --> F3[Detectar posição]
    D3 -- Não --> G3[Campo para digitar endereço]
    F3 --> H3[Buscar postos mais próximos]
    G3 --> H3[Buscar postos mais próximos]
    H3 --> I3[Exibir lista de postos + mapa]
    I3 --> J3{Postos encontrados?}
    J3 -- Sim --> K3[Fim da busca por localização]
    J3 -- Não --> L3[Exibir mensagem: 'Nenhum posto encontrado']
    L3 --> K3
