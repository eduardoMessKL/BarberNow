import SenhaHTML from "../Senha/SenhaHTML";
import { useParams } from "react-router-dom";
import React, { useState, useEffect } from "react";
import {
  getStoredPassword,
  updatePassword,
} from "../../model/services/firestoreService";
import { getBarbearia } from "../../model/services/BarbeariaService";
import { auth } from "../../firebase/firebaseConfig";

export function Senha() {
  const [barbearia, setBarbearia] = useState(null);
  const [currentPassword, setCurrentPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const { cnpj } = useParams();

  // Observador de autenticação
  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((user) => {
      if (user) {
        setIsAuthenticated(true);
      } else {
        setIsAuthenticated(false);
      }
    });

    // Limpar observador
    return () => unsubscribe();
  }, []);

  useEffect(() => {
    async function fetchData() {
      try {
        const info = await getBarbearia(cnpj);
        setBarbearia(info);
      } catch (error) {
        console.error("Erro ao buscar barbearia:", error);
      }
    }
    fetchData();
  }, [cnpj]);

  const handleCurrentPasswordChange = (e) => {
    setCurrentPassword(e.target.value);
  };

  const handleNewPasswordChange = (e) => {
    setNewPassword(e.target.value);
  };

  const handlePasswordChange = () => {
    const storedPassword = getStoredPassword(cnpj);
    if (storedPassword !== currentPassword) {
      alert("Senha atual incorreta!");
      return;
    }

    // Atualizando a senha com o Firebase Auth
    if (isAuthenticated && auth.currentUser) {
      auth.currentUser.updatePassword(newPassword)
        .then(function () {
          alert("Senha atualizada com sucesso!");
        })
        .catch(function (error) {
          alert("Erro ao atualizar senha: " + error.message);
        });
    } else {
      alert("Usuário não autenticado.");
    }
  };

  if (!barbearia) {
    return <div>Carregando...</div>;
  }

  return (
    <div>
      <SenhaHTML
        barbearia={barbearia}
        currentPassword={currentPassword}
        handleCurrentPasswordChange={handleCurrentPasswordChange}
        newPassword={newPassword}
        handleNewPasswordChange={handleNewPasswordChange}
        handlePasswordChange={handlePasswordChange}
      />
    </div>
  );
}

export default Senha;
