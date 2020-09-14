import {combineReducers} from 'redux';
import generationReducer from './generationReducer';
import pokemonReducer from './pokemonReducer'

const mainReducer = combineReducers ({
    generationReducer,
    pokemonReducer
});

export default mainReducer;