import ShopActionsTypes from "./shop.type";

export const fetchCollectionsStart = ()=>{
    console.log('action fired')
    return {
        type:ShopActionsTypes.FETCH_START,
    }
}

export const fetchSuccess = (collectionMap)=>{

    return {
        type:ShopActionsTypes.FETCH_SUCCESS,
        payload:collectionMap,
    }
}

export const fetchFailed=(error)=>{
    return { 
        type:ShopActionsTypes.FETCH_FAIL,
        payload:error
    }
}

