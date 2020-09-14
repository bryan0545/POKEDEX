import React, { useState } from 'react';
import { useEffect } from 'react';
import { fetchPokeApi } from './../api/api';
import { firstUpperCase } from './../tools/tools';

const FilterPokemon = () => {
    const [pokemonName, setPokemonName] = useState("");
    const [types, setTypes] = useState({});

    const getTypes = async () => {
        const typesResp = await fetchPokeApi("https://pokeapi.co/api/v2/type");
        const types = typesResp.data.results.map(type => type.name)
        setTypes(types)
    }

    useEffect(() => {
        getTypes();
    }, [])

    const handleOnChange = (e) => {
        setPokemonName(e.target.value);
    }

    return (
        <div>
            <label>Pokemon: </label>
            <input
                name="pokemonName"
                onChange={handleOnChange}
            />
            <label>Types: </label>
            <select>
                {types.length > 0 ?
                    <>
                        <option value=""> - All -</option>
                        {types.map(type =>
                            <option >{firstUpperCase(type)}</option>
                        )}
                    </>
                    :
                    <option value="">loading...</option>

                }
            </select>

        </div >
    );
};

export default FilterPokemon;