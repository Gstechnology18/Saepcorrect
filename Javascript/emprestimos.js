document.getElementById('registro-emprestimo-form').addEventListener('submit', function(event) {
    event.preventDefault();
    // Código para registrar um novo empréstimo
    alert('Empréstimo registrado com sucesso!');
});

function consultarEmprestimos() {
    var matricula = document.getElementById('consulta-emprestimo').value;
    // Código para consultar empréstimos
    document.getElementById('resultado-consulta').innerHTML = 'Resultados da consulta para a matrícula: ' + matricula;
}

document.getElementById('edicao-emprestimo-form').addEventListener('submit', function(event) {
    event.preventDefault();
    // Código para editar um empréstimo
    alert('Empréstimo editado com sucesso!');
});

function excluirEmprestimo() {
    var codigoEmprestimo = document.getElementById('edicao-codigo-emprestimo').value;
    // Código para excluir um empréstimo
    alert('Empréstimo excluído com sucesso!');
}
function voltar1(){
    window.location.href = "index.html";
}
