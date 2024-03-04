import { initializeApp } from "@firebase/app";
import { getAuth, signInWithPopup, GoogleAuthProvider } from "firebase/auth";

const firebaseConfig = {
    apiKey: "AIzaSyAZM8t4SRb_xZ8vDRpWwh_rP3RRxyXkquI",
    authDomain: "voting-app-17a5c.firebaseapp.com",
    projectId: "voting-app-17a5c",
    storageBucket: "voting-app-17a5c.appspot.com",
    messagingSenderId: "399698551830",
    appId: "1:399698551830:web:b8f5ac3a05f39b8bdec137",
    measurementId: "G-XDWR9B0Y2G"
  };

  // Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth();
const provider = new GoogleAuthProvider();

 export {signInWithPopup, auth, app, provider}