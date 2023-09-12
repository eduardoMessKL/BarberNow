import React, { useState } from "react";
import { createServico } from '../../../model/services/ServicoService';
import AddServicosHTML from "./AddServicosHTML";
import "./AddServicos.css";

export function AddServicos() {
  const [nomeCorte, setNomeCorte] = useState("");
  const [descricaoCorte, setDescricaoCorte] = useState("");
  const [preco, setPreco] = useState("");
  const [duracao, setDuracao] = useState("");
  const [tipoServico, setTipoServico] = useState("");

  const adicionarServico = async () => {
    try {
      await createServico({
        nome: nomeCorte,
        descricao: descricaoCorte,
        preco: preco,
        duracao: duracao,
        tipo: tipoServico,
        // Adicione qualquer outro campo necessário
      });
      alert("Serviço adicionado com sucesso!");
    } catch (error) {
      alert("Erro ao adicionar serviço: ", error.message);
    }
  };

  return <AddServicosHTML />;
}
