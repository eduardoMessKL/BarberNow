import React from "react";
import arrow from "../../assets/Arrow Black.png";
import logoimg from "../../assets/Logo/LogoBranca.png";
import userIcon from "../../assets/User Icon.png"
import { Link } from "react-router-dom";

function CadastroHTML(props) {
  return (
    <div className="container-cadastro">
      {/*----HEDAER----*/}
      <header className="header-cadastro">
        <div className="headerL-cadastro">
          <img
            src={logoimg}
            className="imglogo-header-cadastro"
            alt="logoimg-header-cadastro"
          ></img>
          <h1 className="logotxt-header-cadastro">BarberNow</h1>
        </div>
        <div className="headerR-cadastro">
          <button className='botao-header-cadastro'>
            <Link to="/login" className="botao-link-cadastro">LOGIN</Link>
          </button>
        </div>
      </header>

      <form>
        <div className="inputContainer">
          <label htmlFor="email">E-mail</label>
          <input
            type="text"
            name="email"
            id="email"
            placeholder="johndoe@gmail.com"
            onChange={(e) => props.setEmail(e.target.value)}
          />
        </div>

        <div className="inputContainer">
          <label htmlFor="password">Senha</label>
          <input
            type="password"
            name="password"
            id="password"
            placeholder="********************"
            onChange={(e) => props.setPassword(e.target.value)}
          />
        </div>

        <button onClick={props.handleSignOut} className="button">
          Cadastrar <img src={arrowImg} alt="->" />
        </button>
        <div className="footer">
          <p>Você já tem uma conta?</p>
          {props.SignInLink()}
          {/*<Link to="/">Acesse sua conta aqui</Link>*/}
        </div>
      </form>
    </div>
  );
}

export default CadastroHTML;
