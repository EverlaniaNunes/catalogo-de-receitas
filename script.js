const sectionReceitas = document.getElementById("receitas");
const campoPesquisa = document.getElementById("pesquisa");

let listaReceitas = [];

fetch("https://dummyjson.com/recipes")
  .then((resposta) => resposta.json())
  .then((dados) => {
    listaReceitas = dados.recipes;
    mostrarReceitas(listaReceitas);
  });

function mostrarReceitas(receitas) {
  sectionReceitas.innerHTML = "";

  receitas.forEach((receita) => {
    sectionReceitas.innerHTML += `
      <article class="bg-white rounded-lg shadow-md overflow-hidden flex flex-col">

        <img
          src="${receita.image}"
          alt="${receita.name}"
          class="w-full h-48 object-cover"
        >

        <div class="p-4 flex flex-col gap-2">

          <h2 class="text-xl font-bold">
            ${receita.name}
          </h2>

          <p>⏱️ Tempo: ${receita.prepTimeMinutes} minutos</p>

          <p>⭐ Dificuldade: ${receita.difficulty}</p>

        </div>

      </article>
    `;
  });
}

campoPesquisa.addEventListener("input", () => {

  const texto = campoPesquisa.value.toLowerCase();

  const receitasFiltradas = listaReceitas.filter((receita) =>
    receita.name.toLowerCase().includes(texto)
  );

  mostrarReceitas(receitasFiltradas);

});