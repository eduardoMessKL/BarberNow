import React, { useState, useEffect } from "react";
import { createServico } from "../../../model/services/ServicoService";
import AddServicosHTML from "./AddServicosHTML";
import "./AddServicos.css";
import { getBarbearia } from "../../../model/services/BarbeariaService";
import { useNavigate, useParams } from "react-router-dom";

export function AddServicos() {
  const [barbearia, setBarbearia] = useState({});
  const [nomeCorte, setNomeCorte] = useState("");
  const [descricaoCorte, setDescricaoCorte] = useState("");
  const [preco, setPreco] = useState("");
  const [duracao, setDuracao] = useState("");
  const [tipoServico, setTipoServico] = useState("");
  const [imageFile, setImageFile] = useState(null); // Novo estado para o arquivo de imagem
  const navigate = useNavigate();
  const { cnpj } = useParams();

  useEffect(() => {
    async function fetchData() {
      try {
        const barbeariaData = await getBarbearia(cnpj);
        setBarbearia(barbeariaData);
      } catch (error) {
        console.error("Erro ao buscar dados: ", error);
      }
    }
    fetchData();
  }, [cnpj]);

  const adicionarServico = async () => {
    try {
      const servicoData = {
        nome: nomeCorte,
        descricao: descricaoCorte,
        preco: preco,
        duracao: duracao,
        tipo: tipoServico,
      };

      await createServico(cnpj, servicoData, imageFile); // Assumindo que createServico também aceita o imageFile

      alert("Serviço adicionado com sucesso!");
      navigate(`/consultar-servico/${cnpj}`); // Navega para o perfil após adicionar com sucesso
    } catch (error) {
      console.error("Erro ao adicionar serviço:", error.message);
      alert("Erro ao adicionar serviço: " + error.message);
    }
  };

  return (
    <div className="html-login">
      <AddServicosHTML
        setNomeCorte={setNomeCorte}
        setDescricaoCorte={setDescricaoCorte}
        setPreco={setPreco}
        setDuracao={setDuracao}
        setTipoServico={setTipoServico}
        setImageFile={setImageFile} // Agora passamos essa prop também
        adicionarServico={adicionarServico}
        barbearia={barbearia}
      />
    </div>
  );
}
