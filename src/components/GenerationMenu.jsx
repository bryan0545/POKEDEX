import React from 'react';
import ComboGenerations from './buttons/ComboGenerations';
import FilterPokemon from './FilterPokemon'
import styled from 'styled-components';


const GenerationMenu = () => (
    <FilterDIV >
        <ComboGenerations/>
        <FilterPokemon/>
    </FilterDIV>
)

export default GenerationMenu;

const FilterDIV = styled.div`

`