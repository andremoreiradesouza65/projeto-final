// Função para abrir a aba selecionada
function openTab(evt, tabName) {
  // Esconde todos os conteúdos das abas
  var i, tabcontent, tablinks;
  tabcontent = document.getElementsByClassName("tabcontent");
  for (i = 0; i < tabcontent.length; i++) {
    tabcontent[i].style.display = "none";
  }

  // Remove a classe "active" de todas as abas
  tablinks = document.getElementsByClassName("tablinks");
  for (i = 0; i < tablinks.length; i++) {
    tablinks[i].classList.remove("active");
  }

  // Exibe o conteúdo da aba selecionada
  document.getElementById(tabName).style.display = "block";
  
  // Adiciona a classe "active" à aba selecionada
  evt.currentTarget.classList.add("active");
}

// Exibe a primeira aba por padrão
document.getElementsByClassName("tablinks")[0].click();
