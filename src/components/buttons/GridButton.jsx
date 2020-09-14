import React from 'react';
import styled from 'styled-components';

const GridButton = ({ onClick, active }) => {
    
    return (
        <IconGrid onClick={() => onClick("grid")} active={active}>
            <div>
                <div></div>
                <div></div>
            </div>
            <div>
                <div></div>
                <div></div>
            </div>
        </IconGrid>
    );
}

export default GridButton;

const IconGrid = styled.div`
    width:2rem;
    height:2rem; 
    display:flex;  
    justify-content: center;
    align-items:center;
    flex-flow: row nowrap;
    border: 1px solid #ef5350;  
    border-radius: 0 5px 5px 0;
    padding: 1px 1px;
     
    background-color: white;
    :active{
        background-color: #ef5350; 
        div{
            div{
                background-color: white; 
            }
        }
    }
    
    div{
        flex-flow: row nowrap;
        div{             
            height:.7rem;
            width:.7rem;
            display:flex;
            background-color: #ef5350;           
            flex-flow: row nowrap;
            margin: 1px;
        }
    }    
 `
