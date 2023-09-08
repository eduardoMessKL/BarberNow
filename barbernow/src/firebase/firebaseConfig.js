// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyAooSVPkWr5S3OrFSIz70cDNV2Lmy2e8qc",
  authDomain: "barbernow-5d04d.firebaseapp.com",
  projectId: "barbernow-5d04d",
  storageBucket: "barbernow-5d04d.appspot.com", //storage do firebase, tem no console do barbernow (site do firebase com o projeto)
  messagingSenderId: "291521122411",
  appId: "1:291521122411:web:a66f68f28b3e3165e6a12e",
  measurementId: "G-T3JDBCJDL8",
};

// Inicializo tudo que vou usar do firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app); //autenticação do login
export const db = getFirestore(app); //nosso banco
export const storage = getStorage(app); //nosso storage para armazenar as fotos das barbearias
