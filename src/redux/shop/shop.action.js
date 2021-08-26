import ShopActionsTypes from "./shop.type";

export const updateCollections = (collections)=>{
    return {
        type:ShopActionsTypes.UPDATE_COLLECTIONS,
        payload:collections
    }
}