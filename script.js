const servicosBtn = document.getElementById('servicos-btn');
const dropdownMenu = document.getElementById('dropdown-menu');

servicosBtn.addEventListener('click', (e) => {
  e.preventDefault(); // Impede de pular pra cima
  dropdownMenu.style.display = dropdownMenu.style.display === 'block' ? 'none' : 'block';
});

// Se clicar fora, fecha o menu
document.addEventListener('click', (e) => {
  if (!e.target.closest('.dropdown')) {
    dropdownMenu.style.display = 'none';
  }
});

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

function procurar() {
  const endereco = document.getElementById('endereco').value;
  if (endereco.trim() === "") {
      alert("Por favor, digite um endereço.");
  } else {
      alert(`Buscando postos de saúde próximos a: ${endereco}`);
  }
}