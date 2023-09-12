import { useState } from "react";
import { useCreateUserWithEmailAndPassword } from "react-firebase-hooks/auth";
import { Link } from "react-router-dom";
import { auth } from "../../../firebase/firebaseConfig";
import AddServicosHTML from "./AddServicosHTML";
import "./AddServicos.css";

export function AddServicos() {
  return (
    <AddServicosHTML
    />
  );
}
