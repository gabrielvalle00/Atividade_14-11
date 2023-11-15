import Pessoa from './Funcionario.js';

// Referenciando os elementos pelo ID
const btnInserir = document.getElementById('btnInserir');
const inputNome = document.getElementById('nome');
const inputDataNasc = document.getElementById('dataNasc');
const selectFuncao = document.getElementById('funcao');

btnInserir.addEventListener('click', function () {
    inserir(inputNome.value, inputDataNasc.value, selectFuncao.value);
});

function inserir(nome, dataNasc, funcao) {
    const funcionario = new Pessoa(nome, formatarData(dataNasc), funcao);
    adicionarLinhaTabela(funcionario, selectFuncao.value);
}

function adicionarLinhaTabela(funcionario, funcaoSelecionada) {
    const tabela = document.getElementById('tabela');
    const linha = tabela.insertRow();
    const colunaNome = linha.insertCell(0);
    const colunaDataNasc = linha.insertCell(1);
    const colunaFuncaoSelecionada = linha.insertCell(2);
    const colunaIdade = linha.insertCell(3);

    colunaNome.innerHTML = funcionario.nome;
    colunaDataNasc.innerHTML = funcionario.dataNasc;
    colunaFuncaoSelecionada.innerHTML = funcaoSelecionada;
    colunaIdade.innerHTML = funcionario.idade;

    
}

function formatarData(data) {
    const [ano, mes, dia] = data.split('-');
    return `${dia}/${mes}/${ano}`;
}
