const form = document.getElementById('form-contato');
const arrayContato = [];
const arrayNumero = [];
let linhas = '';

form.addEventListener('submit', function(e){
    e.preventDefault();

    adicionaLinha();
    atualizaTabela();
    atualizaTotalContatos();

});

function adicionaLinha(){
    const inputNome = document.getElementById('input-contato');
    const inputNumero = document.getElementById('input-numero');

    if(arrayNumero.includes(inputNumero.value)){
        alert(`O número do telefone: ${inputNumero.value} já está cadastrado e pertence ao senhor(a) ${inputNome.value}`)
    }else{
        arrayContato.push(inputNome.value)
        arrayNumero.push(inputNumero.value)
    
        let linha = '<tr>';
        linha += `<td>${inputNome.value}</td>`;
        linha += `<td>${inputNumero.value}</td>`;        
        linha += '</td>';
    
        linhas += linha;
    };

    inputNome.value = '';
    inputNumero.value = '';
};

function atualizaTabela(){
    const corpoTabela = document.querySelector('tbody');
    corpoTabela.innerHTML = linhas;
};

function atualizaTotalContatos(){
    const contatosAdicionados = somaContatos();
    document.getElementById('total-contatos').innerHTML = contatosAdicionados;
};

function somaContatos(){
    let totalContatos = arrayContato.length;
    return totalContatos;
};

