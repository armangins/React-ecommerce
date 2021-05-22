import CartType from './cart.type';

const INIT_STATE = {
    hidden: true,
};

const cartReducer =(state= INIT_STATE,action)=>{

   switch(action.type){
       case CartType.TOGGLE_HIDDEN:
           return{
               ...state,
               hidden: !state.hidden,
           }

           default :
               return state
           
   }
}

export default cartReducer;