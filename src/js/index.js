document.addEventListener("DOMContentLoaded", function () {
  // Seleciona todos os personagens
  const personagens = document.querySelectorAll(".personagem");

  // Seleciona o botão Play
  const botaoPlay = document.getElementById("botao-play");

  // Seleciona o link do botão Play
  const linkPlay = document.getElementById("link-play");

  // Função que altera o conteúdo de acordo com o personagem selecionado
  personagens.forEach(personagem => {
    personagem.addEventListener("click", function() {
      // Remove a classe 'selecionado' de todos os personagens
      personagens.forEach(p => p.classList.remove("selecionado"));
      
      // Adiciona a classe 'selecionado' no personagem clicado
      personagem.classList.add("selecionado");

      // Pega o nome e descrição do personagem
      const nomePersonagem = personagem.getAttribute("data-name");
      const descricaoPersonagem = personagem.getAttribute("data-description");

      // Atualiza a imagem e descrição do personagem selecionado
      const imagemPersonagem = document.querySelector(".personagem-grande");
      imagemPersonagem.src = `./src/imagens/${nomePersonagem.toLowerCase()}.png`;
      imagemPersonagem.alt = `Personagem Selecionado: ${nomePersonagem}`;

      const nomeElement = document.getElementById("nome-personagem");
      nomeElement.textContent = nomePersonagem;

      const descricaoElement = document.getElementById("descricao-personagem");
      descricaoElement.textContent = descricaoPersonagem;

      // Define o link do botão Play com base no personagem selecionado
      let url = '';
      switch (nomePersonagem) {
        case 'Ebony':
          url = "https://www.exemplo.com/ebony";
          break;
        case 'Vidia':
          url = "https://www.exemplo.com/vidia";
          break;
        case 'Frank':
          url = "https://www.exemplo.com/frank";
          break;
        case 'Arlen':
          url = "https://www.exemplo.com/arlen";
          break;
        case 'Mei':
          url = "https://www.exemplo.com/mei";
          break;
        case 'Viktor':
          url = "https://www.exemplo.com/viktor";
          break;
        default:
          url = "https://www.exemplo.com";
      }

      // Atualiza o href do link Play com a URL correspondente
      linkPlay.setAttribute("href", url);
    });
  });
});