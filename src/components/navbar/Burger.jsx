import React, { useState } from 'react'
import styled from 'styled-components'
import { RightNav } from './RightNav';
import  BlackModal  from './../BlackModal';

export const Burger = () => {

    const [open, setOpen] = useState(false);
    
    const onClick = () =>{
        setOpen(!open)
    }

    return (
        <>
            <StyledBurger open={open} onClick={onClick}>
                <div />
                <div />
                <div />
            </StyledBurger>
            {open && <BlackModal onClick = {onClick}/>}
            <RightNav open={open} />
        </>
    )
}

const StyledBurger = styled.div`
 width:2rem;
 height:2rem;
 position:fixed;
 top:12px;
 right:15px;
 display:none; 
 transform-origin: 1px;
 z-index: 300; 

 div{
     height:.25rem;
     width:2rem;
     background-color: white;
     border-radius: 10px; 
     transform-origin:1px;
     transition: all 0.2s linear;

     &:nth-child(1){
        transform: ${({ open }) => open ? `rotate(45deg)` : `rotate(0)`};
     }
     &:nth-child(2){
        opacity: ${({ open }) => open ? 0 : 100};
     }
     &:nth-child(3){
        transform: ${({ open }) => open ? `rotate(-45deg)` : `rotate(0)`};
     }
 }

 @media (max-width: 990px){ 
     display:flex; 
     flex-flow: column nowrap;
     justify-content: space-around;
    }
`
