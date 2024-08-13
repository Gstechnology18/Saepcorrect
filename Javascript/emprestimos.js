// Script para gerenciamento de empréstimos
let emprestimos = JSON.parse(localStorage.getItem('emprestimos')) || [];

function salvarEmprestimos() {
    localStorage.setItem('emprestimos', JSON.stringify(emprestimos));
}

document.getElementById('registro-emprestimo-form').addEventListener('submit', function(event) {
    event.preventDefault();

    const codigo = document.getElementById('codigo-emprestimo').value;
    const nomeLivro = document.getElementById('nome-livro').value;
    const matricula = document.getElementById('matricula-estudante').value;
    const dataRetirada = document.getElementById('data-retirada').value;
    const dataEntrega = document.getElementById('data-prevista-entrega').value;

    const emprestimo = {
        codigo,
        nomeLivro,
        matricula,
        dataRetirada,
        dataEntrega
    };

    emprestimos.push(emprestimo);
    salvarEmprestimos();

    alert('Empréstimo registrado com sucesso!');
    document.getElementById('registro-emprestimo-form').reset();
});

function consultarEmprestimos() {
    const matricula = document.getElementById('consulta-emprestimo').value;
    const resultados = emprestimos.filter(emp => emp.matricula === matricula);

    const resultadoConsultaDiv = document.getElementById('resultado-consulta');
    resultadoConsultaDiv.innerHTML = '';

    if (resultados.length > 0) {
        resultados.forEach(emp => {
            resultadoConsultaDiv.innerHTML += `
                <p>Código: ${emp.codigo}</p>
                <p>Nome do Livro: ${emp.nomeLivro}</p>
                <p>Data de Retirada: ${emp.dataRetirada}</p>
                <p>Data Prevista de Entrega: ${emp.dataEntrega}</p>
                <hr>
            `;
        });
    } else {
        resultadoConsultaDiv.innerHTML = '<p>Nenhum empréstimo encontrado para essa matrícula.</p>';
    }
}

document.getElementById('edicao-emprestimo-form').addEventListener('submit', function(event) {
    event.preventDefault();

    const codigo = document.getElementById('edicao-codigo-emprestimo').value;
    const nomeLivro = document.getElementById('edicao-nome-livro').value;
    const matricula = document.getElementById('edicao-matricula-estudante').value;
    const dataRetirada = document.getElementById('edicao-data-retirada').value;
    const dataEntrega = document.getElementById('edicao-data-prevista-entrega').value;

    const index = emprestimos.findIndex(emp => emp.codigo === codigo);

    if (index !== -1) {
        emprestimos[index] = {
            codigo,
            nomeLivro: nomeLivro || emprestimos[index].nomeLivro,
            matricula: matricula || emprestimos[index].matricula,
            dataRetirada: dataRetirada || emprestimos[index].dataRetirada,
            dataEntrega: dataEntrega || emprestimos[index].dataEntrega
        };
        salvarEmprestimos();
        alert('Empréstimo editado com sucesso!');
        document.getElementById('edicao-emprestimo-form').reset();
    } else {
        alert('Empréstimo não encontrado.');
    }
});

function excluirEmprestimo() {
    const codigo = document.getElementById('edicao-codigo-emprestimo').value;
    const index = emprestimos.findIndex(emp => emp.codigo === codigo);

    if (index !== -1) {
        emprestimos.splice(index, 1);
        salvarEmprestimos();
        alert('Empréstimo excluído com sucesso!');
        document.getElementById('edicao-emprestimo-form').reset();
    } else {
        alert('Empréstimo não encontrado.');
    }
}
    function voltar1() {
        window.location.href = "index.html"; // Exemplo para redirecionar para a página inicial
    }

