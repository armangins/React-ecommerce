import CartType from './cart.type';
import {addItemToCart} from '../../redux/cart/cart.utils';

const INIT_STATE = {
    hidden: true,
    cartItem : []
};

const cartReducer =(state= INIT_STATE,action)=>{

   switch(action.type){
       case CartType.TOGGLE_HIDDEN:
           return{
               ...state,
               hidden: !state.hidden,
           }

           case CartType.ADD_ITEM_TO_CART:
               return{
                   ...state,
                   cartItem : addItemToCart(state.cartItem,action.payload),
               }

           default :
               return state
           
   }
}

export default cartReducer;