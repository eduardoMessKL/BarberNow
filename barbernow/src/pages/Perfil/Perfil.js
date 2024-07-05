import React, { useState, useEffect } from "react";
import PerfilHTML from "./PerfilHTML";
import "./Perfil.css";
import { useNavigate, useParams } from "react-router-dom";
import { getBarbearia, deleteBarbearia } from "../../model/services/BarbeariaService";

export function Perfil() {
  const [barbearia, setBarbearia] = useState({});
  const params = useParams();
  const cnpj = params.cnpj;
  const navigate = useNavigate();

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

  const handleDeleteProfile = async () => {
    const confirmation = window.confirm(
      "Você realmente deseja apagar este perfil?"
    );
    if (confirmation) {
      try {
        await deleteBarbearia(cnpj);
        alert("Perfil apagado com sucesso!");
        navigate(`/erro`);
      } catch (error) {
        console.error("Erro ao apagar perfil:", error);
      }
    }
  };

  return (
    <div className="html-login">
      <PerfilHTML barbearia={barbearia} onDeleteProfile={handleDeleteProfile} />
    </div>
  );
}
