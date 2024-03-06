

async function fetchPokemonDetails(url){

    if(url){
        const data = await fetch(url).then(res => {return res.json()}).catch(e => e.json());
        return data;

    }

    return {e: {name:'Pokemon not found!'}};
}