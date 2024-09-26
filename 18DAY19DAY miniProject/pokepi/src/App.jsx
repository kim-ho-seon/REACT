import { useEffect, useState } from 'react'
import './App.scss'
import { useDispatch, useSelector } from 'react-redux'
import { fechMultiplePokemonById } from './RTK/thunk'
import { Link, Route, Routes } from 'react-router-dom'
import Search from './pages/Search'
import Detail from './pages/Detail'
import Main from './pages/main'
import Favorite from './pages/Favorit'

function App() {
  const dispatch = useDispatch()
  // const pokemonData = useSelector(state => state.pokemon)
  // console.log(pokemonData)
  useEffect(()=>{
    dispatch(fechMultiplePokemonById(152))
  }, [])

  return(
  <>
    <h1 className='text-[40px] text-center'>포켓몬 도감</h1>
    <nav className='flex gap-3 justify-center'>
    <Link to={'/'}>메인</Link>
    <Link to={'/detail/1'}>상세정보</Link>
    <Link to={'/search'}>검색</Link>
    <Link to={'/favorit'}>찜목록</Link>
    </nav>
    <main className='flex flex-wrap gap-5 justify-center pt-5'>
      <Routes>
        <Route path={'/'} element={<Main />} />
        <Route path={'/detail/:pokemonId'} element={<Detail />} />
        <Route path={'/search'} element={<Search />} />
        <Route path={'/favorit'} element={<Favorite />} />
      </Routes>
    </main>
  </>
  )
}

export default App;
