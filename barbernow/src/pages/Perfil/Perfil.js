import React, { useState, useEffect } from "react";
import PerfilHTML from "./PerfilHTML";
import "./Perfil.css";
import { useParams } from "react-router-dom";
import { getBarbearia } from "../../model/services/BarbeariaService";

export function Perfil() {
    const [barbearia, setBarbearia] = useState({});
    const params = useParams();
    const cnpj = params.cnpj;

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

    // Caso queira renderizar algo enquanto os dados ainda não foram carregados:
    //if (!barbearia.cnpj) {
       // return <div>Carregando...</div>;
   // }

    return (
        <div className="html-login">
          <PerfilHTML barbearia={barbearia} />
        </div>
    );
}
