

'use strict';

console.log('Pokemon');

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
// renderPokemonCard(pokemon);