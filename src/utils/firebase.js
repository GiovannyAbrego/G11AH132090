// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import 'firebase/firestore';
//import firebase from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use

// https://firebase.google.com/docs/web/setup#available-libraries


// Your web app's Firebase configuration

const firebaseConfig = {

  apiKey: "AIzaSyAnUAg6UD33QWbeZ7zeHY55T1vzfLGCCqg",

  authDomain: "birthday-ac119.firebaseapp.com",

  projectId: "birthday-ac119",

  storageBucket: "birthday-ac119.appspot.com",

  messagingSenderId: "71554042693",

  appId: "1:71554042693:web:c971edbe6902e7f2068c2c"

};


// Initialize Firebase

//const app = initializeApp(firebaseConfig);

export default !firebaseConfig.apps.lenght
    ? firebaseConfig.initializeApp(firebaseConfig)
    : firebaseConfig.app();