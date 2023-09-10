import "./Senha.css";
import React from "react";
import logoimg from "../../assets/Logo/LogoBranca.png";
import sad from "../../assets/Elements/Sad.png";
import poste from "../../assets/Elements/Poste.png";
import { Link } from "react-router-dom";

function SenhaHTML() {
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
          <button className="botao-header">
            <Link to="/cadastro" className="botao-link">
              VOLTAR
            </Link>
          </button>
        </div>
      </header>
      <div className="div-inf-senha">
        <div className="card-senha">
          <h1>ALTERAR SENHA</h1>
          <div className="input-password-cadastro">
            <input
              type="password"
              name="password"
              id="password"
              className="input-cadastro"
            />
            <label>Senha Atual</label>
          </div>
          <div className="input-password-cadastro">
            <input
              type="password"
              name="password"
              id="password"
              className="input-cadastro"
            />
            <label>Nova Senha</label>
          </div>
          <Link to={'/perfil'}>
              <button className="botao-senha">
                CONCLUIR
              </button>
            </Link>
        </div>
      </div>
    </div>
  );
}

export default SenhaHTML;
