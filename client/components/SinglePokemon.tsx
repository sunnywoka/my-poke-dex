import { useQuery } from '@tanstack/react-query'
import { useLocation } from 'react-router-dom'
import { loadPokemon } from '../api/apiPokemons'
import Ability from '../../models/Ability'

function SinglePokemon() {
  const { pathname } = useLocation()
  const pokemonName =
    pathname.slice(10).charAt(0).toUpperCase() + pathname.slice(11)
  const { data } = useQuery(['pokemon'], () => loadPokemon(pathname.slice(10)))
  return (
    <>
      <h1 className="text-center text-6xl font-bold underline ">
        {pokemonName}
      </h1>
      <ul>
        {data?.map((ability: Ability) => (
          <>
            {!ability.is_hidden ? (
              <label htmlFor={ability.ability.name}>Ability: </label>
            ) : (
              <label htmlFor={ability.ability.name}>Hidden ability: </label>
            )}
            <li key={ability.ability.name}>
              <p>{ability.ability.name}</p>
            </li>
          </>
        ))}
      </ul>
    </>
  )
}

export default SinglePokemon
