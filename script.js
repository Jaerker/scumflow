
fetchPokemonDetails('https://pokeapi.co/api/v2/pokemon/1/');

async function fetchPokemonDetails(url){



    const data = await fetch(url).then(res => {return res.json()}).catch(e => e.json());

    return data;

}