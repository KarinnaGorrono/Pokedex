import { ProxyState } from "../AppState.js"
import { apiPokemonsService } from "../Services/ApiPokemonsService.js"

function _drawAllPokemons() {
    console.log('Drawing pokemon');
    const apiPokemons = ProxyState.apiPokemons
    let template = ''
    apiPokemons.forEach(p => template += `<li class="selectable p-1" onclick="app.apiPokemonsController.getAllPokemon('${p.name})">${p.name}</li>`)
    document.getElementById('api-pokemons').innerHTML = template
    console.log(template);
}


function _drawActivePokemon() {
    const pokemon = ProxyState.activePokemon
    if (!pokemon) {
        document.getElementById('active-pokemon').innerHTML = ''
        return
    }
    document.getElementById('active-pokemon').innerHTML = ''
}

async function _getAllPokemons() {
    try {
        await apiPokemonsService.getAllApiPokemons()
        // _drawAllPokemons()
    } catch (error) {
        console.error(error)
    }
}

async getActivePokemon(pokemonName) {
    try 
}

export class ApiPokemonsController {
    constructor() {
        ProxyState.on('apiPokemons', _drawAllPokemons)
        _getAllPokemons()
    }
}
