import firebase from "firebase/compat/app";
import "firebase/compat/auth"
import "firebase/compat/firestore"


//import 'firebase/firestore';
//import * as firebase from 'firebase';
// import firebase  from 'firebase';
// //import "firebase/compat/firestore"
// import "firebase/compat/auth";
// // import { initializeApp } from "firebase/app";
// // import { getAnalytics } from "firebase/analytics";
const firebaseConfig = {
    apiKey: "AIzaSyBS_aVl0jscVrBuKUz3GeDVFvCgVd6rlp4",
    authDomain: "fir-practice-aa958.firebaseapp.com",
    projectId: "fir-practice-aa958",
    storageBucket: "fir-practice-aa958.appspot.com",
    messagingSenderId: "97595712735",
    appId: "1:97595712735:web:db483d5298147b6fd7756a",
    measurementId: "G-89FC78TV4M"
  };
  
  // Initialize Firebase
   firebase.initializeApp(firebaseConfig);  
   export const db = firebase.firestore();