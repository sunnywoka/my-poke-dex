import App from './components/App.tsx'
import Pokemons from './components/Pokemons.tsx'
import Layout from './components/Layout.tsx'
import { Route, createRoutesFromElements } from 'react-router-dom'
import SinglePokemon from './components/SinglePokemon.tsx'

export const routes = createRoutesFromElements(
  <Route path="/" element={<Layout />}>
    <Route index element={<App />} />
    <Route path="/pokemons" element={<Pokemons />} />
    <Route path="/pokemons/:pokemon" element={<SinglePokemon />} />
  </Route>
)
