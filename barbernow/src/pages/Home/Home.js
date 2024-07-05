import { useState, useEffect } from "react";
import "./Home.css";
import HomeHTML from "./HomeHTML";
import {
  getAllBarbearias,
  orderByName,
  orderByPriceMin,
} from "../../model/services/BarbeariaService";
import { getMinMaxPrices } from "../../model/services/ServicoService";

export function Home() {
  const [barbearias, setBarbearias] = useState([]);
  const [error, setError] = useState(null);
  const [minMaxPrices, setMinMaxPrices] = useState({});
  const [tipoServico, setTipoServico] = useState("Cabelo");

  useEffect(() => {
    async function fetchData() {
      const allBarbearias = await orderByName(); // Default loading
      setBarbearias(allBarbearias);
    }
    fetchData();
  }, []);

  useEffect(() => {
    const fetchBarbearias = async () => {
      try {
        const data = await getAllBarbearias();
        setBarbearias(data);
      } catch (err) {
        setError(err);
      }
    };

    fetchBarbearias();
  }, []);

  useEffect(() => {
    const fetchPrices = async () => {
      const cnpjs = barbearias.map((barbearia) => barbearia.cnpj);
      const prices = await getMinMaxPrices(cnpjs, tipoServico);
      setMinMaxPrices(prices);
    };

    fetchPrices();
  }, [barbearias, tipoServico]); // Adiciona tipoServico como dependência

  if (error) return <p>Erro ao carregar dados: {error.message}</p>; // Mensagem de erro

  const handleOrderByName = async (reverse = false) => {
    const orderedBarbearias = await orderByName(reverse);
    setBarbearias(orderedBarbearias);
  };

  const handleOrderByPriceMin = async (reverse = false) => {
    const orderedBarbearias = await orderByPriceMin(
      reverse,
      tipoServico,
      barbearias
    );
    setBarbearias(orderedBarbearias);
  };

  return (
    <div>
      <HomeHTML
        barbearias={barbearias}
        onOrderByName={handleOrderByName}
        onOrderByPriceMin={handleOrderByPriceMin}
        minMaxPrices={minMaxPrices}
        setTipoServico={setTipoServico}
        tipoServico={tipoServico}
      />
    </div>
  );
}
