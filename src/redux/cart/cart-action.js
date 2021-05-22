import cartType from './cart.type';
 const toggleHidden = ()=>{
    return{
        type: cartType.TOGGLE_HIDDEN,
    }
}

export default toggleHidden;