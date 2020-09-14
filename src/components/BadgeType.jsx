import React from 'react'
import styled from 'styled-components';
import {typeColor} from './../tools/tools';

 const BadgeType = ({type}) => {
    return (
        <StyledBadge color = {typeColor[`${type}`]}>            
            {type.toUpperCase()}
        </StyledBadge>
    )
}

export default BadgeType;

const StyledBadge = styled.div`
    display:flex;
    justify-content:center;
    width: 55px;
    height: 15px;
    background-color: ${({color}) => `${color}`};;
    color: white;
    font-size: 10px;
    font-weight: bolder;
    border-radius: 10px;
    margin: auto 2px;
`