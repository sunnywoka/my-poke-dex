import { useQuery } from '@tanstack/react-query'
import { useLocation } from 'react-router-dom'
import { loadPokemon } from '../api/apiPokemons'
import Ability from '../../models/Ability'
import GameIndice from '../../models/GameIndice'

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
        {data?.abilities.map((pokemonAbility: Ability) => (
          <>
            {!pokemonAbility.is_hidden ? (
              <label htmlFor={pokemonAbility.ability.name}>Ability: </label>
            ) : (
              <label htmlFor={pokemonAbility.ability.name}>
                Hidden ability:{' '}
              </label>
            )}
            <li key={pokemonAbility.ability.name}>
              <p>{pokemonAbility.ability.name}</p>
            </li>
          </>
        ))}
      </ul>
      <>
        <label htmlFor="gameVersion">Version: </label>
        <ul>
          {data?.game_indices.map((gameIndice: GameIndice) => (
            <li key={gameIndice.version.name}>
              <p>{gameIndice.version.name}</p>
            </li>
          ))}
        </ul>
      </>
    </>
  )
}

export default SinglePokemon
