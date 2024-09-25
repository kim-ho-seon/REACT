import { Link, useSearchParams } from "react-router-dom";
import { data } from "../assets/data/data";
import { getRegExp } from "korean-regexp";
import { useEffect, useRef, useState } from "react";

// function Search() {
//   const [searchParams] = useSearchParams();
//   const param = searchParams.get("animal");
//   const reg = getRegExp(param);

//   const filteredData = data.filter((el) => el.name.match(reg));

//   return (
//     <ul>
//       {filteredData.map((el) => (
//         <li key={el.id}>
//           <Link to={`/detail/${el.id}`}>
//             <img src={el.img} />
//             <div>{el.name}</div>
//           </Link>
//         </li>
//       ))}
//     </ul>
//   );
// }

// debounce

// function Search() {
//   const [searchParams] = useSearchParams();
//   const [filteredData, setFilteredData] = useState(data);
//   const param = searchParams.get("animal");
//   const reg = getRegExp(param);

//   useEffect(()=>{
//     const debounceTimer = setTimeout(() => {
//       const newFilteredData = data.filter((el) => el.name.match(reg))
//       setFilteredData(newFilteredData)
//     }, 1000);
//     return () => clearTimeout(debounceTimer);
//   }, [param]);

//   return (
//     <ul>
//       {filteredData.map((el) => (
//         <li key={el.id}>
//           <Link to={`/detail/${el.id}`}>
//             <img src={el.img} />
//             <div>{el.name}</div>
//           </Link>
//         </li>
//       ))}
//     </ul>
//   );
// }

// throuttle

function Search() {
  const [searchParams] = useSearchParams();
  const [filteredData, setFilteredData] = useState(data);
  const param = searchParams.get("animal");
  const reg = getRegExp(param);
  const time = useRef(new Date())

  useEffect(() => {
    const newTime = new Date();

    const throttleTimer = setTimeout(() => {
      const newFilteredData = data.filter((el) => el.name.match(reg))
      setFilteredData(newFilteredData)
      time.current = new Date();
    }, 1000 - newTime - time.current);

    return () => clearTimeout(throttleTimer);
  }, [param]);

  return (
    <ul>
      {filteredData.map((el) => (
        <li key={el.id}>
          <Link to={`/detail/${el.id}`}>
            <img src={el.img} />
            <div>{el.name}</div>
          </Link>
        </li>
      ))}
    </ul>
  );
}

export default Search;
