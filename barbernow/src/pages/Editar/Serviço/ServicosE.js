import React, { useState, useEffect } from "react";
import { getServicosByBarbearia, updateServico, getServico } from "../../../model/services/ServicoService";
import { getBarbearia } from "../../../model/services/BarbeariaService";
import { useParams } from "react-router-dom";
import EditarServicosHTML from "./ServicosHTMLE";  // Ajuste para importar o componente correto
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

                // Inicializa o estado 'formValues' com os valores dos serviços
                const initialFormValues = {};
                servicoData.forEach(servico => {
                    initialFormValues[servico.id] = {
                        nome: servico.nome,
                        descricao: servico.descricao,
                        duracao: servico.duracao,
                        fotoURL: servico.fotoURL,
                        preco: servico.preco,
                        tipo: servico.tipo
                    };
                });
                setFormValues(initialFormValues);
            } catch (error) {
                console.error("Erro ao buscar dados: ", error);
            }
        }

        fetchData();
    }, [cnpj,servicoID]);

    const handleUpdate = async (servicoID) => {
        try {
            // Use formValues[servicoID] para obter os valores atualizados deste serviço
            await updateServico(cnpj, servicoID, formValues[servicoID]);
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
        />
    );
}
