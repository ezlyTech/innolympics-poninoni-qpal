import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDLzFkNj-otYUW-pi9h7E9AeP-FqA9VMHI",
  authDomain: "innolympics-poninoni-qpal.firebaseapp.com",
  projectId: "innolympics-poninoni-qpal",
  storageBucket: "innolympics-poninoni-qpal.firebasestorage.app",
  messagingSenderId: "387937001686",
  appId: "1:387937001686:web:a334a0c25340e4d196a977"
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const googleProvider = new GoogleAuthProvider();

export const db = getFirestore(app);