import React from 'react'
import styled from 'styled-components'
import { Burger } from './Burger'

const Nav = styled.nav`
position:fixed;
width:100%;
height: 55px;
border-bottom: 2px solid #f1f1f1 ;
padding: 0 40px;
display: flex;
justify-content: space-between;
align-items:center;
background-color:#ef5350;


.logo{
    padding-top: 8px;
    color:white;
    font-size:2rem;     
    img{    
        width: 120px;
        height: 45px;
    }
}
@media (max-width: 990px){     
    justify-content: center;
} 

`
export const Navbar = () => {    
    return (
        <Nav>
            <div className="logo">
                    <img src="pokemon_logo.png" alt=""/>
            </div>
            <Burger />            
        </Nav>
    )
}
