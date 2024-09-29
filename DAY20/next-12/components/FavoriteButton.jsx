import { useEffect, useState } from "react";

export default function FavoriteButton({ animalId}){
    const [favorites, setFavorites] = useState([])
    const [isFavorites, setIsFavorites] = useState(false)
    useEffect(()=>{
        fetch (`http://localhost:3000/api/favorite`)
        .then(res => res.json())
        .then(res => {
            setFavorites(res)
            res.includes(animalId) ? setIsFavorites(true) : null
        })
    }, [isFavorites])

    const handle = ()=>{
        const method = isFavorites ? "DELETE" : "POST"
        fetch(`http://localhost:3000/api/favorite/${animalId}`, { method})
        .then(res => setIsFavorites(prev => !prev))
    }
    return(
        <span onClick={handle}>
            {isFavorites ? '💚' :'🖤'}
        </span>
    )
}