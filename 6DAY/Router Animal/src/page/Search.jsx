import { getRegExp } from "korean-regexp";
import { Link, useSearchParams } from "react-router-dom";
import { data } from "../assets/data/data";


function Search ( ) {
    const [searchParams] = useSearchParams();
    const param = searchParams.get("animal");
    const reg = getRegExp(param);
    
    const filterData= data.filter((el) => el.name.match(reg))
    return(
        <>
                    <ul>
                {filterData.map(el => (
                    <li key={el.id}>
                        <Link to={`/detail/${el.id}`}>
                        <img src={el.img} alt={el.name + `사진`} />
                        <div>{el.name}</div>
                        </Link>
                    </li>
                ))}
            </ul>
        </>
    )
}

export default Search;