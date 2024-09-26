import { useSelector } from "react-redux"
import { useParams } from "react-router-dom"
import { selectPokemonById } from "../RTK/selector"
import FavoriteButton from "../component/FavoriteButton"
import FlipCard from "../component/FlipCard"

export default function Detail() {
    const { pokemonId } = useParams()
    console.log(typeof pokemonId)
    const pokemon = useSelector(selectPokemonById(Number(pokemonId)))
    console.log(typeof pokemon)

    return (
        <div className="flex flex-col justify-center items-center border p-30 rounded-xl bg-white py-8 px-16 border-b-[5px] border-r-[8px] border-black">
            <div className="text-3xl mb-3">
                {pokemon.name}
                <FavoriteButton pokemonId={Number(pokemonId)} />
            </div>
            <div className="whitespace-pre-wrap text-center">{pokemon.description}</div>
            <FlipCard front={pokemon.front} back={pokemon.back} />
            {/* <img className="w-52" src={pokemon.front}></img> */}
        </div>)
}