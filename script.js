AOS.init({
  once: true
});

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

const especialidades = [
  "Clínico Geral",
  "Pediatria",
  "Ginecologia e Obstetrícia",
  "Enfermagem",
  "Odontologia",
  "Fisioterapia",
  "Nutrição",
  "Psicologia",
  "Assistência Social",
  "Fonoaudiologia"
];

const select = document.getElementById("especialidades");

const optionDefault = document.createElement("option");
optionDefault.value = "";
optionDefault.textContent = "Todas as especialidades";
select.appendChild(optionDefault);

especialidades.forEach(especialidade => {
  const option = document.createElement("option");
  option.textContent = especialidade;
  select.appendChild(option);
});