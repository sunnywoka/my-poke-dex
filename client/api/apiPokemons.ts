import request from 'superagent'

export async function loadPokemons() {
  const res = await request.get(
    'https://pokeapi.co/api/v2/pokemon/?limit=2000&offset=0"'
  )
  const pokemons = res.body.results
  return pokemons
}
