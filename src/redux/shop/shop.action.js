import ShopActionsTypes from "./shop.type";
import {firestore,convertToObj} from '../../firebase/firebaseConfig'


export const fetchCollectionsStart = ()=>{
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

export const fetchCollectionsAsync = ()=>{

    return dispatch=>{
        const collectionRef = firestore.collection('collections');
        dispatch(fetchCollectionsStart());

        collectionRef.get().then(snapShot=>{
          const collectionsObject = convertToObj(snapShot)
          dispatch(fetchSuccess(collectionsObject));
         
        }).catch(error=>{
            dispatch(fetchFailed(error));
        })
    }
}