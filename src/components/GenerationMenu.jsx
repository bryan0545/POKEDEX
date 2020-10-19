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

display:flex; 
flex-flow: row nowrap;
justify-content:space-between;
align-items:center;
border: solid 1px #ef5350;
width:50%; 
margin:auto;
padding: 10px 10px;
border-radius: 10px;
min-width:290px;
color:#ef5350;
font-size: 16px;
font-weight: bold;


@media (max-width: 990px){       
    justify-content:space-between; 
    flex-flow: column nowrap; 
    
}
@media (max-width: 1350px){
    width:60%; 
}
@media (max-width: 1124px){
    width:70%; 
    justify-content:space-between;   
}

`