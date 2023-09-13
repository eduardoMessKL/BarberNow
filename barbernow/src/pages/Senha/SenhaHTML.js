import "./Senha.css";
import React from "react";
import logoimg from "../../assets/Logo/LogoBranca.png";
import { Link } from "react-router-dom";

function SenhaHTML({
  barbearia,
  currentPassword,
  handleCurrentPasswordChange,
  newPassword,
  handleNewPasswordChange,
  handlePasswordChange
}) {
  return (
    <div className="container-erro">
      <header className="header">
        <div className="headerL">
          <img src={logoimg} className="imglogo-header" alt="logoimg-header"></img>
          <h1 className="logotxt-header">BarberNow</h1>
        </div>
        <div className="headerR">
          <button className="botao-header">
            <Link to="/" className="botao-link">INÍCIO</Link>
          </button>
          <button className="botao-header">
            <Link to={`/perfil/${barbearia.cnpj}`} className="botao-link">VOLTAR</Link>
          </button>
        </div>
      </header>
      <div className="div-inf-senha">
        <div className="card-senha">
          <h1>ALTERAR SENHA</h1>
          <div className="input-password-cadastro">
            <input
              type="password"
              name="currentPassword"
              id="currentPassword"
              className="input-cadastro"
              value={currentPassword}
              onChange={handleCurrentPasswordChange}
            />
            <label>Senha Atual</label>
          </div>
          <div className="input-password-cadastro">
            <input
              type="password"
              name="newPassword"
              id="newPassword"
              className="input-cadastro"
              value={newPassword}
              onChange={handleNewPasswordChange}
            />
            <label>Nova Senha</label>
          </div>
          <Link to={`/perfil/${barbearia.cnpj}`}>
            <button className="botao-senha" onClick={handlePasswordChange}>
              CONCLUIR
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default SenhaHTML;
