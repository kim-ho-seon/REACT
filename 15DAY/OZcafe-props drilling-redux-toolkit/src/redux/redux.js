import data from "../assets/data";
import { configureStore, createSlice } from "@reduxjs/toolkit";

export const meneSlice = createSlice({
    name: 'menu',
    initialState: data.menu,
    reducers:{
    }
})

export const cartSlice = createSlice({
    name: 'cart',
    initialState: [],
    reducers:{
        addToCart (state, action) { return [...state, action.payload] },
        removeFromCart(state, action) { return state.filter(el=> action.payload.id !== el.id) },
        //el=> action.payload.!== el.id) cart 삭제 시 {}감싸지 않고싶을 때,
    }
})

export const store = configureStore({
    reducer:{
        menu: meneSlice.reducer,
        cart:cartSlice.reducer
    }
})
