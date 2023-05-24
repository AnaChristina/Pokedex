import './styles.css';

import axios from "axios";
import { useEffect, useState } from "react";
import Pesquisa from '../components/Pesquisa/Pesquisa'
import Card from "../components/Card";
import { Header } from "../components/Header";
import Lista from "../components/Lista"
import Telinha from "../components/Telinha"

export const Home = () => {
    const [pokemons, setPokemons] = useState([]);

    useEffect(() => {
        getPokemons();
    }, []);

    const getPokemons = async () => {
        var endpoints = []
        for (var i = 1; i <= 9; i++) {
            endpoints.push(`https://pokeapi.co/api/v2/pokemon/${i}/`);
        }

        try {
            var response = await axios.all(endpoints.map((endpoint) => axios.get(endpoint)));
            var pokemonData = response.map((res) => res.data);
            setPokemons(pokemonData);
        } catch (error) {
            console.log('Erro ao buscar os pokémons:', error);
        }
    };

    const PesquisaPokemon = (name) =>{
        var filtroPokemon = []
        if (name === ""){
            getPokemons();
        }
        for (var i in pokemons){
            if (pokemons[i].name.includes(name)) {
                filtroPokemon.push(pokemons[i]);
            }
        }
        
        setPokemons(filtroPokemon);
    };

    return (
        <div>
            
            <Header />
            <Pesquisa PesquisaPokemon={PesquisaPokemon} />
            <div PesquisaPokemon={PesquisaPokemon}>
                {pokemons.map((pokemon, key) => (
                    <Card name={pokemon.name} image={pokemon.sprites.other.dream_world.front_default} types ={pokemon.types} key={key} />
                ))}    
            </div>
            <div className="campo">
                <Lista pokemons={pokemons} />
                < Telinha />
            </div>
           
        </div>
    );
};

export default Home;
