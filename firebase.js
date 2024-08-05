// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import {getFirestore} from "firebase/firestore";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBya4IunjBZ4Rnrnu0PiuZeULWnEDZJrQA",
  authDomain: "inventory-management-app-6dd4f.firebaseapp.com",
  projectId: "inventory-management-app-6dd4f",
  storageBucket: "inventory-management-app-6dd4f.appspot.com",
  messagingSenderId: "538360469748",
  appId: "1:538360469748:web:2085961d49218e9a8966a1",
  measurementId: "G-C317ZHV45S"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const firestore = getFirestore(app)

export {firestore}