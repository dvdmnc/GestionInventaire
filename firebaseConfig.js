// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCQD5Jn_cc5tYOzF86J22rEATqKGPILAxQ",
  authDomain: "idel-stock.firebaseapp.com",
  projectId: "idel-stock",
  storageBucket: "idel-stock.appspot.com",
  messagingSenderId: "910019201838",
  appId: "1:910019201838:web:c651f436883fe6b77c88bf"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Cloud Firestore and get a reference to the service
export const db = getFirestore(app);

export const auth = getAuth(app)