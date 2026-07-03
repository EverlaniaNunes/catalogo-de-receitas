fetch("https://dummyjson.com/recipes")
  .then((resposta) => resposta.json())
  .then((dados) => {
    console.log(dados);
  });