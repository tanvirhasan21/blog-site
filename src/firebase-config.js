// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getFirestore} from 'firebase/firestore'
import {getAuth,GoogleAuthProvider} from 'firebase/auth'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyB6DO0ZfCAVV5YwT7NJwsaKOPp0AGsUbIA",
  authDomain: "blog-site-8a9a7.firebaseapp.com",
  projectId: "blog-site-8a9a7",
  storageBucket: "blog-site-8a9a7.appspot.com",
  messagingSenderId: "296647966576",
  appId: "1:296647966576:web:99194228e8f3eecd6199b5"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const db = getFirestore(app)
export const auth = getAuth(app)
export const provider = new GoogleAuthProvider()
