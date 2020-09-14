import { fetchPokeApi } from '../api/api'

const fetchPokemon = () => {
    return {
        type: "POKEMON_LOADING"
    }
}

const fetchPokemonSuccess = (pokemon) => {
    return{
        type: "POKEMON_SUCCESS",
        payload: pokemon
    }
}       

const fetchPokemonFailure = () => {
    return{
        type: "POKEMON_FAILURE",
        payload: "Pokemon not found"
    }
}   

export const getPokemons = (id) => {
    return async dispatch => {
        dispatch(fetchPokemon());
        const url = id === "0" ? "https://pokeapi.co/api/v2/pokemon?limit=807&offset=0z":`https://pokeapi.co/api/v2/generation/${id}`
        
        try {
            const pokemons = await fetchPokeApi(url);
            pokemons = id === "0" ? pokemons.data.results:pokemons.data.pokemon_species;
            dispatch(fetchPokemonSuccess(pokemons))
        } catch (error) {
            dispatch(fetchPokemonFailure())
        }
    }
} 