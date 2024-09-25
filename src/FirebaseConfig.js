// src/firebaseConfig.js
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";

const firebaseConfig = {
    apiKey: "AIzaSyDObb3gX2jsvjHcfVbBocJiJkP35M0Pa3M",
    authDomain: "walmart-clone-f9e78.firebaseapp.com",
    projectId: "walmart-clone-f9e78",
    storageBucket: "walmart-clone-f9e78.appspot.com",
    messagingSenderId: "372998493154",
    appId: "1:372998493154:web:01a1a2eb02e40924879fbb",
    measurementId: "G-D484485VRQ"
    };

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const provider = new GoogleAuthProvider();

export { auth, provider };