import './App.css'
import { Link, Route, Routes, useLocation, useNavigate, useParams, useSearchParams } from 'react-router-dom'

function App() {
  const navigate = useNavigate()

  const location = useLocation()
  console.log(location);
  console.log(location.pathname);
  console.log(location.search); // 물음표 뒤 내용

  return (
    <>
      {/* <div>
        <Link to="/main"> Main </Link>
        <Link to="/mypage"> Mypage </Link>
        <Link to="/test"> Test </Link>
      </div> */}
      <div>
        <button onClick={() => navigate('/main')}>Main</button>
        <button onClick={() => navigate('/mypage')}>Mypage</button>
        <button onClick={() => navigate('/test')}>Test</button>
      </div>
      <div>
        <button onClick={() => navigate(-1)}>{`<- 뒤로가기`}</button>
        <button onClick={() => navigate(+1)}>{`앞으로가기 ->`}</button>
      </div>
      <Routes>
        {/* <Route path='/main/:name' element={<Main/>} /> */}
        {/* http://localhost:5173/main/kkk */}
        <Route path='/main/' element={<Main/>} />
        <Route path='/mypage' element={<div>My Page</div>} />
        <Route path='/test' element={<div>Test Page</div>} />
      </Routes>
      
    </>
  )
}

function Main (){
 
  const params = useParams() 
  console.log(params.name) // kkk

  //  http://localhost:5173/main?nickname=kmad&school=ozcoding
  const location = useLocation()
  console.log(location.search); // 물음표 내용
  // ?nickname=kmad&school=ozcoding

  const [searchParams, setSearchParams] = useSearchParams()
  console.log(searchParams.get("nickname")) // kmad
  console.log(searchParams.get("school")) // ozcoding
  return <div>Main Page</div>
}

export default App;
