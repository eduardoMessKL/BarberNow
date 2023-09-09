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
          <label htmlFor="nome">Nome da Barbearia</label>
          <input
            type="text"
            name="nome"
            id="nome"
            placeholder="Nome da sua barbearia"
            onChange={(e) => props.setNome(e.target.value)}
          />
        </div>

        <div className="inputContainer">
          <label htmlFor="telefone">Telefone para Contato</label>
          <input
            type="text"
            name="telefone"
            id="telefone"
            placeholder="(99) 99999-9999"
            onChange={(e) => props.setTelefone(e.target.value)}
          />
        </div>

        <div className="inputContainer">
          <label htmlFor="cnpj">CNPJ</label>
          <input
            type="text"
            name="cnpj"
            id="cnpj"
            placeholder="12345678901234"
            onChange={(e) => props.setCnpj(e.target.value)}
          />
        </div>

        <div className="inputContainer">
          <label htmlFor="endereco">Endereço da Barbearia</label>
          <input
            type="text"
            name="endereco"
            id="endereco"
            placeholder="Endereço da sua barbearia"
            onChange={(e) => props.setEndereco(e.target.value)}
          />
        </div>

        <div className="inputContainer">
          <label htmlFor="horario">Horário de Atendimento</label>
          <input
            type="text"
            name="horario"
            id="horario"
            placeholder="Horário de funcionamento"
            onChange={(e) => props.setHorario(e.target.value)}
          />
        </div>

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
            onChange={(e) => props.setSenha(e.target.value)}
          />
        </div>

        <div className="inputContainer">
          <label htmlFor="repetirSenha">Repita a Senha</label>
          <input
            type="password"
            name="repetirSenha"
            id="repetirSenha"
            placeholder="********************"
            onChange={(e) => props.setRepetirSenha(e.target.value)}
          />
        </div>
        <div>
          <label> Adicione a foto de sua barbearia</label>
          <input
            type="file"
            accept="image/*"
            onChange={(e) => props.setImageFile(e.target.files[0])}
          />
        </div>

        <button onClick={props.handleSignUp} className="button">
          Cadastrar <img src={arrowImg} alt="->" />
        </button>

        <div className="footer">
          <p>Você já tem uma conta?</p>
          {props.SignInLink()}
        </div>
      </form>
    </div>
  );
}

export default CadastroHTML;
