import { createSlice } from "@reduxjs/toolkit";
import { ffechMultiplePokemonByI } from "./thunk";

export const pokemonSlice = createSlice({
    name: 'pokemon',
    initialState: {
        data: [],
        loading: true,
    },
    reducers: { }, //동기적 상태 변경
    extraReducers: //비동기적 상태 변경
    (builder) => {
        builder
        .addCase(ffechMultiplePokemonByI.pending, (state)=>{
            state.loading = true;
        })
        .addCase(ffechMultiplePokemonByI.rejected, (state)=>{
            state.loading = false;
        })
        .addCase(ffechMultiplePokemonByI.fulfilled, (state, action)=>{
            state.loading = false;
            state.data = action.payload
        })
    },
}) // action, reducer