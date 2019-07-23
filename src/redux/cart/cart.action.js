import {toggleCart, addItem} from "../actionTypes"

export const toggleCartHidden = ()=>({
  type: toggleCart
})

export const addItemToCart = (item)=>({
  type: addItem,
  payload: item
})