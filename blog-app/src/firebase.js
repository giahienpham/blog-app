// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "mern-blog-e927c.firebaseapp.com",
  projectId: "mern-blog-e927c",
  storageBucket: "mern-blog-e927c.appspot.com",
  messagingSenderId: "379304383063",
  appId: "1:379304383063:web:b650e963f0fed5ff8c8912",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
