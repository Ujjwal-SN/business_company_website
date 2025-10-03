// src/firebase.js
// Paste your Firebase config object below from the Firebase Console
import { initializeApp } from "firebase/app";
import { getDatabase } from "firebase/database";
import { getAuth } from "firebase/auth";
import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {
  apiKey: "AIzaSyDLIYgJQxZp1yxtsMsNcu5UwP1p6emgMSM",
  authDomain: "mydrombackend.firebaseapp.com",
  databaseURL: "https://mydrombackend-default-rtdb.firebaseio.com", // <-- Add this line
  projectId: "mydrombackend",
  storageBucket: "mydrombackend.appspot.com", // <-- Fix typo
  messagingSenderId: "381399181741",
  appId: "1:381399181741:web:0e0245e809b86534e41924",
  measurementId: "G-M3J9JJHETK"
};

const app = initializeApp(firebaseConfig);
export const db = getDatabase(app);
export const auth = getAuth(app);
export const analytics = getAnalytics(app);