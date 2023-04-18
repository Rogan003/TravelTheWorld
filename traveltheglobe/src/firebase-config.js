// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getDatabase } from "firebase/database";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCcxBjLOUsG7IAWiCOSL5riScasVvGUJig",
  authDomain: "traveltheglobe-af89d.firebaseapp.com",
  databaseURL: "https://traveltheglobe-af89d-default-rtdb.europe-west1.firebasedatabase.app",
  projectId: "traveltheglobe-af89d",
  storageBucket: "traveltheglobe-af89d.appspot.com",
  messagingSenderId: "773724700483",
  appId: "1:773724700483:web:6cbf60c801ecbebf8df9f6",
  measurementId: "G-KM5TF3P71W"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const db = getDatabase(app);