import React from "react";
import { Link } from "react-router-dom";
import logoImg from "../../../assets/Logo/LogoBranca.png"
import Pencil from "../../../assets/Elements/Pencil.png"
import TrashCan from "../../../assets/Elements/TrashCan.png"
import logotipo from "../../../assets/Logotipo.png"
import Adicionar from "../../../assets/Elements/Adicionar.png"
import arrow from "../../../assets/Arrow Black.png"

export function PerfilEHTML(){
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
            <button className='botao-header'>
              <Link to="/login" className="botao-link">LOGIN</Link>
            </button>
          </div>
        </header>
  
        {/*----DIV INFERIOR----*/}
        <div className="div-inf-cadastro">
          <form className="card-editarperfil">  
          <div className="parte-cima">
            {/*----CADASTRO LADO ESQUERDO----*/}
            <div className="cadastroL-cadastro">
            <img src={logotipo}></img>
              <h1
                className="txt-logotipo-cadastro"
              >
                ALTERAR LOGOTIPO
              </h1>
  
              <div className="div-input-cadastro">
                <input
                  type="text"
                  name="nome"
                  id="nome"
                  className="input-cadastro"
                  placeholder="Styles cuts barbearia"
                />
                <label>Nome da barbearia *</label>
              </div>
                            <div className="div-input-cadastro">
                <input
                  type="text"
                  name="telefone"
                  id="telefone"
                  className="input-cadastro"
                  placeholder="1239841123"
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
                  placeholder="mauro mulati"
                  />
                <label>e-mail *</label>
              </div>
              <div className="div-input-cadastro">
                <input
                  type="text"
                  name="endereço"
                  id="endereço"
                  className="input-cadastro"
                  placeholder="rua 123"
                />{/*barbearia.endereço*/}
                <label>Endereço da sua barbearia *</label>
              </div>
              <div className="div-input-cadastro">
                <input
                  type="text"
                  name="horarioat"
                  id="horarioat"
                  className="input-cadastro"
                  placeholder="Segunda a sexta"
                /> {/*barbearia.horarioat*/}
                <label>Horário de atendimento *</label>
              </div>
              <div className="div-input-cadastro">
              <input
                type="text"
                name="horarioat"
                id="horarioat"
                className="input-cadastro"
              />
              <label>Link WhatsApp *</label>
            </div>
            </div>
            </div>
            <div className="botaos">
                <Link to={'/perfil'}>
                <button className="botao-editar-concluir">
                    <h1>CONCLUIR EDIÇÃO</h1>
                </button>
                </Link>
                <Link to={'/perfil'}>
                <button className="botao-editar-sair">
                    <h1>CANCELAR EDIÇÃO</h1>
                </button>
                </Link>
                </div>
          </form>
        </div>
      </div>
    );
 }

{/*onChange={(e) => props.setHorario(e.target.value)*/}
{/*onChange={(e) => props.setHorario(e.target.value)*/}
{/*onChange={(e) => props.setHorario(e.target.value)*/}
{/*onChange={(e) => props.setHorario(e.target.value)*/}


 export default PerfilEHTML;