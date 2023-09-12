import { useState } from "react";
import { useCreateUserWithEmailAndPassword } from "react-firebase-hooks/auth";
import { Link } from "react-router-dom";
import { auth } from "../../../firebase/firebaseConfig";
import ServicosHTMLE from "./ServicosHTMLE";
import "./ServicosE.css";

export function ServicosE() {
  return (
    <ServicosHTMLE
    />
  );
}
