// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {GoogleAuthProvider, getAuth} from "firebase/auth"

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyBaAr-lJNcZTxD4wy3J3EZePEKz0w1A7FE",
    authDomain: "uber-next-clone-4dfe7.firebaseapp.com",
    projectId: "uber-next-clone-4dfe7",
    storageBucket: "uber-next-clone-4dfe7.appspot.com",
    messagingSenderId: "91032639352",
    appId: "1:91032639352:web:588eaecd46692f2ef65a8d"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const provider = new GoogleAuthProvider()
const auth = getAuth()

export {app, provider, auth}