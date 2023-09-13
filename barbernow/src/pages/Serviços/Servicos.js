import React, { useState, useEffect } from "react";
import { getServicosByBarbearia } from '../../model/services/ServicoService'; // Importe a nova função
import { getBarbearia } from "../../model/services/BarbeariaService";
import { useParams } from "react-router-dom";
import ServicosHTML from "./ServicosHTML";
import "./Servicos.css"

export function Servicos() {
    const [servicos, setServicos] = useState([]);
    const [barbearia, setBarbearia] = useState({});
    const { cnpj } = useParams();

    useEffect(() => {
      async function fetchData() {
          try {
              const servicosData = await getServicosByBarbearia(cnpj);
              const barbeariaData = await getBarbearia(cnpj);

              setServicos(servicosData);
              setBarbearia(barbeariaData);
          } catch (error) {
              console.error("Erro ao buscar dados: ", error);
          }
      }

      fetchData();
  }, [cnpj]);

    return <ServicosHTML servicos={servicos} barbearia={barbearia} />;
}

