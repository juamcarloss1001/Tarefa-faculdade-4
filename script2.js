let botao = document.getElementById("buscar");

botao.addEventListener("click", buscarPokemon);

async function buscarPokemon() {

    let nome = document.getElementById("pokemon").value;

    let resultado = document.getElementById("resultado");

    if (nome == "") {
        resultado.innerHTML = "Digite o nome de um Pokémon.";
        return;
    }

    try {

        let resposta = await fetch(
            "https://pokeapi.co/api/v2/pokemon/" + nome.toLowerCase()
        );

        if (!resposta.ok) {
            throw new Error();
        }

        let pokemon = await resposta.json();

        resultado.innerHTML = `
            <h2>${pokemon.name}</h2>

            <img src="${pokemon.sprites.front_default}">

            <p>Número: ${pokemon.id}</p>

            <p>Altura: ${pokemon.height}</p>

            <p>Peso: ${pokemon.weight}</p>
        `;

    } catch {

        resultado.innerHTML = "Pokémon não encontrado.";

    }
}

