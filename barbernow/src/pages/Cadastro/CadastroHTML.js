import React from "react";
import arrowImg from "../../assets/arrow.svg";
import logoImg from "../../assets/logo.svg";

function CadastroHTML(props) {
  return (
    <div className="container">
      <header className="header">
        <img src={logoImg} alt="Workflow" className="logoImg" />
        <span>Por favor digite suas informações de cadastro</span>
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