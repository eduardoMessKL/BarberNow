import React from "react";
import arrowImg from "../../assets/arrow.svg";
import logoImg from "../../assets/logo.svg";

function HomeHTML(props) {
  return (
<div className="container">
    <header className="header">
      <img src={logoImg} alt="Workflow" className="logoImg" />
      <span>Bem-vindo ao barberNow</span>
    </header>
    <a href="/cadastro"><button>Cadastro</button></a>
    <a href='/login'><button>Login</button></a>
  </div>
  );

}

export default HomeHTML;