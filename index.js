// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyD7lBMTrJkTpuG8_CsOXPhVmCmTtIqPftc",
  authDomain: "lamachine-9f4a2.firebaseapp.com",
  projectId: "lamachine-9f4a2",
  storageBucket: "lamachine-9f4a2.appspot.com",
  messagingSenderId: "962211356113",
  appId: "1:962211356113:web:09aab638baf7883f61d4f0",
  measurementId: "G-N4MCT0PEBL"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);