



window.addEventListener(`DOMContentLoaded`, () => {
    document.querySelector(`#pokeGenButton`).addEventListener(`click`, generatePokemon);
})


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

function capitalizeFirstLetter(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
}

function renderPokemonCard(pokemon) {

    const pokemonCard = document.createElement('div');
    pokemonCard.classList.add('pokemonCard');

    const pokemonName = document.createElement('h2');
    pokemonName.textContent = capitalizeFirstLetter(pokemon.name);

    const pokemonTypes = document.createElement('ul');
    pokemonTypes.classList.add('pokemonType');
    
    pokemon.types.forEach(type => {
        const pokemonType = document.createElement('li');
        pokemonType.textContent = capitalizeFirstLetter(type.type.name);
        pokemonTypes.appendChild(pokemonType);
    });

    const abilities = document.createElement('ul');
    abilities.classList.add('abilities');
    pokemon.abilities.forEach(ability => {
        const abilityItem = document.createElement('li');
        abilityItem.textContent = capitalizeFirstLetter(ability.ability.name);
        abilities.appendChild(abilityItem);
    });

    pokemonCard.appendChild(pokemonName);
    pokemonCard.appendChild(pokemonTypes);
    pokemonCard.appendChild(abilities);

   return pokemonCard;
    
}

document.body.appendChild(renderPokemonCard(pokemon));

async function generatePokemon () {
    try {    
        let randomNumber = Math.floor(Math.random()* pokemons.length) ;
        let randomPokemon = await fetchPokemonDetails(pokemons[randomNumber].url);
        renderPokemonCard(randomPokemon);
        
    } catch (error) {
        console.log(`Error at generatePokemon()` + error);
    }

    
}

<<<<<<< HEAD
function searchPokemons(){
    console.log('något händer här');
}
=======
>>>>>>> a120f2d5cd30e89d485767c092b956facf580296
