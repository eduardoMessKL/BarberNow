import { useState } from "react";
import { useSignInWithEmailAndPassword } from "react-firebase-hooks/auth";
import { Link } from "react-router-dom";
import arrowImg from "../../assets/arrow.svg";
import logoImg from "../../assets/logo.svg";
import "./styles.css";
import { auth } from "../../services/firebaseConfig";
import LoginHTML from "./LoginHTML";

export function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [signInWithEmailAndPassword, user, loading, error] =
    useSignInWithEmailAndPassword(auth);

  function handleSignIn(e) {
    e.preventDefault();
    signInWithEmailAndPassword(email, password);
  }
  if (error) {
    return (
      <div>
        <LoginHTML
          setEmail={setEmail}
          setPassword={setPassword}
          handleSignIn={handleSignIn}
          RegisterLink={() => <Link to="/cadastro">Crie a sua conta aqui</Link>}
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
  if (user) {
    return(
      <div>
      <LoginHTML
        setEmail={setEmail}
        setPassword={setPassword}
        handleSignIn={handleSignIn <Link to="/cadastro">Crie a sua conta aqui</Link>}
        RegisterLink={() => <Link to="/cadastro">Crie a sua conta aqui</Link>}
      />
    </div>
    );
  }
  return (
    <div>
      <LoginHTML
        setEmail={setEmail}
        setPassword={setPassword}
        handleSignIn={handleSignIn}
        RegisterLink={() => <Link to="/cadastro">Crie a sua conta aqui</Link>}
      />
    </div>
  );
}
