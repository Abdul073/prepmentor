import { initializeApp, getApp, getApps } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCk31D01RhDIPXGy300UfuklD-nMYiNgao",
  authDomain: "prepmentor-db3a0.firebaseapp.com",
  projectId: "prepmentor-db3a0",
  storageBucket: "prepmentor-db3a0.firebasestorage.app",
  messagingSenderId: "1043711632572",
  appId: "1:1043711632572:web:9c82b51a6e4e9659505cb9",
  measurementId: "G-TJ5JSBTEF8",
};

// Initialize Firebase
const app = !getApps.length ? initializeApp(firebaseConfig) : getApp();

export const auth = getAuth(app);
export const db = getFirestore(app);
