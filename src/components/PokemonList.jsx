import React from 'react';
import { useSelector } from 'react-redux';
import styled from 'styled-components';
import { getPokemonID, getFrontSprite, firstUpperCase } from '../tools/tools';
import GroupButtons from './buttons/GroupButtons';
import BlackModal from './BlackModal';
import PokemonModal from './PokemonModal'
import { useState } from 'react';



function renderGrid(pokemonList, handleShowInfo) {
    let onLoading;
    return (
        <DivGrid >
            {pokemonList.map(pokemon => {
                const id = getPokemonID(pokemon.url);
                
                return (
                    <div className="card" key={id} >
                        <p >{`${id}. ${firstUpperCase(pokemon.name)}`}</p>
                        
                        <img
                            draggable="false"                           
                            src={onLoading ? "spinner.gif" : getFrontSprite(pokemon.url)} alt=""
                        />
                        <DivButtons>
                            <button className="info" onClick = {()=>handleShowInfo(id)}>INFO</button>
                            <button className="catch">CATCH</button>
                        </DivButtons>

                    </div>
                )
            })}
        </DivGrid>
    )
}

function renderList(pokemonList,  handleShowInfo) {
    return (
        <DivTable>
            <table>
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Photo</th>
                        <th>Name</th>
                        <th></th>
                    </tr>
                </thead>
                <tbody>
                    {pokemonList.map(pokemon => {
                        const id = getPokemonID(pokemon.url);
                        const name = firstUpperCase(pokemon.name);
                        let imageUrl = getFrontSprite(pokemon.url);

                        return (
                            <tr key={id}>
                                <td>{id}</td>
                                <td>
                                    <img
                                        draggable="false"
                                        src={ imageUrl } alt=""
                                    />
                                </td>
                                <td>{name}</td>
                                <td>
                                    <DivButtons>
                                        <button className="info" onClick = {()=>handleShowInfo(id)}>INFO</button>
                                        <button className="catch">CATCH</button>
                                    </DivButtons>
                                </td>
                            </tr>
                        )
                    })}
                </tbody>
            </table>
        </DivTable>
    )
}


const PokemonList = () => {
    const { pokemonList, loading, error } = useSelector(state => state.pokemonReducer)
    const [onLoading, setOnLoading] = useState(true)
    const [typeView, setOnTypeView] = useState("list")
    const [showInfo, setshowInfo] = useState(false)
    const [PokemonID, setPokemonID] = useState(0)

    const handleClick = (type) =>{
        setOnTypeView(type)
    }

    const showModal = () =>{
        setshowInfo(!showInfo)
    }

    const handleShowInfo = (id) =>{  
        setPokemonID(id) 
        showModal();
    }

    return (
        <div>          
            <GroupButtons onClick = {handleClick}>grid</GroupButtons>            
            {typeView === "grid" && renderGrid(pokemonList, handleShowInfo) }
            {typeView === "list" && renderList(pokemonList, handleShowInfo)}
            {showInfo && <><PokemonModal PokemonID = {PokemonID}/><BlackModal onClick = {showModal}/>)</>}
            
        </div>)
}

export default PokemonList;


const DivGrid = styled.div`
    display:grid;
    grid-template-columns: repeat( auto-fit , minmax(140px , 1fr));
    grid-gap: 5px;    
    padding:20px;  
    align-items:center ;
    text-align:center;  
    
    .card{
        user-select: none;        
        padding:3px;   
        border: 1px solid #f2f2f2;  
        border-radius:15px;   

        :hover{
            box-shadow: 0 3px 8px 0 rgba(255,0,0, .08  )
        }

        img{            
            padding:5px;
            padding-bottom:0px;
            height:96px;
            width:96px;
        }   
    }
  
`
const DivButtons = styled.div`
padding: 0 0 2px 0;
    button{
        border: none;
        border-radius:15px;
        padding: 2px 5px;
        cursor: pointer;
        width:56px;
        height:20px;
        margin: 0 2px;
        outline:none;    
    }
    .info{
        background-color:transparent;
        color:#ef5350;    
        border: solid 1px #ef5350;
    }
    .catch{
        background-color: #ef5350;
        color:white;    
    }
`
const DivTable = styled.div`
width:60%;
height: 70vh;
margin:auto;
margin-top: 20px;
overflow-x:hidden;
overflow-y:auto;


::-webkit-scrollbar{
    width:10px; 
    background-color: white;      
    border-radius: 15px;
    background-color: #f3f3f3;      
}

::-webkit-scrollbar-thumb{
    background-color: #ef5350;
    border-radius: 15px;
}

@media (max-width: 1024px){
    width:70%; 
}

@media (max-width: 768px){
    width:80%; 
}
table{    
    padding:0;  
    width:100%;
    text-align:center;  
    height: 70vh;
    border-collapse: collapse;
     

    tbody{
        height:100%; 
        }        
     
    img{
        padding:0;
        padding-bottom:0px;
        height:48px;
        width:48px;
    }
}
`
