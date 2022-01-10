import { ProxyState } from "../AppState.js"
import { Pokemon } from "../Models/Pokemon.js"
import { pokeApi } from "./AxiosService.js"

class ApiPokemonsService {
    async getAllApiPokemons() {
        const res = await pokeApi.get('')
        console.log(res.data.results)
        ProxyState.apiPokemons = res.data.results
    }
}











export const apiPokemonsService = new ApiPokemonsService