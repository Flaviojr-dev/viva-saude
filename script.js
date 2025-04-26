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