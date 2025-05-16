

const API_URL = "http://dados.recife.pe.gov.br/api/3/action/datastore_search";
const RESOURCE_ID = "54232db8-ed15-4f1f-90b0-2b5a20eef4cf";
let todasUbs = [];

async function carregarDados() {
    const response = await fetch(`${API_URL}?resource_id=${RESOURCE_ID}&limit=500`);
    const data = await response.json();
    todasUbs = data.result.records;

    preencherEspecialidades(todasUbs);
}

function preencherEspecialidades(lista) {
    const select = document.getElementById("especialidades");
    const especialidades = new Set();

    lista.forEach(item => {
        if (item.especialidade) {
            const valores = item.especialidade.split(",").map(e => e.trim());
            valores.forEach(e => especialidades.add(e));
        }
    });

    select.innerHTML = `<option value="">Todas as especialidades</option>`;

    Array.from(especialidades).sort().forEach(esp => {
        const option = document.createElement("option");
        option.value = esp;
        option.textContent = esp;
        select.appendChild(option);
    });
}

function filtrarUbs() {
    const especialidadeSelecionada = document.getElementById("especialidades").value.toLowerCase();
    const filtroBairro = document.getElementById("filtro-bairro").value.toLowerCase();

    const resultado = todasUbs.filter(ubs => {
        const espOk = especialidadeSelecionada === "" || (ubs.especialidade || "").toLowerCase().includes(especialidadeSelecionada);
        const bairroOk = filtroBairro === "" || (ubs.bairro || "").toLowerCase().includes(filtroBairro);
        return espOk && bairroOk;
    });

    mostrarResultados(resultado);
}

function mostrarResultados(lista) {
    const container = document.getElementById("resultado-container");
    container.innerHTML = "";

    if (lista.length === 0) {
        container.innerHTML = `<p class="no-results">Nenhuma unidade com a especialidade selecionada foi encontrada nesta região.</p>`;
        return;
    }

    lista.forEach(ubs => {
        const nomeUnidade = (ubs.nome_oficial && ubs.nome_oficial.trim()) || "Nome não disponível";

        const card = document.createElement("div");
        card.className = "card";
        card.innerHTML = `
            <div class="card-title">${nomeUnidade}</div>
            <div class="card-address">${ubs.endereco || ''}${ubs.bairro ? `<br>${ubs.bairro}` : ''}</div>
            <p class="card-service"><strong>${ubs.especialidade || 'Especialidade não informada'}</strong></p>
            <div class="card-bottom">
                <p class="card-hours">${ubs.horario || 'Horário não informado'}</p>
                <a href="#" class="card-link">Ver detalhes</a>
            </div>
        `;
        container.appendChild(card);
    });
}

document.getElementById("buscarBtn").addEventListener("click", filtrarUbs);

const selectEspecialidades = document.getElementById("especialidades");

// Aqui incluímos os eventos extra
selectEspecialidades.addEventListener("change", filtrarUbs);
selectEspecialidades.addEventListener("blur", filtrarUbs);
selectEspecialidades.addEventListener("input", filtrarUbs);

carregarDados();

AOS.init();
const hamburgerBtn = document.getElementById("hamburger-btn");
const navMenu = document.getElementById("nav-menu");
const dropdownToggle = document.querySelector(".dropdown-toggle");
const dropdownMenu = document.querySelector(".dropdown-menu");

function isMobile() {
    return window.innerWidth <= 768;
}

// Toggle do menu hamburguer
hamburgerBtn.addEventListener("click", () => {
    navMenu.classList.toggle("show");
    navMenu.classList.add("mobile");
});

// Toggle do submenu "Serviços" no mobile
dropdownToggle.addEventListener("click", (e) => {
    if (isMobile()) {
        e.preventDefault();
        dropdownMenu.classList.toggle("show");
    }
});

function handleDropdownClick() {
  const dropdownMenu = document.querySelector(".dropdown-menu");
  dropdownMenu.classList.toggle("show");
}

// Aplica o clique até 1024px (tablet)
if (window.innerWidth <= 1024) {
  const dropdownBtn = document.getElementById("servicos-btn");
  dropdownBtn.addEventListener("click", function (e) {
      e.preventDefault();
      handleDropdownClick();
  });
}