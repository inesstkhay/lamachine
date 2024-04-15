
// FIREBASE
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
firebase.initializeApp(firebaseConfig);
const db = firebase.firestore();

// Function to fetch content from Firestore
function fetchContent() {
    const testRef = db.collection('testdata').doc('test');
    testRef.get().then((doc) => {
        if (doc.exists) {
            const testData = doc.data().test;
            document.getElementById('testData').innerText = testData;
        } else {
            console.log("No such document!");
        }
    }).catch((error) => {
        console.log("Error getting document:", error);
    });
}

// Function to save edited content back to Firestore
function saveChanges() {
    const editedContent = document.getElementById('testData').innerText;
    const testRef = db.collection('testdata').doc('test');
    testRef.set({ test: editedContent })
        .then(() => {
            console.log("Document successfully updated!");
        })
        .catch((error) => {
            console.error("Error updating document: ", error);
        });
}

// Call fetchContent() when the page loads
window.onload = fetchContent;