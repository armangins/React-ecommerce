import CartType from './cart.type';
import cartType from './cart.type';

export const toggleHidden = ()=>{
    return{
        type: cartType.TOGGLE_HIDDEN,
    }
}


export const addItem = (item)=>{
      
    return{
        type: CartType.ADD_ITEM_TO_CART,
        payload: item,
    }
}

