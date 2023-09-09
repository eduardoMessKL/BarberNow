import './Erro.css';
import React from "react";
import logoimg from "../../assets/Logo/LogoBranca.png";
import sad from "../../assets/Elements/Sad.png"
import poste from "../../assets/Elements/Poste.png"
import { Link } from "react-router-dom";

function Erro() {
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
        <button className='botao-header'>
          <Link to="/" className="botao-link">INÍCIO</Link>
        </button>
        <button className='botao-header'>
          <Link to="/cadastro" className="botao-link">REGISTRAR-SE</Link>
        </button>
        <button className='botao-header'>
          <Link to="/login" className="botao-link">LOGIN</Link>
        </button>
      </div>
    </header>
    <div className='div-inf-erro'> 
      <img src={sad} className='sad'></img>
      <h1>ERRO 404 - Not Found!</h1>
      <div>
        <img src={poste} className='poste'></img>
        <h2>A página que você buscava não foi encontrada!</h2>
        <img src={poste} className='poste'></img>
      </div>
      <h2>Clique <Link to="/" className='aqui'>aqui</Link> para voltar à pagina inicial.</h2>
    </div>

  </div>
  );
}

export default Erro;