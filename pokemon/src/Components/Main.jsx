import React, { useEffect, useState } from "react";
import Card from "./Card";
import Pokeinfo from "./Pokeinfo";
import axios from "axios";

const Main = () => {

    const [pokeData, setPokeData] = useState([]);
    const [loading, setLoading] = useState(true);
    const [url, setUrl] = useState("https://pokeapi.co/api/v2/pokemon/")
    const[nextUrl, setNextUrl] = useState();
    const [previousUrl, setPreviousUrl] = useState();
    const [pokeDex, setPokeDex] = useState();

    const pokeFun = async () => {
        setLoading(true);
        const res = await axios.get(url);
        setNextUrl(res.data.next);
        setPreviousUrl(res.data.previous);
        getPokemon(res.data.results);
        setLoading(false);
        // console.log(pokeData)
    }

    const getPokemon = async (res) => {
        res.map(async (item) => {
            const result = await axios.get(item.url);
            // console.log(result.data)
            setPokeData(state => {
                state = [...state, result.data]
                state.sort((a, b) => a.id > b.id ? true : false)
                return state
            })
        })
    }
    useEffect(() => {
        pokeFun();
    },[url]) // sempre q a URL for atualizada o UseEffect vai ser ativado

    return (
        <div className="container">
            <div className="left-content">
                <Card pokemon={pokeData} loading={loading} infoPokemon={poke => setPokeDex(poke)}/>
                <div className="btn-group">
                    { previousUrl && <button onClick={() => {
                        setPokeData([])
                        setUrl(previousUrl)
                    }}>Previous</button> }
                    
                    <button onClick={() => {
                        setPokeData([])
                        setUrl(nextUrl)
                    }}>Next</button>
                </div>
            </div>
            <div className="right-content">
                <Pokeinfo data={pokeDex}/>
            </div>
        </div>
    )
}

export default Main
