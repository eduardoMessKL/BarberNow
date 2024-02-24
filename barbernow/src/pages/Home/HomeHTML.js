import React from "react";
import { Link } from "react-router-dom";
import logoImg from "../../assets/Logo/LogoBranca.png";
import AZ from "../../assets/Elements/AZ.png";
import ZA from "../../assets/Elements/ZA.png";
import baratocaro from "../../assets/Elements/12.png";
import carobarato from "../../assets/Elements/21.png";

export function HomeHTML({
  barbearias,
  onOrderByName,
  onOrderByPriceMax,
  minMaxPrices,
}) {
  return (
    <div className="container-home">
      <header className="header">
        {/* ... Parte do header ... */}
        <div className="headerL">
          <img
            src={logoImg}
            className="imglogo-header"
            alt="logoimg-header"
          ></img>
          <h1 className="logotxt-header">BarberNow</h1>
        </div>
        <div className="headerR">
          <Link to="/cadastro" className="botao-link">
            <button className="botao-header">REGISTRAR-SE</button>
          </Link>
          <Link to="/login" className="botao-link">
            <button className="botao-header">LOGIN</button>
          </Link>
        </div>
      </header>
      <div className="div-inf-home">
        {/* ... Parte das informações ... */}
        <h1>
          As melhores barbearias <br /> reunidas em um só lugar.
        </h1>
        <br />
        <h1>
          Descubra barbearias em sua <br /> região com o BarberNow!
        </h1>
      </div>
      <div className="div-inf-home2">
        <h1 className="filtro-txt">
          Escolha o tipo de serviço que deseja realizar:
        </h1>
        {/* ... Parte dos filtros ... */}
        <div className="filtro">
          <button>CABELO</button>
          <button>BARBA</button>
          <button>SOBRANCELHA</button>
        </div>
        <div className="ordenar">
          <h1>Barbearias:</h1>
          <div>
            <span>Ordenar barbearias por:</span>
            <button onClick={() => onOrderByName(false)}>
              <img src={AZ}></img>
            </button>
            <button onClick={() => onOrderByName(true)}>
              <img src={ZA}></img>
            </button>
            <button onClick={() => onOrderByPriceMax(false)}>
              <img src={baratocaro}></img>
            </button>
            <button onClick={() => onOrderByPriceMax(true)}>
              <img src={carobarato}></img>
            </button>
          </div>
        </div>
        <div className="catalogo">
          {barbearias.map((barbearia) => (
            <Link to={`/servicos/${barbearia.cnpj}`} key={barbearia.id}>
              <div className="card-barbearia">
                <div className="card-barbeariaL">
                  <img
                    src={barbearia.fotoURL}
                    className="logotipo"
                    alt="logotipo-barbearia"
                  ></img>
                </div>
                <div className="card-barbeariaR">
                  <h1>{barbearia.nome}</h1>
                  <h3>
                    {barbearia.endereco}
                    <br />
                    {barbearia.telefone}
                  </h3>
                  <h2>
                    {minMaxPrices[barbearia.cnpj]?.minPrice !== undefined &&
                    minMaxPrices[barbearia.cnpj]?.maxPrice !== undefined
                      ? `↓R$${minMaxPrices[barbearia.cnpj].minPrice} - ↑R$${
                          minMaxPrices[barbearia.cnpj].maxPrice
                        }`
                      : "Serviços não disponíveis"}
                  </h2>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}

export default HomeHTML;
