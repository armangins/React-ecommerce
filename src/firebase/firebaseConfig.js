import firebase from 'firebase/app';
import "firebase/auth";
import "firebase/firestore";

var firebaseConfig = {
    apiKey: "AIzaSyAv_u7OFSQl-zs4nUDWF4Q6RGEjNab--sg",
    authDomain: "reazon-db.firebaseapp.com",
    projectId: "reazon-db",
    storageBucket: "reazon-db.appspot.com",
    messagingSenderId: "39891579161",
    appId: "1:39891579161:web:9c1e0cb17139da10aed588",
    measurementId: "G-8FR1C2JRQ9"
  };

  firebase.initializeApp(firebaseConfig);

  export const auth = firebase.auth();
  export const firestore = firebase.firestore();

  const provider = new firebase.auth.GoogleAuthProvider();
  provider.setCustomParameters({ prompt:'select_account' });
  export const SignInWithGoogle = ()=> auth.signInWithPopup(provider);

  export default firebase;