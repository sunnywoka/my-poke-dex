import { useLocation } from 'react-router-dom'

function SinglePokemon() {
  const { pathname } = useLocation()
  const pokemonName =
    pathname.slice(10).charAt(0).toUpperCase() + pathname.slice(11)
  return (
    <>
      <h1 className="text-center text-6xl font-bold underline ">
        {pokemonName}
      </h1>
    </>
  )
}

export default SinglePokemon
