import { createSelector } from "@reduxjs/toolkit";

export const selectPokemonById= (pokemonId) => 
    createSelector(
    state => state.pokemon.data,
    (pokemon) => pokemon.find(el => el.id === pokemonId)   
)

export const selectPokemonByRegExp = (reg) => createSelector(
    state => state.pokemon.data,
    (pokemon) => pokemon.filter(el => el.name.match(reg))
)

export const seletFavoritePokemons = createSelector(
    // console.log(Array.isArray(favorite))
    state => state.pokemon.data,
    state => state.favorite,
    (pokemon, favorite) => {
        return pokemon.filter(el => favorite.includes(el.id))
    }
)
