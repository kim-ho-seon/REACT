import { useEffect, useState } from 'react'
import './App.scss'
import { useDispatch, useSelector } from 'react-redux'
import { fechMultiplePokemonById } from './RTK/thunk'
import { Link, useNavigate, Route, Routes } from 'react-router-dom'
import Search from './pages/Search'
import Detail from './pages/Detail'
import Main from './pages/main'
import Favorite from './pages/Favorite'

function App() {
  
  const navigate = useNavigate()
  const dispatch = useDispatch()
  // const pokemonData = useSelector(state => state.pokemon)
  // console.log(pokemonData)
  useEffect(()=>{
    dispatch(fechMultiplePokemonById(152))
  }, [])

  return (
    <>
      <h1 className='border-t-[50px] border-t-[red] bg-black text-white text-[40px] text-center'>포켓몬 도감</h1>
      <nav className=' py-[10px] border-b-[3px] border-b-[black] flex gap-5 justify-center'>
        <Link to={'/'}>메인</Link>
        <Link to={'/favorite'}>찜목록</Link>
        <div>
          <input onChange={(e) => navigate(`/search?pokemon=${e.target.value}`)} className='w-28 border-b border-[darkgray] px-2' />
          <span>⌕</span>
        </div>
      </nav>
      <main className='flex flex-wrap gap-5 justify-center pt-5 bg-[gray] pb-[20px]'>
        <Routes>
          <Route path={'/'} element={<Main />} />
          <Route path={'/detail/:pokemonId'} element={<Detail />} />
          <Route path={'/search'} element={<Search />} />
          <Route path={'/favorite'} element={<Favorite />} />
        </Routes>
      </main>
    </>
  )
}

export default App;
