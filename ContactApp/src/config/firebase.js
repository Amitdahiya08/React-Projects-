// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCN9mgMMkyylqKJtRVXA-pHLiMbyEqHVxc",
  authDomain: "vite-contact-35902.firebaseapp.com",
  projectId: "vite-contact-35902",
  storageBucket: "vite-contact-35902.appspot.com",
  messagingSenderId: "677713389344",
  appId: "1:677713389344:web:d6465bb4857e341e09d945"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);