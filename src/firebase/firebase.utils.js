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

/* save user in database */
export const createUserProfileDocument = async (userAuth, additionalData) => {
  if (!userAuth) return; // if no user signin, we do not want to do anything.

  const userRef = firestore.doc(`users/${userAuth.uid}`);

  const snapShot = await userRef.get();

  /*  if the new user's info is not exist in firebase db, create a new one */
  if (!snapShot.exists) {
    const { displayName, email } = userAuth;
    const createAt = new Date();
    try {
      await userRef.set({
        displayName,
        email,
        createAt,
        ...additionalData,
      });
    } catch (err) {
      console.log("ubable to create user user", err.message);
    }
  }
  return userRef;
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

//const provider = new GoogleAuthProvider();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
