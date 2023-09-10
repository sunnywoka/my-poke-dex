import express from 'express'
import { Home } from '../../models/home.ts'
import { loadPokemons } from '../../client/api/apiPokemons.ts'

const router = express.Router()

// GET /api/v1/welcome/
router.get('/', (req, res) => {
  try {
    res.json({ statement: 'Welcome to external APIs!' } as Home)
  } catch (err) {
    if (err instanceof Error) {
      res.status(500).send((err as Error).message)
    } else {
      res.status(500).send('Something went wrong')
    }
  }
})

router.get('/all-pokemons', async (req, res) => {
  try {
    res.json(await loadPokemons())
  } catch (err) {
    if (err instanceof Error) {
      res.status(500).send((err as Error).message)
    } else {
      res.status(500).send('Something went wrong')
    }
  }
})

export default router
