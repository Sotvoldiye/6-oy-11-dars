import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBxFOLQtq-r9h4cJRwpdm3sgScXluJNFqo",
  authDomain: "recepiec-bdb92.firebaseapp.com",
  projectId: "recepiec-bdb92",
  storageBucket: "recepiec-bdb92.firebasestorage.app",
  messagingSenderId: "55689940327",
  appId: "1:55689940327:web:7fc09ba7936bb0d9a1f3c2"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// auth
export const auth = getAuth()

export const db = getFirestore()