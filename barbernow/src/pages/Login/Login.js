import React, { useState } from "react";
import { useSignInWithEmailAndPassword } from "react-firebase-hooks/auth";
import { Link, useNavigate } from "react-router-dom";
import { db, auth } from "../../firebase/firebaseConfig";
import LoginHTML from "./LoginHTML";
import "./Login.css";
import { query, where, getDocs, collection } from "firebase/firestore";

export function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  const [signInWithEmailAndPassword, user, error] =
    useSignInWithEmailAndPassword(auth);

  async function handleSignIn(e) {
    e.preventDefault();

    try {
      const response = await signInWithEmailAndPassword(email, password);

      if (response.user) {
        // Verificar se houve um retorno válido de usuário
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
          alert("Erro ao fazer login: usuário não encontrado");
          console.error(
            "No user found with the given email in barbearias collection"
          );
        }
      }
    } catch (signInError) {
      console.error("Error during sign-in:", signInError);
      alert("Erro ao fazer login: " + signInError.message);
    }
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
