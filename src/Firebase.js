import firebase from 'firebase'

const firebaseApp = firebase.initializeApp({
  apiKey: "AIzaSyBWYJkHjgBAXelgnGgX1j3bSLTSUC5JWBk",
  authDomain: "clone-f656a.firebaseapp.com",
  databaseURL: "https://clone-f656a.firebaseio.com",
  projectId: "clone-f656a",
  storageBucket: "clone-f656a.appspot.com",
  messagingSenderId: "377450921597",
  appId: "1:377450921597:web:64fa7d0952ce6c5f6ebb14"

});
const db = firebaseApp.firestore();
const auth = firebase.auth();

export {db,auth};