import React from 'react'
import styled from 'styled-components';

const Menu = styled.ul`
    ul{
        list-style:none;
        display: flex;
        justify-content:space-around; 
        flex-flow: row nowrap;
        
        li{
        padding: 18px 10px;
        }
        a{
            text-decoration: none;
            color:white;
        }
        @media (max-width: 768px){        
            flex-flow: column nowrap; 
            align-items:center;
            background-color: red;
            position: fixed;
            top:0;
            right:0;
            height:100%;
            width:60%; 
            padding-top: 3.5rem;
            transition: all .3s ease-in-out;
            z-index:200;
            transform: ${({open}) => open?`translateX(100)`:`translateX(100%)`};     
        }
    }
`

export const RightNav = ({open}) => {
    return (
        <Menu open ={open}>
        <ul >
            <li><a href="/">HOME</a></li>
            <li><a href="/">POKEDEX</a></li>
            <li><a href="/">PC</a></li>
        </ul>
        </Menu>
    )
}
