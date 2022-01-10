// @ts-nocheck
import { EventEmitter } from "./Utils/EventEmitter.js"
import { isValidProp } from "./Utils/isValidProp.js"

class AppState extends EventEmitter {
  /** @type {import('./Models/Pokemon')Pokemon} */
  activePokemon = null
  apiPokemons = []
  /** @type {import('./Models/Pokemon')Pokemon[]} */
  myPokemons = []
}

export const ProxyState = new Proxy(new AppState(), {
  get(target, prop) {
    isValidProp(target, prop)
    return target[prop]
  },
  set(target, prop, value) {
    isValidProp(target, prop)
    // console.log('setting', target, prop, value);
    target[prop] = value
    target.emit(prop, value)
    return true
  }
})
