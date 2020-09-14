import {fetchPokeApi} from './../api/api'

const fetchGeneration = () => {
    return ({
        type: "GENERATION_LOADING",
        payload:"Loading generations"
    })
}

const fetchGenerationSuccess = (generation) => {
    generation.data.results.pop();
    return{
        type: "GENERATION_SUCCESS",
        payload: generation.data.results        
    }
}

const fetchGenerationFailure = () => {
    return{
        type: "GENERATION_FAILURE",
        payload: "Generations not found"        
    }
}

export const getGenerations = () => {
    return async dispatch => {
        dispatch(fetchGeneration());
        try {
            const generation = await fetchPokeApi("https://pokeapi.co/api/v2/generation/");
            dispatch(fetchGenerationSuccess(generation));
        } catch (error) {
            dispatch(fetchGenerationFailure());
        }
    }
}