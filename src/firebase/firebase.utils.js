// firebase always return reference && snapshot object, even it is not exist
import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

const config = {
  apiKey: "AIzaSyCdHT-AYHXjF7wOrfAchX4PIm3cSj5tn14",
  authDomain: "crwn-db.firebaseapp.com",
  databaseURL: "https://crwn-db.firebaseio.com",
  projectId: "crwn-db",
  storageBucket: "crwn-db.appspot.com",
  messagingSenderId: "850995411664",
  appId: "1:850995411664:web:7ddc01d597846f65",
};

firebase.initializeApp(config);

export const createUserProfileDocument = async (userAuth, additionalData) => {
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
        ...additionalData,
      });
    } catch (error) {
      console.log("error creating user", error.message);
    }
  }

  return userRef;
};

export const addCollectionAndDocuments = async (
  collectionKey,
  objectsToAdd
) => {
  const collectionRef = firestore.collection(collectionKey);

  const batch = firestore.batch();
  objectsToAdd.forEach((obj) => {
    const newDocRef = collectionRef.doc();
    batch.set(newDocRef, obj);
  });

  return await batch.commit();
};

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;

/* import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

const config = {
  apiKey: "AIzaSyC-qYtMvALqv_bLsVsfSSNcW9c1yOqAoCE",
  authDomain: "crwn-db-f1dd0.firebaseapp.com",
  projectId: "crwn-db-f1dd0",
  storageBucket: "crwn-db-f1dd0.appspot.com",
  messagingSenderId: "861388583376",
  appId: "1:861388583376:web:dcb662892dff577e6ac9d5",
};

firebase.initializeApp(config);

export const createUserProfileDocument = async (userAuth, additionalData) => {
  if (!userAuth) return;
  // using userAuth to query database
  const userRef = firestore.doc(`users/${userAuth.uid}`);
  console.log(userRef);
  const collectionRef = firestore.collection("users");

  const collSnapshot = collectionRef.get();
  console.log(collSnapshot);
  // to get snapshot object, even no user in doc, firebase always return
  const snapShot = await userRef.get();
  console.log(snapShot);

  if (!snapShot.exists) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();
    try {
      await userRef.set({
        displayName,
        email,
        createdAt,
        ...additionalData,
      });
    } catch (error) {
      console.log("error creating user", error.message);
    }
  }

  return userRef;
};

export const addCollectionAndDocuments = async (
  collectionKey,
  objectsToAdd
) => {
  const collectionRef = firestore.collection(collectionKey);

  const batch = firestore.batch();
  objectsToAdd.forEach((obj) => {
    const newDocRef = collectionRef.doc();
    batch.set(newDocRef, obj);
  });

  return await batch.commit();
};


export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
 */
/*  yesterday
import { initializeApp } from "firebase/app";
import {
  getAuth,
  GoogleAuthProvider,
  signInWithPopup,
  createUserWithEmailAndPassword,
  onAuthStateChanged,
} from "firebase/auth";
import {
  getFirestore,
  collection,
  getDocs,
  getDoc,
  doc,
  setDoc,
  addDoc,
} from "firebase/firestore";

const firebaseApp = initializeApp({
  apiKey: "AIzaSyC-qYtMvALqv_bLsVsfSSNcW9c1yOqAoCE",
  authDomain: "crwn-db-f1dd0.firebaseapp.com",
  projectId: "crwn-db-f1dd0",
  storageBucket: "crwn-db-f1dd0.appspot.com",
  messagingSenderId: "861388583376",
  appId: "1:861388583376:web:dcb662892dff577e6ac9d5",
});

// check if user exist, ortherwise create a new one
export const createUserProfileDocument = async (userAuth, additionalData) => {
  if (!userAuth) return;

  //const userRef = firestore.doc(`users/${userAuth.uid}`);
  //const snapShot = await userRef.get();

  const userRef = doc(`users/${userAuth.uid}`);
  console.log(userRef);
  const snapShot = await getDoc(userRef);
  console.log(snapShot);

  if (!snapShot.exists) {
    const { displayName, email } = userAuth;
    const createAt = new Date();
    try {
      await setDoc(userRef, {
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

export const auth = getAuth(firebaseApp);
const db = getFirestore(firebaseApp);

const provider = new GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });

export const signInWithGoogle = () => signInWithPopup(auth, provider);
 */
