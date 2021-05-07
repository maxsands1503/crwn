import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/firestore';

const config = {
    apiKey: "AIzaSyCgMLZidFhZRlMr3wgeeIckGhEZ8AbHMjo",
    authDomain: "crwn-db-8404f.firebaseapp.com",
    projectId: "crwn-db-8404f",
    storageBucket: "crwn-db-8404f.appspot.com",
    messagingSenderId: "819716735705",
    appId: "1:819716735705:web:3c21c1571340e7213374c8",
    measurementId: "G-HK63BEXSH0"
};
    // Initialize Firebase
    firebase.initializeApp(config);

    export const auth = firebase.auth();
    export const firestore = firebase.firestore();

    const provider = new firebase.auth.GoogleAuthProvider();
    provider.setCustomParameters({prompt: 'select_account'});
    export const signInWithGoogle = () => auth.signInWithPopup(provider);

    export default firebase;

