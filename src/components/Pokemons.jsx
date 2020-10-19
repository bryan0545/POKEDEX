import React, { Component } from 'react';
import { connect } from 'react-redux'
import { getGenerations } from './../actions/generationActions'
import { getPokemons } from '../actions/pokemonActions';
import GenerationMenu from './GenerationMenu';
import PokemonList from './PokemonList';
import styled from 'styled-components';

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
            <MainSection>
                <GenerationMenu/>
                <PokemonList />
            </MainSection>
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

const MainSection = styled.div`
    padding: 4rem 5rem 5rem 5rem;
    display: flex;
    flex-flow: column nowrap;
    justify-content:center;

    @media (max-width: 480px){
        padding: 4rem 2rem 1rem 2rem;
}
`