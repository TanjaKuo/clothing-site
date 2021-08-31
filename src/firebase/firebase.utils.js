//import firebase from "firebase/app";
//import "firebase/firestore";
//import "firebase/auth";
import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";

//import { GoogleAuthProvider } from "firebase/auth";

const config = {
  apiKey: "AIzaSyC-qYtMvALqv_bLsVsfSSNcW9c1yOqAoCE",
  authDomain: "crwn-db-f1dd0.firebaseapp.com",
  projectId: "crwn-db-f1dd0",
  storageBucket: "crwn-db-f1dd0.appspot.com",
  messagingSenderId: "861388583376",
  appId: "1:861388583376:web:dcb662892dff577e6ac9d5",
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

//const provider = new GoogleAuthProvider();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;

/* import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getDatabase } from "firebase/database";

const firebaseConfig = {
  apiKey: "AIzaSyC-qYtMvALqv_bLsVsfSSNcW9c1yOqAoCE",
  authDomain: "crwn-db-f1dd0.firebaseapp.com",
  projectId: "crwn-db-f1dd0",
  storageBucket: "crwn-db-f1dd0.appspot.com",
  messagingSenderId: "861388583376",
  appId: "1:861388583376:web:dcb662892dff577e6ac9d5",
};
firebase.initializeApp(firebaseConfig);

const auth = getAuth();
const database = getDatabase(); */
/* 
const provider = initializeApp.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

 */
/* const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });
export const signInWithGoogle = () => auth.signInWithPopup(provider); */

/* const provider = initializeApp.auth.GoogleAuthProvider();
provider.addScope("profile");
provider.addScope("email");
initializeApp
  .auth()
  .signInWithPopup(provider)
  .then(function (result) {
    // This gives you a Google Access Token.
    var token = result.credential.accessToken;
    // The signed-in user info.
    var user = result.user;
  });
 */

//export { auth, database };
