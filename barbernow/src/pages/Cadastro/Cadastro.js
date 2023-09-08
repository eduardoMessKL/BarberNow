import { useState } from "react";
import { useCreateUserWithEmailAndPassword } from "react-firebase-hooks/auth";
import { Link } from "react-router-dom";
import { auth } from "../../services/firebaseConfig";
import "./Cadastro.css";
import CadastroHTML from "./CadastroHTML"

export function Cadastro() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [createUserWithEmailAndPassword, loading, error] =
    useCreateUserWithEmailAndPassword(auth);

  function handleSignOut(e) {
    e.preventDefault();
    createUserWithEmailAndPassword(email, password);
  }

  if (error) {
    return (
      <div>
        <CadastroHTML
          setEmail={setEmail}
          setPassword={setPassword}
          handleSignOut={handleSignOut}
          SignInLink={() => <Link to="/">Acesse sua conta aqui</Link>}
        />
        <div>
          <p>Error: {error.message}</p>
        </div>
      </div>
    );
  }

  if (loading) {
    return <p>carregando...</p>;
  }
  return (
    <CadastroHTML
          setEmail={setEmail}
          setPassword={setPassword}
          handleSignOut={handleSignOut}
          SignInLink={() => <Link to="/">Acesse sua conta aqui</Link>}
        />
  );
}
