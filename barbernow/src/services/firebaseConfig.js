// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAooSVPkWr5S3OrFSIz70cDNV2Lmy2e8qc",
  authDomain: "barbernow-5d04d.firebaseapp.com",
  projectId: "barbernow-5d04d",
  storageBucket: "barbernow-5d04d.appspot.com",
  messagingSenderId: "291521122411",
  appId: "1:291521122411:web:a66f68f28b3e3165e6a12e",
  measurementId: "G-T3JDBCJDL8"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);