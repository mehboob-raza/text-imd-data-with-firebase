// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore';
import { getStorage } from 'firebase/storage';

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDDtqbb8LvT1ic0EiKLH2xTnUCGa713JPY",
  authDomain: "text-img-37419.firebaseapp.com",
  projectId: "text-img-37419",
  storageBucket: "text-img-37419.appspot.com",
  messagingSenderId: "206925235079",
  appId: "1:206925235079:web:37af49d3269500cb7e4922"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const txtDB = getFirestore(app);
const imgDB = getStorage(app);

export { imgDB, txtDB };
