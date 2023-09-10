import React from "react";
import arrow from "../../../assets/Arrow Black.png";
import logoimg from "../../../assets/Logo/LogoBranca.png";
import userIcon from "../../../assets/User Icon.png"
import { Link } from "react-router-dom";
import FotoCorte from "../../../assets/FotoCorte.png"

function AddServicosHTML() {
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
          <Link to={'/'}>
          <h1 className="logotxt-header">BarberNow</h1>
          </Link>
        </div>
        <div className="headerR">
        <Link to="/perfil" className="botao-link">
          <button className='botao-header'>
            PERFIL
          </button>
        </Link>
        <Link to="/login" className="botao-link">
          <button className='botao-header'>
            SAIR
          </button>
        </Link>
        </div>
      </header>
      <div className="div-inf-addServ">
        <section className="card-addServ">
            <div className="card-addServ-L">
                <button className="botao-arrow-cadastro">
                <Link to="/perfil">
                <img src={arrow} className='arrow' alt='arrow'></img>
                </Link>
                </button>
            </div>
            <div className="card-addServ-M">
                <img src={FotoCorte} className="foto-corte"></img>
                <label>Foto do Corte a ser Adicionado</label>
                <h3>Clique <Link to="/" className='aqui-serv'>aqui</Link> para enviar.</h3>
            </div>
            <div className="card-addServ-R">
            <div className="div-input-cadastro">
              <input
                type="text"
                name="nome"
                id="nome"
                className="input-cadastro"
              />
              <label>Nome do corte *</label>
              <input
                type="text"
                name="nome"
                id="nome"
                className="input-cadastro"
              />
              <label>Breve descrição sobre o corte *</label>
              <input
                type="text"
                name="nome"
                id="nome"
                className="input-cadastro"
              />
              <label>Preço *</label>
              <div>
                <section>
                  <input
                    type="text"
                    name="nome"
                    id="nome"
                    className="input-cadastro"
                  />
                  <label>Duração *</label>
                </section>
                <section>
                  <input
                    type="text"
                    name="nome"
                    id="nome"
                    className="input-cadastro"
                  />
                  <label>Tipo de serviço*</label>
                </section>
              </div>
              <button className="botao-adicionar">
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