import firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";

// firebase configurations
var firebaseConfig = {
  apiKey: "AIzaSyAv_u7OFSQl-zs4nUDWF4Q6RGEjNab--sg",
  authDomain: "reazon-db.firebaseapp.com",
  projectId: "reazon-db",
  storageBucket: "reazon-db.appspot.com",
  messagingSenderId: "39891579161",
  appId: "1:39891579161:web:9c1e0cb17139da10aed588",
  measurementId: "G-8FR1C2JRQ9",
};

firebase.initializeApp(firebaseConfig);

/**
 * The function checks if a user document exists
 *  and creates one in case it does not exist
 * @param  {[object]} arg1 firebase userAuth object
 * @param  {[object]} arg2 data object
 * @return {[object]}  retruns user ref object or return 
 */
export const createUserDoc = async (userAuth, additionallData) => {

  if (!userAuth) return;
  const userRef = firestore.doc(`users/${userAuth.uid}`);
  const snapShot = await userRef.get();

  if (!snapShot.exists) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();

    try {
      await userRef.set({
        displayName,
        email,
        createdAt,
        ...additionallData,
      });
    } catch (error) {
      console.log("opps there was an error");
    }
  }
  return userRef;
};

export const  uploadToFirebase = async (collectionName,objectToUpload)=>{
  const collectionRef = firestore.collection(collectionName);
  const batch = firestore.batch()
  objectToUpload.forEach(object=>{
    const newDoc = collectionRef.doc();
    batch.set(newDoc,object)
  })
return await batch.commit()
}

/**
 * The function checks if a user document exists
 *  and creates one in case it does not exist
 * @param  {[array]} arg1 collections array
 * @return {[object]}  retruns object  
 */
export const convertToObj = (collections)=>{


 const  newCollections = collections.docs.map(doc=>{
   const {title,items} = doc.data();
   return {
     routeName: encodeURI(title.toLowerCase()),
     id:doc.id,
     title,
     items,
   }
 });

 
return newCollections.reduce((accumulator,collections)=>{
  accumulator[collections.title.toLowerCase()] = collections;
  return accumulator;
},{});
}

export const getCurrentUser=()=>{

  return new Promise((res,rej)=>{
    const unsubscribe = auth.onAuthStateChanged(user=>{
     unsubscribe();
      res(user)
    },rej)
  })
}

export const auth = firebase.auth();
export const firestore = firebase.firestore();
export const googleProvider = new firebase.auth.GoogleAuthProvider();


googleProvider.setCustomParameters({ prompt: "select_account" });
export const SignInWithGoogle = () => auth.signInWithPopup(googleProvider);
export default firebase;
