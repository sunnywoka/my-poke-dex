import { loadPokemons } from '../api/apiPokemons'
import { useQuery } from '@tanstack/react-query'
import Pokemon from '../../models/Pokemon'
import { Link } from 'react-router-dom'

function Pokemons() {
  const { data } = useQuery(['pokemon'], loadPokemons)

  return (
    <>
      <h1 className="text-center text-6xl font-bold underline ">Pokemons</h1>
      <div>
        <ul>
          {data?.map((pokemon: Pokemon) => (
            <li key={pokemon.name} className="text-center">
              <Link to={`${pokemon.name}`}>
                <p>
                  {pokemon.name.charAt(0).toUpperCase() + pokemon.name.slice(1)}
                </p>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </>
  )
}

export default Pokemons
