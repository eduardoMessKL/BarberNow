import { useState } from "react";
import { useSignInWithEmailAndPassword } from "react-firebase-hooks/auth";
import { Link } from "react-router-dom";
import arrowImg from "../../assets/arrow.svg";
import logoImg from "../../assets/logo.svg";
import "./styles.css";
import { auth } from "../../services/firebaseConfig";
import HomeHTML from "./HomeHTML";

export function Home() {
  return (
    <div>
      <HomeHTML
      />
    </div>
  );
}
