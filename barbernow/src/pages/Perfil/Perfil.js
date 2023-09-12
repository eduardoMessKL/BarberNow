import React, { useState, useEffect } from "react";
import PerfilHTML from "./PerfilHTML";
import "./Perfil.css";
import { useParams } from "react-router-dom";
import { getBarbearia } from "../../model/services/BarbeariaService";

export function Perfil(){
    const [barbearia, setBarbearia] = useState({});
    const { cnpj } = useParams();

    useEffect(() => {
        async function fetchData() {
            const info = await getBarbearia(cnpj);
            setBarbearia(info);
        }
        fetchData();
    }, [cnpj]);

    return (
        <div className="html-login">
          <PerfilHTML barbearia={barbearia} />
        </div>
    );
}