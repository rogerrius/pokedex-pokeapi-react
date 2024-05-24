import './App.css';
import { useRoutes } from 'react-router-dom';
import routes from './routes';
import { useState, useEffect } from 'react';
import { getElements } from './API';

function App() {
  const [n_gen, setN_gen] = useState(0);
  const [pokemon, setPokemon] = useState([]);
  const [entradaPokemon, setEntradaPokemon] = useState(false);
  const [currentPokemonId, setCurrentPokemonId] = useState(1);
  const [shiny, setShiny] = useState(false);

  const routing = useRoutes(routes(n_gen, setN_gen, pokemon, entradaPokemon, setEntradaPokemon, currentPokemonId, setCurrentPokemonId, shiny, setShiny));

  const gen = [
      'https://pokeapi.co/api/v2/pokemon?limit=151&offset=0',//1
      'https://pokeapi.co/api/v2/pokemon?limit=100&offset=151',//2
      'https://pokeapi.co/api/v2/pokemon?limit=135&offset=251',//3
      'https://pokeapi.co/api/v2/pokemon?limit=107&offset=386',//4
      'https://pokeapi.co/api/v2/pokemon?limit=156&offset=493',//5
      'https://pokeapi.co/api/v2/pokemon?limit=72&offset=649',//6
      'https://pokeapi.co/api/v2/pokemon?limit=88&offset=721',//7
      'https://pokeapi.co/api/v2/pokemon?limit=96&offset=809',//8
      'https://pokeapi.co/api/v2/pokemon?limit=120&offset=905'//9
  ]

  useEffect(() => {
      const getPokemon = async () => {
          const { result } = await getElements(gen[n_gen]);
          const pokemons = await Promise.all(result.results.map(async (poke) => {
              const { result: pokemonData } = await getElements(poke.url);
              return pokemonData;
          }));

          setPokemon(pokemons);
      };

      getPokemon();
  }, [n_gen]);

  useEffect(() => {
      if (pokemon.length === 20) {
          const sortedPokemon = [...pokemon].sort((a, b) => a.id - b.id);
          console.log(sortedPokemon);
          setPokemon(sortedPokemon);
      }
  }, []);

  return (
    <div className='App'>
      {routing}
    </div>
  );
}

export default App;
