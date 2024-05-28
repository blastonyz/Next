import { initializeApp } from "firebase/app";
import {getFirestore} from 'firebase/firestore';
import { getAuth } from "firebase/auth";
import {getStorage} from "firebase/storage"


export const firebaseConfig = {
  apiKey:"next-cc43a.firebaseapp.com",
  authDomain: "AIzaSyC8ke4C5odvQZfISAfwlRi_1sUSxUhZrSo",
  projectId:"next-cc43a",
  storageBucket: "next-cc43a.appspot.com",
  messagingSenderId: "454727340926",
  appId: "1:454727340926:web:14ae9aacd34f308ce6192f"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const auth = getAuth(app);
export const storage = getStorage(app)