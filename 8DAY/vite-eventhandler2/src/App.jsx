import { useEffect, useState } from 'react'
import './App.css'

function App () {

  const [data, setData] = useState([])

  useEffect(() => {
    // fetch("http://localhost:3000/data")
    //   .then((res) => res.json())
    //   .then((res) => console.log(res));
  }, []);

  return (
    <>
      <div>data list</div>
      {data.map((el) => (
        <div key={el.id}>{el.content}</div>
        ))}
        <MouseFollower />
        <ScrollIndicate />
        <AlertTimer />
        <div style={{ height: "300vh"}}></div>
    </>
  );
}

const MouseFollower = () => {
  const [position, setPosition] = useState({ x: 0, y: 0})

  useEffect(()=>{
    const handleMouseMove = (event) => {
      setPosition({ x: event.clientX, y: event.clientY});
      console.log("mouseMoved!!");
    };
    window.addEventListener("mouseover", handleMouseMove);
    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  });
  return(
    <div style={{
      position: "fixed",
      top: position.y,
      left: position.x,
      width: "15px",
      height: "15px",
      borderRadius: "50%",
      backgroundColor: "lightgreen",
      transform: "translate(-50%, -50%)",
      pointerEvents: "none",
    }}></div>
  );
}

const ScrollIndicate = () => {
  const [scrollWidth, setScrollWidth] = useState(0)

  useEffect(() => {
    const handleScoll = () => {

      const scrollTop = window.scrollY

      const windowHeight =
        document.documentElement.scrollHeight
        - document.documentElement.clientHeight

      const scrollPercentage = (scrollTop / windowHeight) * 100;

      setScrollWidth(scrollPercentage);
    }
    window.addEventListener("scroll", handleScoll);
    return()=>{
      window.removeEventListener("scroll", handleScoll);
    }
  });
  return(
    <div style={{
      position: "fixed",
      top: 0,
      left: 0,
      width: `${scrollWidth}%`,
      height: "10px",
      backgroundColor: "lightgreen"
    }}></div>
  );
}

const AlertTimer = () => {
  const [showAlert, setshowAlert] = useState(true);

  useEffect(() => {
    const setTimeoutId = setTimeout(() => {
      showAlert === true ? alert('시간초과') : null;
    }, 3000);
    return () => {
      clearTimeout(setTimeoutId);
    };
  });

  return<button onClick={() => setshowAlert(false)}>빨리클릭 !!!</button>;
};

export default App;