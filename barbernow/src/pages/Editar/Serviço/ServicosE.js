import React, { useState, useEffect } from "react";
import {
  getServicosByBarbearia,
  updateServico,
  getServico,
} from "../../../model/services/ServicoService";
import { getBarbearia } from "../../../model/services/BarbeariaService";
import { useParams } from "react-router-dom";
import EditarServicosHTML from "./ServicosHTMLE"; // Ajuste para importar o componente correto
import "./ServicosE.css";

export function ServicosE() {
  const [servico, setServico] = useState(null);
  const [barbearia, setBarbearia] = useState({});
  const [formValues, setFormValues] = useState({});
  const { cnpj, servicoID } = useParams();

  useEffect(() => {
    async function fetchData() {
      try {
        const servicoData = await getServico(cnpj, servicoID);
        const barbeariaData = await getBarbearia(cnpj);

        setServico(servicoData);
        setBarbearia(barbeariaData);

        // Inicializa o estado 'formValues' com os valores do serviço
        setFormValues({
          nome: servicoData.nome,
          descricao: servicoData.descricao,
          duracao: servicoData.duracao,
          fotoURL: servicoData.fotoURL,
          preco: servicoData.preco,
          tipo: servicoData.tipo,
        });
      } catch (error) {
        console.error("Erro ao buscar dados: ", error);
      }
    }

    fetchData();
  }, [cnpj, servicoID]);

  const handleChange = (field, value) => {
    setFormValues((prev) => ({
      ...prev,
      [field]: value,
    }));
  };

  const handleUpdate = async () => {
    try {
      // Use formValues para obter os valores atualizados do serviço
      await updateServico(cnpj, servicoID, formValues);
      console.log("Serviço atualizado com sucesso!");

      // Recarrega os serviços após a atualização para refletir as mudanças no UI
      const updatedServicos = await getServicosByBarbearia(cnpj);
      setServico(updatedServicos);
    } catch (error) {
      console.error("Erro ao atualizar o serviço: ", error);
    }
  };

  return (
    <EditarServicosHTML
      barbearia={barbearia}
      servico={servico}
      formValues={formValues}
      setFormValues={setFormValues}
      handleUpdate={handleUpdate}
      handleChange={handleChange}
    />
  );
}
