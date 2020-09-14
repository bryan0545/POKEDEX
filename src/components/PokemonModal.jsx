import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { fetchPokeApi } from './../api/api';
import { firstUpperCase } from './../tools/tools'
import SkillBar from './SkillBar';
import BadgeType from './BadgeType';

const PokemonModal = ({ PokemonID }) => {

    const [pokemon, setPokemon] = useState({
        id: 0,
        name: "",
        photo: "",
        height: 0,
        weight: 0,
        types: [],
        stats: {
            hp: "",
            attack: "",
            defense: "",
            specialAttack: "",
            specialDefense: "",
            speed: ""
        },
        abilities: [],
        eggGroup: [],
        description: ""
    });

    async function getPokeInfo() {
        let types = [], abilities = [], eggGroups = [];
        const pokemonData = await fetchPokeApi(`https://pokeapi.co/api/v2/pokemon/${PokemonID}`);
        const pokemonSpecies = await fetchPokeApi(`https://pokeapi.co/api/v2/pokemon-species/${PokemonID}`);

        const flavorT = (pokemonSpecies.data.flavor_text_entries.find(flavor => flavor.language.name === "en"))

        pokemonData.data.types.map(type => types.push(type.type.name));
        abilities = pokemonData.data.abilities.map(ability => firstUpperCase(ability.ability.name.replace("-", " "))).join(", ");
        eggGroups = pokemonSpecies.data.egg_groups.map(eggGroup => firstUpperCase(eggGroup.name)).join(", ");

        setPokemon({
            ...pokemon,
            id: pokemonData.data.id,
            name: firstUpperCase(pokemonData.data.name),
            photo: pokemonData.data.sprites.other['official-artwork'].front_default,
            height: `${((pokemonData.data.height * 0.328084 + 0.0001) * 100 / 100).toFixed(2)} ft`, // convert to cm
            weight: `${((pokemonData.data.weight * 0.220466 + 0.0001) * 100 / 100).toFixed(2)} lbs`, // convert to lbs
            types,
            stats: {  
                hp:             pokemonData.data.stats[0] ? pokemonData.data.stats[0].base_stat : 0,
                attack:         pokemonData.data.stats[0] ? pokemonData.data.stats[1].base_stat : 0,
                defense:        pokemonData.data.stats[0] ? pokemonData.data.stats[2].base_stat : 0,
                specialAttack:  pokemonData.data.stats[0] ? pokemonData.data.stats[3].base_stat : 0,
                specialDefense: pokemonData.data.stats[0] ? pokemonData.data.stats[4].base_stat : 0,
                speed:          pokemonData.data.stats[0] ? pokemonData.data.stats[5].base_stat : 0,
            },
            abilities,
            eggGroup: eggGroups,
            description: flavorT? flavorT.flavor_text : "?????????"
        })

    }

    useEffect(() => {
        getPokeInfo();
    }, [])

    return (
        <PokeModal>
            {pokemon.id != 0 ?
                <div>
                    <div className="header">
                        <h2>{`${pokemon.id}. `} {pokemon.name}</h2>
                    </div>
                    <div className="body">
                        
                        <PokeImg src={pokemon.photo !== null ? pokemon.photo : "imageNotAvailable.png"} alt="" />
                        <Stats>
                            <div><p className="title">Stats </p></div>
                            <div><p className="mark">HP </p><SkillBar value={pokemon.stats.hp}></SkillBar> </div>
                            <div><p className="mark">Attack </p><SkillBar value={pokemon.stats.attack}></SkillBar> </div>
                            <div><p className="mark">Defense </p><SkillBar value={pokemon.stats.defense}></SkillBar></div>
                            <div><p className="mark">Apecial Attack </p><SkillBar value={pokemon.stats.specialAttack}></SkillBar> </div>
                            <div><p className="mark">Special Defense </p><SkillBar value={pokemon.stats.specialDefense}></SkillBar> </div>
                            <div><p className="mark">Speed </p><SkillBar value={pokemon.stats.speed}></SkillBar> </div>
                        </Stats>
                    </div>
                    <div className="body">
                        <Info>
                            <p className="title">Information</p>
                            <div className="types">
                                <p>{`Types: `}</p>
                                {pokemon.types.map(type => <BadgeType type={type} key={type} />)}
                            </div>
                            <p>{`Height: ${pokemon.height}`}</p>
                            <p>{`Weight: ${pokemon.weight}`}</p>
                            <p>{`Abilities: ${pokemon.abilities}`}</p>
                            <p>{`EggGroup: ${pokemon.eggGroup}`}</p>

                        </Info>

                        <Description className="description">
                            <p className="title" >Descrption</p>
                            <p>{pokemon.description}</p>
                            {console.log(pokemon.description)}
                        </Description>
                    </div>


                </div>
                :
                <LoadingDescription>
                    <img src="spinner.gif" alt="" />
                </LoadingDescription>
            }
        </PokeModal>
    )
}

export default PokemonModal;

const LoadingDescription = styled.div`  
   text-align:center;   
   
`
const PokeImg = styled.img` 
    width: 160px;
    height: 160px;
    margin: auto;
    margin-left: 20px; 
    margin-right: 68px; 
` 

const PokeModal = styled.div`    
    position:fixed;
    display: flex;
    justify-content: center;
    align-items: center;
    top:50%;
    right:50%;
    background-color:white;
    height: 370px;
    width: 600px;
    margin:auto;
    z-index:200;
    transform:translate( 50%, -50%);
    border-radius:15px;
    box-shadow: 0 4px 8px 0 rgba(0,0,0,.8);
    padding: 0 20px;   

    @media (max-width: 735px){ 
        height:600px;
        width: 320px;
      
        .title {  
            font-size: 18px;    
            padding-bottom: 2px;
            padding-top: 5px;  
            font-weight: bold;              
        }  
        img {
            margin:auto;
        }    
        .body{
            flex-flow: column nowrap;
        }
    }  

    .title {  
        font-size: 18px;    
        padding-bottom: 5px;  
        font-weight: bold;               
    }   
   
    .header{     
        text-align:center; 
        display:block;
        padding: 0 10px 0 10px;
        color: #ef5350;
        border-radius:15px 15px 0 0 ;        
    }

    .body{
        display:flex;
        padding:  0 10px;    
    }
 
`

const Stats = styled.div`
  
    margin: auto 0;
    min-width: 56%;
    
    
    div{
        display: flex;
   
        .mark{
            width:120px;
            font-size: 14px;
        }
    }
    @media (max-width: 735px){ 
        .mark{
            width:100px; 
           
        }   
    }
`

const Info = styled.div`  
    padding-left: 10px;  
    font-size: 14px;    
    min-width: 44%; 
   
    .types{
            display:flex;
    }
`

const Description = styled.div`   
    padding-left: 10px;
    font-size: 14px;    
`