// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDKGWb9jO5RNajJY6-Zi-Nn3qbjrRGCw1w",
  authDomain: "dedalo-f6374.firebaseapp.com",
  projectId: "dedalo-f6374",
  storageBucket: "dedalo-f6374.firebasestorage.app",
  messagingSenderId: "54083871764",
  appId: "1:54083871764:web:b808d1479d9af86728f301",
  measurementId: "G-CQJXEYZ2F8"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);