/* original

import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

import firebase from "firebase/compat/app";

import "firebase/compat/auth";
import "firebase/compat/firestore";
import { writeBatch, doc } from "firebase/firestore"; 

import { GoogleAuthProvider } from "firebase/auth";




const config = {
  apiKey: "AIzaSyC-qYtMvALqv_bLsVsfSSNcW9c1yOqAoCE",
  authDomain: "crwn-db-f1dd0.firebaseapp.com",
  projectId: "crwn-db-f1dd0",
  storageBucket: "crwn-db-f1dd0.appspot.com",
  messagingSenderId: "861388583376",
  appId: "1:861388583376:web:dcb662892dff577e6ac9d5",
};

export const createUserProfileDocument = async (userAuth, additionalData) => {
  if (!userAuth) return; 

  const userRef = firestore.doc(`users/${userAuth.uid}`);
  const snapShot = await userRef.get();


  
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

export const addCollectionAndDocuments = (collectionKey, objectsToAdd) => {
  const collectionRef = firestore.collection(collectionKey);
  // make sure all the item upload at once or fail
  const batch = firestore.batch();
  console.log(batch);
  objectsToAdd.forEach((obj) => {
    const newDocRef = collectionRef.doc(obj.title);
    console.log(newDocRef);
  });
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

//const provider = new GoogleAuthProvider();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;

*/

/* 
second one

import { get } from "core-js/core/dict";
import { initializeApp } from "firebase/app";
import {
  getAuth,
  GoogleAuthProvider,
  signInWithPopup,
  createUserWithEmailAndPassword,
  onAuthStateChanged,
} from "firebase/auth";
import { getFirestore, collection, getDocs, getDoc, doc } from "firebase/firestore";

const firebaseApp = initializeApp({
  apiKey: "AIzaSyC-qYtMvALqv_bLsVsfSSNcW9c1yOqAoCE",
  authDomain: "crwn-db-f1dd0.firebaseapp.com",
  projectId: "crwn-db-f1dd0",
  storageBucket: "crwn-db-f1dd0.appspot.com",
  messagingSenderId: "861388583376",
  appId: "1:861388583376:web:dcb662892dff577e6ac9d5",
});

/* save user in database 
export const createUserProfileDocument = async (userAuth, additionalData) => {
  if (!userAuth) return; // if no user signin, we do not want to do anything.
  
  const userRef = db.doc(`users/${userAuth.uid}`);
  console.log(userRef);
 
 /*  const querySnapshot = await get(collection(db, "users"));
  console.log(querySnapshot);
  querySnapshot.forEach((doc) => {
    console.log(`${doc.id} => ${doc.data()}`);
  }); 

  const docRef = doc(db, "cities", "SF");
  const docSnap = await getDoc(docRef);

  if (docSnap.exists()) {
    console.log("Document data:", docSnap.data());
  } else {
    // doc.data() will be undefined in this case
    console.log("No such document!");
  }
};

/* const snapShot = await userRef.get();
  console.log(snapShot); */

/*  if the new user's info is not exist in firebase db, create a new one */
/* if (!snapShot.exists) {
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

export const auth = getAuth(firebaseApp);
const db = getFirestore(firebaseApp);
// db.collection("todo").getDocs();

/* const todoCol = collection(db, "todos");
const snapshot = await getDocs(todoCol);
 
onAuthStateChange(auth, (user) => {
  if (user != null) {
    console.log("loggin");
  } else {
    console.log("out");
  }
}); 

const provider = new GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });

export const signInWithGoogle = () => signInWithPopup(auth, provider);


*/
