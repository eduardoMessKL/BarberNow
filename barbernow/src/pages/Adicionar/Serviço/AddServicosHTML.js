import React from "react";
import arrow from "../../../assets/Arrow Black.png";
import logoimg from "../../../assets/Logo/LogoBranca.png";
import userIcon from "../../../assets/User Icon.png";
import { Link } from "react-router-dom";
import FotoCorte from "../../../assets/FotoCorte.png";

function AddServicosHTML(props) {
  return (
    <div className="container-addservicos">
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
          <Link to={`/perfil/${props.barbearia.cnpj}`} className="botao-link">
            <button className="botao-header">PERFIL</button>
          </Link>
          <Link to="/login" className="botao-link">
            <button className="botao-header">SAIR</button>
          </Link>
        </div>
      </header>
      <div className="div-inf-addServ">
        <section className="card-addServ">
          <div className="card-addServ-L">
            <button className="botao-arrow-cadastro">
              <Link to={`/perfil/${props.barbearia.cnpj}`}>
                <img src={arrow} className="arrow" alt="arrow"></img>
              </Link>
            </button>
          </div>
          <div className="card-addServ-M">
            <img src={FotoCorte} className="foto-corte"></img>
            <label>Foto do Corte a ser Adicionado</label>
            <input
              type="file"
              accept="image/*"
              onChange={(e) => props.setImageFile(e.target.files[0])}
            />
            <h3>Envie a foto do corte</h3>
          </div>
          <div className="card-addServ-R">
            <div className="div-input-cadastro">
              <input
                type="text"
                name="nomeCorte"
                id="nomeCorte"
                className="input-cadastro"
                onChange={(e) => props.setNomeCorte(e.target.value)}
              />
              <label>Nome do corte *</label>

              <input
                type="text"
                name="descricao"
                id="descricao"
                className="input-cadastro"
                onChange={(e) => props.setDescricaoCorte(e.target.value)}
              />
              <label>Breve descrição sobre o corte *</label>

              <input
                type="number"
                name="preco"
                id="preco"
                className="input-cadastro"
                onChange={(e) => props.setPreco(e.target.value)}
              />
              <label>Preço *</label>

              <input
                type="text"
                name="duracao"
                id="duracao"
                className="input-cadastro"
                onChange={(e) => props.setDuracao(e.target.value)}
              />
              <label>Duração *</label>

              <input
                type="text"
                name="tipoServico"
                id="tipopServico"
                onChange={(e) => props.setTipoServico(e.target.value)}
                className="input-cadastro"
              />
              <label>Tipo de serviço*</label>

              <button
                className="botao-adicionar"
                onClick={props.adicionarServico}
              >
                <h1>ADICIONAR</h1>
              </button>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}

export default AddServicosHTML;
