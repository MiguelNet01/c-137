document.getElementById("open-portal").addEventListener("click", () => {
  // Aqui você pode chamar a API de Rick and Morty ou adicionar personagens estáticos
  fetchCharacters();
});

function fetchCharacters() {
  fetch("https://rickandmortyapi.com/api/character")
    .then(response => response.json())
    .then(data => {
      const container = document.getElementById("characters");
      container.innerHTML = ""; // Limpa antes de adicionar novos

      data.results.forEach(personagem => {
        const card = document.createElement("div");
        card.className = "card";
        card.innerHTML = `
          <img src="${personagem.image}" alt="${personagem.name}">
          <h3>${personagem.name}</h3>
          <p>Status: ${personagem.status}</p>
        `;
        container.appendChild(card);
      });
    })
    .catch(error => console.error("Erro ao carregar personagens:", error));
}
