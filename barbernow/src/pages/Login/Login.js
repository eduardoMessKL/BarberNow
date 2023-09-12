import React, { useState } from "react";
import { useSignInWithEmailAndPassword } from "react-firebase-hooks/auth";
import { Link, useNavigate } from "react-router-dom";
import { db, auth } from "../../firebase/firebaseConfig";
import LoginHTML from "./LoginHTML";
import "./Login.css";
import { getBarbearia } from "../../model/services/BarbeariaService";
import { query, where, getDocs, collection } from "firebase/firestore";

export function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  const [signInWithEmailAndPassword, , loading, error] = useSignInWithEmailAndPassword(auth);

  async function handleSignIn(e) {
    e.preventDefault();
  
    try {
      await signInWithEmailAndPassword(email, password);
      const q = query(
        collection(db, "barbearias"),
        where("email", "==", email)
      );
  
      const querySnapshot = await getDocs(q);
  
      if (!querySnapshot.empty) {
        const userData = querySnapshot.docs[0].data();
        const cnpj = userData.cnpj;
        navigate(`/perfil/${cnpj}`);
      } else {
        console.error("No user found with the given email in barbearias collection");
      }
    } catch (signInError) {
      console.error("Error during sign-in:", signInError);
    }
  }

  if (error) {
    return (
      <div>
        <p>Error: {error.message}</p>
      </div>
    );
  }

  if (loading) {
    return <p>carregando...</p>;
  }

  return (
    <div className="html-login">
      <LoginHTML
        setEmail={setEmail}
        setPassword={setPassword}
        handleSignIn={handleSignIn}
        RegisterLink={() => <Link to="/cadastro">Crie a sua conta aqui</Link>}
      />
    </div>
  );
}

