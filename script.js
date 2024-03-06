let pokemons =  [];

fetchPokemons();

async function fetchPokemons () {
    try {

        let response = await fetch(`https://santosnr6.github.io/Data/pokemons.json`);
        let data = await response.json();
        data.forEach(pokemon => pokemons.push(pokemon));
        
    } catch (error) {
        console.log(`Error at fetchPokemons()` + error);
    }

}

async function fetchPokemonDetails(url){

    if(url){
        const data = await fetch(url).then(res => {return res.json()}).catch(e => e.json());
        return data;

    }

    return {e: {name:'Pokemon not found!'}};
}