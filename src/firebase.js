// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyB_grUs4h35oMxtSjONI9bFsXMR7DOQMPQ",
  authDomain: "audit-app-auth.firebaseapp.com",
  projectId: "audit-app-auth",
  storageBucket: "audit-app-auth.appspot.com",
  messagingSenderId: "199083687858",
  appId: "1:199083687858:web:6c8d1c71f6fe31b3d86eab",
  measurementId: "G-WDN3BGF5D5",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth = getAuth(app);
