// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getFirestore} from 'firebase/firestore'

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyB5Pb5UH45nYTR7X9Yw4SQVZgc3pqcrRCs",
  authDomain: "house-marketplace-app-8c5a6.firebaseapp.com",
  projectId: "house-marketplace-app-8c5a6",
  storageBucket: "house-marketplace-app-8c5a6.appspot.com",
  messagingSenderId: "775841614714",
  appId: "1:775841614714:web:9a622c1c8afc399f97a4c3"
};

// Initialize Firebase
initializeApp(firebaseConfig);
export const db = getFirestore()
