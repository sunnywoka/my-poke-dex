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
      <h1>Pokemons</h1>
      <div>
        <ul>
          {data?.map((pokemon: pokemon) => (
            <li
              key={pokemon.name}
              style={{ display: 'flex', gap: '3px', alignItems: 'center' }}
            >
              <p>{pokemon.name}</p>
            </li>
          ))}
        </ul>
      </div>
    </>
  )
}

export default Pokemons
