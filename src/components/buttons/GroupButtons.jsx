import React from 'react';
import GridButton from './GridButton'
import ListButton from './ListButton'
import styled from 'styled-components';
import { useState } from 'react';

const GroupButtons = ({onClick}) => {
    const [active, setActive] = useState(false)

    return (        
        <StyledGroup >
            <ListButton onClick={onClick} />
            <GridButton className= "right" onClick={onClick} />            
        </StyledGroup>
    );
}

export default GroupButtons;

const StyledGroup = styled.div`
    display:flex;  
    margin: 10px 20% 10px auto;   
    justify-content:flex-end;
    z-index: 100;

    @media (max-width: 1300px){
        width:90%; 
        right:-40px;       
    }   

    

 
`