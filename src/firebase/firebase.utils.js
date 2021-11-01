import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';
import 'firebase/compat/auth';

const config =  {
    apiKey: "AIzaSyAbJJpuzxQlMB5-eP0sdxtJTmBPTdC3VtA",
    authDomain: "crwn-db-3bb61.firebaseapp.com",
    projectId: "crwn-db-3bb61",
    storageBucket: "crwn-db-3bb61.appspot.com",
    messagingSenderId: "451097138908",
    appId: "1:451097138908:web:de39ab86f706a609b34619",
    measurementId: "G-567LRFHPPF"
  };

  firebase.initializeApp(config);

  export const auth = firebase.auth();
  export const firestore = firebase.firestore();

  const provider = new firebase.auth.GoogleAuthProvider();
  provider.setCustomParameters({prompt: 'select_account'});
  export const signInWithGoogle =() => auth.signInWithPopup(provider);

  export default firebase;