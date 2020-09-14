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
    border-collapse:collapse;

  
`