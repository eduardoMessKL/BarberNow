import React from "react";
import arrow from "../../assets/Arrow Black.png";
import logoimg from "../../assets/Logo/LogoBranca.png";
import userIcon from "../../assets/User Icon.png";
import { Link } from "react-router-dom";

function CadastroHTML(props, {barbearia}) {
  return (
    <div className="container-cadastro">
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
            <Link to="/login" className="botao-link">
              LOGIN
            </Link>
          </button>
        </div>
      </header>

      {/*----DIV INFERIOR----*/}
      <div className="div-inf-cadastro">
        <form className="card-cadastro-cadastro">
          {/*----ARROW----*/}
          <div className="card-cadastro-arrow">
            <button className="botao-arrow-cadastro">
              <Link to="/">
                <img src={arrow} className="arrow" alt="arrow"></img>
              </Link>
            </button>
          </div>

          {/*----CADASTRO LADO ESQUERDO----*/}
          <div className="cadastroL-cadastro">
            <img src={userIcon} className="imglogo" alt="userIcon"></img>
            <div>
              <input
                type="file"
                accept="image/*"
                onChange={(e) => props.setImageFile(e.target.files[0])}
              />
            </div>
            <h1>LOGOTIPO DA BARBEARIA</h1>

            <div className="div-input-cadastro">
              <input
                type="text"
                name="nome"
                id="nome"
                className="input-cadastro"
                onChange={(e) => props.setNome(e.target.value)}
              />
              <label>Nome da barbearia *</label>
            </div>

            <div className="div-input-cadastro">
              <input
                type="text"
                name="telefone"
                id="telefone"
                className="input-cadastro"
                onChange={(e) => props.setTelefone(e.target.value)}
              />
              <label>Telefone para contato * </label>
            </div>
          </div>
          {/*----CADASTRO LADO DIREITO----*/}
          <div className="cadastroR-cadastro">
            <div className="div-input-cadastro">
              <input
                type="text"
                name="email"
                id="email"
                className="input-cadastro"
                onChange={(e) => props.setEmail(e.target.value)}
              />
              <label>e-mail *</label>
            </div>
            <div className="div-password-cadastro">
              <div className="input-password-cadastro">
                <input
                  type="password"
                  name="password"
                  id="password"
                  className="input-cadastro"
                  onChange={(e) => props.setSenha(e.target.value)}
                />
                <label>Senha *</label>
              </div>
              <div className="input-password-cadastro">
                <input
                  type="password"
                  name="password"
                  id="repetirsenha"
                  className="input-cadastro"
                  onChange={(e) => props.setRepetirSenha(e.target.value)}
                />
                <label>Repetir senha *</label>
              </div>
            </div>
            <div className="div-input-cadastro">
              <input
                type="text"
                name="endereço"
                id="endereço"
                className="input-cadastro"
                onChange={(e) => props.setEndereco(e.target.value)}
              />
              <label>Endereço da sua barbearia *</label>
            </div>
            <div className="div-input-cadastro">
              <input
                type="text"
                name="cnpj"
                id="cnpj"
                className="input-cadastro"
                onChange={(e) => props.setCnpj(e.target.value)}
              />
              <label>CNPJ *</label>
            </div>
            <div className="div-input-cadastro">
              <input
                type="text"
                name="horarioat"
                id="horarioat"
                className="input-cadastro"
                onChange={(e) => props.setHorario(e.target.value)}
              />
              <label>Horário de atendimento *</label>
            </div>
            {/*<div className="div-input-cadastro">
              <input
                type="text"
                name="horarioat"
                id="horarioat"
                className="input-cadastro"
                onChange={(e) => props.setHorario(e.target.value)}
              />
              <label>Link WhatsApp *</label>
            </div>
              */}
              <button
                onClick={props.handleSignUp}
                className="botao-cadastrar-cadastro"
              >
                <h1>CONCLUIR CADASTRO</h1>
              </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default CadastroHTML;
