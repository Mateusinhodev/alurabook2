let livros = [] // array vazia 

const endpointDaAPI = 'https://guilhermeonrails.github.io/casadocodigo/livros.json' // Variavel que armazena a resquisição da API

getBuscarLivrosDaApi() // Criando a função para buscar os livros na API


// Definindo a função como assincrona - (async function)
async function getBuscarLivrosDaApi() {
    const res = await fetch(endpointDaAPI) // Requisição da API para dentro da função 
    livros = await res.json() // Armazenar a requisição no array em formato JSON
    let livrosComDesconto = aplicarDesconto(livros); // Função para aplicar desconto sobre o livro (Manipulada no metodoMap.js)
    exibirOsLivrosNaTela(livrosComDesconto) // Chamando a função de exibir os livros na tela
}

