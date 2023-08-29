const pokeDetails = {}

var url_string = window.location.href;
var url = new URL(url_string);
var data = url.searchParams.get("id");

pokeDetails.getPokemon = (id) => {
    const url = `https://pokeapi.co/api/v2/pokemon/${id}/`

    return fetch(url)
        .then((response) => response.json())
        .then(Poke)
}

function Poke(poke) {
    let pokeName = document.getElementById('pokeName')
    let detailsCtn = document.getElementById('details')
    let container = document.getElementById('ctnPrincipal')
    let dt = document.getElementById('dt')

    container.className += ' '+poke.types[0].type.name
    
    pokeName.innerHTML = poke.name

    detailsCtn.innerHTML += converterHtml(poke)

    let pokeImg = document.getElementById('pokeImg')
    pokeImg.src = poke.sprites.other.dream_world.front_default

}

function converterHtml(poke){
    const types = poke.types.map((typeSlot) => typeSlot.type.name)

   return `<div class="detail">
    <ol class="types format">
        ${types.map((type) => `<li class="type ${type}">${type}</li>`).join('')}
    </ol>
    </div>
    <div>
        <h5>Hp: ${Math.floor(Math.floor() * poke.stats[0].base_stats) + 1}</h5>
        <h5>XP: ${poke.base_experience}</h5>
        <h5>Peso: ${poke.weight}Kg</h5>
        <h5>Altura: ${poke.height}m</h5>
    </div>
    `
}

pokeDetails.getPokemon(data)