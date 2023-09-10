import { Link, Outlet } from 'react-router-dom'

function Layout() {
  return (
    <>
      <h1>{'It is my version of Poke Dex🚀 🚀'}</h1>
      <Link to="/">Home</Link>
      <br></br>
      <Link to="/pokemons">Show All Pokemons</Link>
      <Outlet />
    </>
  )
}

export default Layout
