//Variáveis e Elementos

const inputCep = document.getElementById('cep');
const number = document.getElementById('numero');

const elementEndereco = document.getElementById('endereco');
const elementBairro = document.getElementById('bairro');
const elementCidade = document.getElementById('cidade');
const elementEstado = document.getElementById('estado');



//Funções
const getApi = async (cep) => {
    limparFormulario()
    const apiURL = `https://viacep.com.br/ws/${cep}/json/`
    const response = await fetch(apiURL)
    const data = await response.json()

    return data
}


const showCep = async (cep) => {
    const data = await getApi(cep)

    if(data.hasOwnProperty('erro')) {

        inputCep.value = "Endereço não encontrado"
    }else {
        elementEndereco.value = data.logradouro;
        elementBairro.value = data.bairro;
        elementCidade.value = data.localidade;
        elementEstado.value = data.uf

    }

}

const limparFormulario = () => {
    elementEndereco.value = '';
    elementBairro.value = '';
    elementCidade.value = '';
    elementEstado.value = '';
}

//Eventos
inputCep.addEventListener('keyup', (e) => {
    if(e.code === "Enter") {
        const cep = e.target.value;
        showCep(cep);
    }
})


inputCep.addEventListener('focusout', () => {
    const cep = inputCep.value
    showCep(cep)
})












