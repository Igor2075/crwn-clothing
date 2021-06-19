import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

const config = {
    apiKey: "AIzaSyB7Riw_Lw5wSg7fuZwFtS1KMzvcXq3kS7Y",
    authDomain: "crwn-db-7db33.firebaseapp.com",
    projectId: "crwn-db-7db33",
    storageBucket: "crwn-db-7db33.appspot.com",
    messagingSenderId: "110308544953",
    appId: "1:110308544953:web:21c5aa5375506c95c72668",
    measurementId: "G-P6W8SGPH8E",
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
