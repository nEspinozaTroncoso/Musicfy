import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyBS43GPtYSBReX0A1hWfeKryxO0S7VCZh4",
  authDomain: "musicfy-297fa.firebaseapp.com",
  projectId: "musicfy-297fa",
  storageBucket: "musicfy-297fa.firebasestorage.app",
  messagingSenderId: "845470499755",
  appId: "1:845470499755:web:0247bceafa44516b2448ee",
};

export const initFirebase = initializeApp(firebaseConfig);
