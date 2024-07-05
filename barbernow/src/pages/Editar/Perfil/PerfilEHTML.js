import React from "react";
import { Link } from "react-router-dom";
import logoImg from "../../../assets/Logo/LogoBranca.png";
import Pencil from "../../../assets/Elements/Pencil.png";
import TrashCan from "../../../assets/Elements/TrashCan.png";
import logotipo from "../../../assets/Logotipo.png";
import Adicionar from "../../../assets/Elements/Adicionar.png";
import arrow from "../../../assets/Arrow Black.png";

export function PerfilEHTML({ barbearia, handleChange, handleUpdate }) {
  return (
    <div className="container-cadastro">
      {/*----HEDAER----*/}
      <header className="header">
        <div className="headerL">
          <img
            src={logoImg}
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
        <form className="card-editarperfil">
          <div className="parte-cima">
            {/*----CADASTRO LADO ESQUERDO----*/}
            <div className="cadastroL-cadastro">
              <img src={barbearia.fotoURL}></img>
              <h1 className="txt-logotipo-cadastro">ALTERAR LOGOTIPO</h1>

              <div className="div-input-cadastro">
                <input
                  type="text"
                  name="nome"
                  id="nome"
                  className="input-cadastro"
                  placeholder="Nome da barbearia"
                  value={barbearia.nome || ""}
                  onChange={(e) => handleChange("nome", e.target.value)}
                />
                <label>Nome da barbearia *</label>
              </div>
              <div className="div-input-cadastro">
                <input
                  type="text"
                  name="telefone"
                  id="telefone"
                  className="input-cadastro"
                  placeholder="telefone"
                  value={barbearia.telefone || ""}
                  onChange={(e) => handleChange("telefone", e.target.value)}
                />
                <label>Telefone para contato * </label>
              </div>
            </div>

            {/*----CADASTRO MEIO----*/}
            <div className="cadastroR-cadastro">
              <div className="div-input-cadastro">
                <input
                  type="text"
                  name="email"
                  id="email"
                  className="input-cadastro"
                  placeholder="email"
                  value={barbearia.email || ""}
                  onChange={(e) => handleChange("email", e.target.value)}
                />
                <label>e-mail *</label>
              </div>
              <div className="div-input-cadastro">
                <input
                  type="text"
                  name="endereco"
                  id="endereco"
                  className="input-cadastro"
                  placeholder="endereço"
                  value={barbearia.endereco || ""}
                  onChange={(e) => handleChange("endereco", e.target.value)}
                />
                {/*barbearia.endereço*/}
                <label>Endereço da sua barbearia *</label>
              </div>
              <div className="div-input-cadastro">
                <input
                  type="text"
                  name="horario"
                  id="horario"
                  className="input-cadastro"
                  placeholder="horário"
                  value={barbearia.horario || ""}
                  onChange={(e) => handleChange("horario", e.target.value)}
                />
                <label>Horário de atendimento *</label>
              </div>
            </div>
          </div>
          <div className="botaos">
            <Link to={`/perfil/${barbearia.cnpj}`}>
              <button className="botao-editar-concluir" onClick={handleUpdate}>
                <h1>CONCLUIR EDIÇÃO</h1>
              </button>
            </Link>
            <Link to={`/perfil/${barbearia.cnpj}`}>
              <button className="botao-editar-concluir">
                <h1>CANCELAR EDIÇÃO</h1>
              </button>
            </Link>
          </div>
        </form>
      </div>
    </div>
  );
}

export default PerfilEHTML;
