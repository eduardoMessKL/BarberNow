import React, { useState } from "react";
import { createServico } from "../../../model/services/ServicoService";
import AddServicosHTML from "./AddServicosHTML";
import "./AddServicos.css";
import { useNavigate } from "react-router-dom";
import { useParams } from "react-router-dom";

export function AddServicos() {
  const [nomeCorte, setNomeCorte] = useState("");
  const [descricaoCorte, setDescricaoCorte] = useState("");
  const [preco, setPreco] = useState("");
  const [duracao, setDuracao] = useState("");
  const [tipoServico, setTipoServico] = useState("");
  const navigate = useNavigate(); // Inicialize o useNavigate
  const params = useParams();
  const cnpj = params.cnpj;

  const adicionarServico = async () => {
    try {
      // Aqui estamos assumindo que você tem acesso ao CNPJ da barbearia. Se não for o caso, você precisa ajustar.
      const cnpj = "O_CNPJ_DA_BARBEARIA";

      await createServico(cnpj, {
        nome: nomeCorte,
        descricao: descricaoCorte,
        preco: preco,
        duracao: duracao,
        tipo: tipoServico,
      });

      alert("Serviço adicionado com sucesso!");
    } catch (error) {
      alert("Erro ao adicionar serviço: ", error.message);
    }
  };

  return (
    <div className="html-login">
      <AddServicosHTML
        nomeCorte={nomeCorte}
        setNomeCorte={setNomeCorte}
        descricaoCorte={descricaoCorte}
        setDescricaoCorte={setDescricaoCorte}
        preco={preco}
        setPreco={setPreco}
        duracao={duracao}
        setDuracao={setDuracao}
        tipoServico={tipoServico}
        setTipoServico={setTipoServico}
        adicionarServico={adicionarServico}
      />
    </div>
  );
}
