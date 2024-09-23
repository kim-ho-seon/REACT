import { combineReducers, legacy_createStore } from "redux";
import data from "../assets/data";

// 액션생성자
export const addToCart = ( options, quantity, id ) => {
    return{
        type: 'addToCart',
        payload: { options, quantity, id }
    }
}

// 액션생성자
export const removeFromCart = (id) => {
    return{
        type: 'removeFromCart',
        payload: {id}
    }
}
// 상태의 초기 값 
const cartReducer = (state = [], action) => {
  switch (action.type) {
    case "addToCart":
        return [...state, action.payload] // 원래의 상태
    case "removeFromCart":
        return state.filter(el=> action.payload.id !== el.id)
    default: // 두 가지에 해당 아닐 때
      return state;
  }
};

const menuReducer = (state = data.menu, action) => {
    return state
}

const rootReducer = combineReducers({cartReducer, menuReducer});

export const store = legacy_createStore(rootReducer);