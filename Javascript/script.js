 function voltar1(){
    window.location.href = "index.html";
 }
  function redirecionar() {
    const bibliotecaria = document.getElementById('Bibliotecaria').checked;
    const estudante = document.getElementById('Estudante').checked;

    if (bibliotecaria) {
      window.location.href = "biblio.html";
    } else if (estudante) {
      window.location.href = "estudante.html";
    } else {
      alert("Por favor, selecione uma opção.");
    }
  
