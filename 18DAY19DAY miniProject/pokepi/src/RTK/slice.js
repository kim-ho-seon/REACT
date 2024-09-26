import { createSlice } from "@reduxjs/toolkit";
import { fechMultiplePokemonById } from "./thunk";

export const pokemonSlice = createSlice({
    name: 'pokemon',
    initialState: {
        data: [],
        loading: true,
    },
    reducers: { }, //동기적 상태 변경
    extraReducers:
    (builder) => {
        builder
        .addCase(fechMultiplePokemonById.pending, (state)=>{
            state.loading = true;
        })
        .addCase(fechMultiplePokemonById.rejected, (state)=>{
            state.loading = false;
        })
        .addCase(fechMultiplePokemonById.fulfilled, (state, action)=>{
            state.loading = false;
            state.data = action.payload
        })
    },
}) // action, reducer