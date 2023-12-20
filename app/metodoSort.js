let btnOrdenarPorPreco = document.getElementById('btnOrdenarPorPreco'); // Selecionando o elemento HTML com o método DOM

btnOrdenarPorPreco.addEventListener('click', ordenarLivrosPorPreco); // Passando um evento de click ao botão de "ordenar preço"

function ordenarLivrosPorPreco() { // Funçao para ordenar livros por preço
    let livrosOrdenados = livros.sort((a, b) => a.preco - b.preco); // Metodo que ordenar os valores, nesse caso manipulamo para ordenar do menor para o maior
    exibirOsLivrosNaTela(livrosOrdenados); // Exibir a ordenação dos livros
}