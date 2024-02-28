import React from "react";
import arrow from "../../../assets/Arrow Black.png";
import logoimg from "../../../assets/Logo/LogoBranca.png";
import { Link } from "react-router-dom";

function EditarServicosHTML({
  servico,
  formValues,
  handleUpdate,
  handleChange,
  handleDelete,
  barbearia,
}) {
  if (!servico) {
    return <div>Carregando...</div>;
  }

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
          <Link to={`/perfil/${barbearia.cnpj}`} className="botao-link">
            <button className="botao-header">PERFIL</button>
          </Link>
          <Link to="/login" className="botao-link">
            <button className="botao-header">SAIR</button>
          </Link>
        </div>
      </header>
      <div className="div-inf-addServ">
        <section className="card-addServ" key={servico.id}>
          <div className="card-addServ-L">
            <button className="botao-arrow-cadastro">
              <Link to={`/consultar-servico/${barbearia.cnpj}`}>
                <img src={arrow} className="arrow" alt="arrow"></img>
              </Link>
            </button>
          </div>
          <div className="card-addServ-M">
            <img src={servico.fotoURL} alt="servico-img"></img>
            <label>Altere a foto do corte</label>
          </div>
          <div className="card-addServ-R">
            <div className="div-input-cadastro">
              <input
                value={formValues.nome} // Ajuste aqui para usar formValues.nome
                onChange={(e) => handleChange("nome", e.target.value)}
                type="text"
                name="nome"
                id="nome"
                className="input-cadastro"
                placeholder="Nome do corte"
              />
              <label>Nome do corte *</label>
              <input
                value={formValues.descricao} // Ajuste aqui para usar formValues.descricao
                onChange={(e) => handleChange("descricao", e.target.value)}
                type="text"
                name="descricao"
                id="descricao"
                className="input-cadastro"
                placeholder="Breve descrição sobre o corte"
              />
              <label>Breve descrição sobre o corte *</label>
              <input
                value={formValues.preco} // Ajuste aqui para usar formValues.preco
                onChange={(e) => handleChange("preco", e.target.value)}
                type="text"
                name="preco"
                id="preco"
                className="input-cadastro"
                placeholder="Preço"
              />
              <label>Preço *</label>
              <div>
                <section>
                  <input
                    value={formValues.duracao} // Ajuste aqui para usar formValues.duracao
                    onChange={(e) => handleChange("duracao", e.target.value)}
                    type="text"
                    name="duracao"
                    id="duracao"
                    className="input-cadastro"
                    placeholder="Duração"
                  />
                  <label>Duração *</label>
                </section>
                <section>
                  <input
                    value={formValues.tipo} // Ajuste aqui para usar formValues.tipo
                    onChange={(e) => handleChange("tipo", e.target.value)}
                    type="text"
                    name="tipo"
                    id="tipo"
                    className="input-cadastro"
                    placeholder="Tipo de serviço"
                  />
                  <label>Tipo de serviço*</label>
                </section>
              </div>
              <div className="botaos">
                <button
                  className="botao-adicionar"
                  onClick={() => handleUpdate(servico.id)}
                >
                  <h1>EDITAR CORTE</h1>
                </button>

                <Link to={`/perfil/${barbearia.cnpj}`}>
                  <button className="botao-adicionar">
                    <h1>CANCELAR EDIÇÃO</h1>
                  </button>
                </Link>
                <button className="botao-adicionar" onClick={handleDelete}>
                  <h1>EXCLUIR SERVIÇO</h1>
                </button>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}

export default EditarServicosHTML;
