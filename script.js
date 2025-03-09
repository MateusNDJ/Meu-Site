// Função para alternar entre as abas (se você ainda usar abas em alguma página)
function openTab(evt, tabName) {
  var i, tabcontent, tablinks;

  // Esconde todas as abas
  tabcontent = document.getElementsByClassName("tabcontent");
  for (i = 0; i < tabcontent.length; i++) {
      tabcontent[i].style.display = "none";
  }

  // Remove a classe "ativa" de todas as abas
  tablinks = document.getElementsByClassName("tablink");
  for (i = 0; i < tablinks.length; i++) {
      tablinks[i].classList.remove("active");
  }

  // Exibe a aba clicada
  document.getElementById(tabName).style.display = "block";
  evt.currentTarget.classList.add("active");
}

// Função para abrir o modal de imagem
function openModal(element) {
  var modal = document.getElementById("myModal");
  var modalImg = document.getElementById("img01");
  var modalPDF = document.getElementById("pdf01");

  modal.style.display = "block";
  modalImg.style.display = "block";
  modalPDF.style.display = "none";
  modalImg.src = element.src;
  document.getElementById("caption").innerHTML = element.alt;
}

// Função para abrir o modal de PDF
function openPDF(event, pdfSrc) {
  var modal = document.getElementById("myModal");
  var modalImg = document.getElementById("img01");
  var modalPDF = document.getElementById("pdf01");

  modal.style.display = "block";
  modalImg.style.display = "none";
  modalPDF.style.display = "block";
  modalPDF.src = pdfSrc;
}

// Função para fechar o modal
var span = document.getElementsByClassName("close")[0];
span.onclick = function() {
  var modal = document.getElementById("myModal");
  modal.style.display = "none";
}

// Fecha o modal se o usuário clicar fora da imagem ou PDF
window.onclick = function(event) {
  var modal = document.getElementById("myModal");
  if (event.target === modal) {
      modal.style.display = "none";
  }
}

// Mostrar/ocultar botão "Voltar ao Topo"
window.onscroll = function() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
      document.querySelector('.back-to-top').style.display = 'block';
  } else {
      document.querySelector('.back-to-top').style.display = 'none';
  }
};

// Rolagem suave ao clicar no botão
document.querySelector('.back-to-top').addEventListener('click', function(e) {
  e.preventDefault();
  document.body.scrollTop = 0; // Para navegadores Safari
  document.documentElement.scrollTop = 0; // Para Chrome, Firefox, IE e Opera
});