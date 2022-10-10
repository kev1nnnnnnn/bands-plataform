// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyD181WMQPN67eJR31tB9kJ0vZfHWWaWdwo",
  authDomain: "bands-a1555.firebaseapp.com",
  projectId: "bands-a1555",
  storageBucket: "bands-a1555.appspot.com",
  messagingSenderId: "389071247282",
  appId: "1:389071247282:web:eddcd9481bbeeeed4ef6ab",
  measurementId: "G-M0LWHLG36B"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);