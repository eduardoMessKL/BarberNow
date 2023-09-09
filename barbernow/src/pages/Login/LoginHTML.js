import React from "react";
import logoimg from "../../assets/Logo/LogoBranca.png"
import logoimg1 from"../../assets/Logo/Logo BarberNow.png"
import arrow from "../../assets/Arrow Black.png"
import { Link } from "react-router-dom";

function LoginHTML(props) {
  return (
    <div className="container">
      {/*----HEDAER----*/}
      <header className='header'>
        <div className='headerL'>
          <img src={logoimg} className='imglogo-header' alt='logoimg-header'></img>
          <h1 className='logotxt-header'>BarberNow</h1>
        </div>
        <div className='headerR'>
          <button className='botao-header'>
            <Link to="/cadastro" className="botao-link">REGISTRAR-SE</Link>
          </button>
        </div>
      </header>
      <div className="div-inf">
        {/*----CARD LOGIN----*/}
        <form className='card-login'>
          {/*----ARROW----*/}
          <div className='card-login-arrow'>
            <button className='botao-arrow'>
            <Link to="/">
              <img src={arrow} className='arrow' alt='arrow'></img>
            </Link>
            </button>
          </div>
          {/*----IMAGEM + TXT LOGIN----*/}
          <img src={logoimg1} className="imglogo-card" alt='imglogo-card'/>
          <h1 className='txt-login'>LOGIN</h1>
          <span className='txt-loginDescricao'>Por favor digite suas informações de login</span>
          {/*----INPUT EMAIL----*/}
          <div className="input-email">
            <input
              type="text"
              name="email"
              id="email"
              className="input"
              onChange={(e) => props.setEmail(e.target.value)}
            />
            <label>E-mail</label>
          </div>
          {/*----INPUT SENHA----*/}   
          <div className="input-senha">
            <input
              type="password"
              name="password"
              id="password"
              className="input"
              onChange={(e) => props.setPassword(e.target.value)}
            />
            <label>Senha</label>
          </div>
          <button className="botao-entrar" onClick={props.handleSignIn}>
            ENTRAR
          </button>
    </form>
    </div>
  </div>
  );
}

export default LoginHTML;