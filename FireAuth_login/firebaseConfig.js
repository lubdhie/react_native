// Import the functions you need from the SDKs you need
// firebaseConfig.js
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

// import { connectAuthEmulator } from "firebase/auth";
// connectAuthEmulator(auth, "http://localhost:9099");

const firebaseConfig = {
  apiKey: "AIzaSyDdsRT-fQXEsK4HVrJmZlXKJmJdnWKlN1o",
  authDomain: "first-efd2e.firebaseapp.com",
  projectId: "first-efd2e",
  storageBucket: "first-efd2e.firebasestorage.app",
  messagingSenderId: "110417306176",
  appId: "1:110417306176:web:72f5f4bf908408131b75a5"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;
export const auth = getAuth(app);
export const db = getFirestore(app);
