import React, { Component } from 'react';
import { connect } from 'react-redux'
import { getGenerations } from './../actions/generationActions'
import { getPokemons } from '../actions/pokemonActions';
import GenerationMenu from './GenerationMenu';
import PokemonList from './PokemonList';

class Pokemons extends Component {
    state = {
        generationSelected: 0
    }

    componentDidMount() {
        this.props.getGenerations();
        this.props.getPokemons("1");
    }

    render() {
        return (
            <div style = {{padding:"4rem 0"}}>
                <GenerationMenu/>
                <PokemonList />
            </div>
        )

    }
}

const mapStateToProps = (state) => ({
    pokemonList: state.pokemonReducer.pokemonList,
    loading: state.pokemonReducer.loading,
    error: state.pokemonReducer.error
})

const mapDispatchToProps = (dispatch) => ({
    getGenerations: () => dispatch(getGenerations()),
    getPokemons: (id) => dispatch(getPokemons(id))
})


export default connect(mapStateToProps, mapDispatchToProps)(Pokemons);

