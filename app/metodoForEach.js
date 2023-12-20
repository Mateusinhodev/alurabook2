const elementoParaInserirLivros = document.getElementById('livros') // Selecionando o elemento HTML com o método DOM
const elementoComValorTotalDeLivrosDisponiveis = document.getElementById('valor_total_livros_disponiveis')

// Criando uma função para exibir os livros na tela
function exibirOsLivrosNaTela(listaDeLivros) {
    elementoComValorTotalDeLivrosDisponiveis.innerHTML = '';
    elementoParaInserirLivros.innerHTML = '';
    // Percorrer os livros da lista
      listaDeLivros.forEach(livro => {
        let disponibilidade = livro.quantidade > 0 ? 'livros__imagens' : 'livros__imagens indisponivel' // Verificar se o livro está ou não disponivel
        // Inserir elemento ao HTML // Passando as informações advinda da resquisição
          elementoParaInserirLivros.innerHTML += `
          <div class="livro">
            <img class="${disponibilidade}" src="${livro.imagem}" alt="${livro.alt}" />
            <h2 class="livro__titulo">${livro.titulo}</h2>
            <p class="livro__descricao">${livro.autor}</p>
            <p class="livro__preco" id="preco">R$${livro.preco.toFixed(2)}</p> 
            <div class="tags">
              <span class="tag">${livro.categoria}</span>
            </div>
        </div>
        `
      })
}

// function verificarDisponibilidadeDoLivro(livro) {
//   if(livro.quantidade > 0) {
//     return ' livro__imagens'
//   } else {
//     return 'livros__imagens indisponivel'
//   }
// }