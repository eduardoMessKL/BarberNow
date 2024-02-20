import React from "react";
import arrow from "../../assets/Arrow Black.png";
import logoimg from "../../assets/Logo/LogoBranca.png";
import CorteCabelo from "../../assets/CorteCabelo.png";
import Pencil from "../../assets/Elements/Pencil.png";
import Wpp from "../../assets/Elements/WhatsApp.png";
import maps from "../../assets/maps.png";
import { Link } from "react-router-dom";

function ServicosHTML({ servicos, barbearia }) {
  return (
    <div className="container-erro">
      {/*----HEDAER----*/}
      <header className="header">
        <div className="headerL">
          <img
            src={logoimg}
            className="imglogo-header"
            alt="logoimg-header"
          ></img>
          <h1 className="logotxt-header">BarberNow</h1>
        </div>
        <div className="headerR">
          <button className="botao-header">
            <Link to="/" className="botao-link">
              INÍCIO
            </Link>
          </button>
        </div>
      </header>
      <div className="div-inf-Servicos">
        <div className="info-barbearia">
          {/*----ARROW----*/}
          <div className="card-login-arrow">
            <button className="botao-arrow">
              <Link to={"/"}>
                <img src={arrow} className="arrow" alt="arrow"></img>
              </Link>
            </button>
          </div>
          <div className="dados-barbearia">
            <div className="dados-barbeariaL">
              <img src={barbearia.fotoURL}></img>
              <Link
                to={`https://wa.me/55${barbearia.telefone}?text=Ol%C3%A1%21%20Quero%20agendar%20um%20corte%21`}
                target="_blank"
                rel="noopener noreferrer"
              >
                <button className="entrar-contato">
                  ENTRAR EM CONTATO
                  <img src={Wpp} className="wpp"></img>
                </button>
              </Link>
            </div>
            <div className="dados-barbeariaR">
              <h1>{barbearia.nome}</h1>
              <h3>{barbearia.endereco}</h3>
              <h3>{barbearia.telefone}</h3>
              <h3>{barbearia.horario}</h3>
              <h3>
                <Link
                  to={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(barbearia.nome + ' ' + barbearia.endereco)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img src={maps} className="maps_logo" alt="maps" />
                </Link>
              </h3>
            </div>
          </div>
        </div>
        <div className="servicos-barbearia">
          {servicos.map((servico) => (
            <div className="card-servico">
              <div className="card-servicoL">
                <img
                  src={servico.fotoURL}
                  className="CorteCabelo"
                  alt="logotipo-barbearia"
                ></img>
              </div>
              <div className="card-servicoR">
                <h1>{servico.nome}</h1>
                <h3>{servico.descricao}</h3>
                <h2>R$ {servico.preco}</h2>
                <h3>{servico.duracao}</h3>
              </div>
              <div className="div-pincel"></div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default ServicosHTML;
