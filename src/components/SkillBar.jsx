import React from 'react';
import styled from 'styled-components';

const SkillBar = ({value}) => {
    
    return (
        <StyledSkillBar value={value>100?100:value}>
            <div className="progress">
                <p>{value != 0 ? value : ""}</p>
            </div>
        </StyledSkillBar>
    );
}

export default SkillBar;


const StyledSkillBar = styled.div`
    width:150px;
    height:10px;
    background-color:#F2F2F2;  
    border-radius: 5px;  
    margin: auto; 
    

    .progress{
        background-color:#ef5350;
        width: ${({ value }) => `${value}%`};
        height:100%;
        border-radius: 5px;
        display: flex;
        justify-content: center;
        align-items: center; 
        
        p {
            color:white;
            font-size:10px;
            margin: 0;
            padding:0px;            
        }                
    }
`
