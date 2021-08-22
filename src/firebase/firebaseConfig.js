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




// sign out from user account
export const signout = ()=>{
  auth.signOut()
}


export const auth = firebase.auth();
export const firestore = firebase.firestore();
const provider = new firebase.auth.GoogleAuthProvider();


provider.setCustomParameters({ prompt: "select_account" });
export const SignInWithGoogle = () => auth.signInWithPopup(provider);
export default firebase;
