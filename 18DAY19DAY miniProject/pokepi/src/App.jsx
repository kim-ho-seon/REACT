import { useEffect, useState } from 'react'
import './App.css'
import { useDispatch, useSelector } from 'react-redux'
import { ffechMultiplePokemonByI } from './RTK/thunk'

function App() {
  const dispatch = useDispatch()
  const pokemonData = useSelector(state => state.pokemon)
  console.log(pokemonData)
  useEffect(()=>{
    dispatch(ffechMultiplePokemonByI(151))
  }, [])

  return(
    <>

    </>
  )
}

export default App;
