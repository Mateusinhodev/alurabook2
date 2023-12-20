const botoes = document.querySelectorAll('.btn'); // Selecionamos todos os elementos de botões, identificados com btn

botoes.forEach(btn => btn.addEventListener('click', filtrarLivros))// Utilizamos o forEach para acessar cada botão e chamar a função de filtragem

function filtrarLivros() { // Função de filtragem
    const elementoBtn = document.getElementById(this.id) // Variavel, para receber a categoria
    const categoria = elementoBtn.value // A partir do value, vamos ter acesso as categorias

    let livrosFiltrados = categoria == 'disponivel' ? filtrarPorDisponibilidade() : filtrarPorCategoria(categoria) //Utilização do metodo Filter 
    exibirOsLivrosNaTela(livrosFiltrados); // Mostrando o resultado das filtragem na tela
    if (categoria == 'disponivel') {
        const valorTotal = calcularValorTotalDeLivrosDisponiveis(livrosFiltrados)
        console.log(valorTotal)
        exibirValorTotalDosLivrosDisponivelNaTela(valorTotal)
    }
}

function filtrarPorCategoria(categoria) {
    return livros.filter(livro => livro.categoria == categoria);
}

function filtrarPorDisponibilidade() {
    return livros.filter(livro => livro.quantidade > 0);
}

function exibirValorTotalDosLivrosDisponivelNaTela(valorTotal) {
    elementoComValorTotalDeLivrosDisponiveis.innerHTML = `
    <div class="livros__disponiveis">
      <p>Todos os livros disponíveis por R$ <span id="valor">${valorTotal}</span></p>
    </div>
    `
}