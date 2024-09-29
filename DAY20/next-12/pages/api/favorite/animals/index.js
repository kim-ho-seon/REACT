import { favorites, data } from "../../../../assets/data/data";

export default function handler(req, res) {
    const favoriteAnimal = data.filter(animals =>favorites.includes(animals.id))
    res.status(200).json(favoriteAnimal)
  }
  