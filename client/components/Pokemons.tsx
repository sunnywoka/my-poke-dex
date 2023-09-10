import { loadPokemons } from '../api/apiPokemons'
import { useQuery } from '@tanstack/react-query'

interface pokemon {
  name: string
  url: string
}

function Pokemons() {
  const { data } = useQuery(['pokemon'], loadPokemons)

  return (
    <>
      <h1 className="text-center text-6xl font-bold underline ">Pokemons</h1>
      <div>
        <ul>
          {data?.map((pokemon: pokemon) => (
            <li key={pokemon.name}>
              <p>{pokemon.name}</p>
            </li>
          ))}
        </ul>
      </div>
    </>
  )
}

export default Pokemons
