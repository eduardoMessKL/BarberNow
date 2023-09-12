import React, { useState, useEffect } from "react";
import { getServico } from '../../model/services/ServicoService'; // Ajuste o caminho conforme necessário
import { getBarbearia } from "../../model/services/BarbeariaService";
import { useParams } from "react-router-dom";
import ServicosHTMLC from "./ServicosHTMLC";
import "./ServicosC.css"

export function ServicosC() {
    const [servicos, setServicos] = useState([]);
    const [barbearia, setBarbearia] = useState({});
    const { cnpj } = useParams();

    useEffect(() => {
      async function fetchData() {
          try {
              const servicosData = await getServico(cnpj);
              const barbeariaData = await getBarbearia(cnpj);

              setServicos(servicosData);
              setBarbearia(barbeariaData);
          } catch (error) {
              console.error("Erro ao buscar dados: ", error);
          }
      }

      fetchData();
  }, [cnpj]);

    return <ServicosHTMLC servicos={servicos} barbearia={barbearia} />;
}
