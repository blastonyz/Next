import { initializeApp } from "firebase/app";
import {getFirestore} from 'firebase/firestore';
import { getAuth } from "firebase/auth";

export const firebaseConfig = {
  apiKey: "AIzaSyC8ke4C5odvQZfISAfwlRi_1sUSxUhZrSo",
  authDomain: "next-cc43a.firebaseapp.com",
  projectId: "next-cc43a",
  storageBucket: "next-cc43a.appspot.com",
  messagingSenderId: "454727340926",
  appId: "1:454727340926:web:14ae9aacd34f308ce6192f"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const auth = getAuth(app)