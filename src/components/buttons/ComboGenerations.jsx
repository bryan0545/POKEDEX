import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getPokemons } from './../../actions/pokemonActions';
import { fixGeneration, getGenerationNumber } from './../../tools/tools'
import styled from 'styled-components';

const ComboGenerations = () => {
    const { generations, messagge } = useSelector((state) => state.generationReducer);
    const dispatch = useDispatch();

    const onChange = (e) => {
        dispatch(getPokemons(e.target.value))
    }

    return (
        <GenerationStyled>
            <label htmlFor="">Select generation </label>
            <select id="" onChange={onChange}>
                <option value={0}>All Generations</option>
                {generations.length > 0 && generations.map(generation => {
                    const number = getGenerationNumber(generation.name);
                    return (
                        <option value={number} key={number}>
                            {fixGeneration(generation.name)}
                        </option>)
                })}
            </select>
        </GenerationStyled>
    );
}

export default ComboGenerations;

const GenerationStyled = styled.div`
margin: 5px 0 ;  
`
