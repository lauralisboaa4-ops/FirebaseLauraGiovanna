// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyA6h18LtqdIOk7sek6pjXIySmvvor0apwg",
  authDomain: "fir-lauragiovanna.firebaseapp.com",
  projectId: "fir-lauragiovanna",
  storageBucket: "fir-lauragiovanna.firebasestorage.app",
  messagingSenderId: "258931814550",
  appId: "1:258931814550:web:23926d58c93808138992b7",
  measurementId: "G-FKYFE4NE27"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth(app);