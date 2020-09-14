const initialState = {
    pokemonList: [],
    loading: false,
    error: ""
}

const pokemonReducer = (state = initialState, action) => {
    switch (action.type) {
        case "POKEMON_LOADING":
            return {
                ...state,
                loading: true,
                error: "",
                pokemonList: []
            }
        case "POKEMON_SUCCESS":
            return {
                ...state,
                loading: false,
                error: "",
                pokemonList: action.payload
            }
        case "POKEMON_FAILURE":
            return {
                ...state,
                loading: false,
                error: action.payload,
                pokemonList: []
            }
        default:
            return state
    }
}

export default pokemonReducer;