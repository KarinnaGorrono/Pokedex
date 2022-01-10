import { ProxyState } from "../AppState.js"
import { Pokemon } from "../Models/Pokemon.js"
import { sandboxApi } from "./AxiosService.js"

class MyPokemonsService {

    async getMyPokemons() {
        const res = await sandboxApi.get('')
        console.log(res.data)

    }
}





export const myPokemonsService = new MyPokemonsService

