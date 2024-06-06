 function voltar1(){
    window.location.href = "index.html";
 }
 function redirecionar(){
    if(document.getElementById('Estudante').checked){
        window.location.href= "estudante.html";
    } else if (document.getElementById('Bibliotecaria').checked){
        window.location.href= "biblio.html";
    } else{
        alert("Por favor, selecione uma opção");
    }
 }