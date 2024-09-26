import { useSelector } from "react-redux"
import { seletFavoritePokemons } from "../RTK/selector"
import { Card } from "../component/Card"

export default function Favorite(){
    const pokemon = useSelector(seletFavoritePokemons)
    return (
        <>
            {pokemon.map(el =><Card key={el.id} pokemon={el}/>)}
        </>
        )
}