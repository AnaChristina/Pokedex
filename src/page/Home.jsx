import './styles.css';

import axios from "axios";
import { useEffect, useState } from "react";
import Pesquisa from '../components/Pesquisa/Pesquisa'
import Card from "../components/Card";
import { Header } from "../components/Header";
import Lista from "../components/Lista";
import Telinha from "../components/Telinha";
import Seta from "../components/Seta";


export const Home = () => {
    const [pokemons, setPokemons] = useState([]);

    useEffect(() => {
        getPokemons();
    }, []);

    const getPokemons = async () => {
        var endpoints = []
        for (var i = 1; i <= 3; i++) {
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

    const pesquisarPokemons = async (name) => {
        if (name === "") {
            getPokemons();
        } else {
            try {
                const response = await axios.get(`https://pokeapi.co/api/v2/pokemon/?limit=150`);
                const pokemonList = response.data.results;
                const endpoints = pokemonList.map((pokemon) => pokemon.url);

                const pokemonResponses = await axios.all(endpoints.map((endpoint) => axios.get(endpoint)));
                const pokemonData = pokemonResponses.map((res) => res.data);

                const filteredPokemons = pokemonData.filter((pokemon) => pokemon.name.includes(name));

                setPokemons(filteredPokemons);
            } catch (error) {
                console.log('Erro ao buscar os pokémons:', error);
            }
        }
    };

    return (
        <div>
            <Header />
            <Pesquisa pesquisarPokemons={pesquisarPokemons} />

            <div>
                {pokemons.map((pokemonData, key) => (
                    <div name={pokemonData.name} image={pokemonData.sprites.other.dream_world.front_default} types={pokemonData.types} key={key} />
                ))}
            </div>

            <div>
                {pokemons.map((pokemon, key) => (
                    <Card name={pokemon.name} image={pokemon.sprites.other.dream_world.front_default} types={pokemon.types} key={key} />
                ))}
            </div>

            <div className="campo">
                <Lista pokemons={pokemons} />
                <Telinha pokemons={pokemons} />
            </div>
        </div>
    );
};

export default Home;
