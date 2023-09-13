import React from "react";
import arrow from "../../../assets/Arrow Black.png";
import logoimg from "../../../assets/Logo/LogoBranca.png";
import userIcon from "../../../assets/User Icon.png";
import { Link } from "react-router-dom";
import FotoCorte from "../../../assets/CorteCabelo.png";

function EditarServicosHTML({
  servico,
  formValues,
  setFormValues,
  handleUpdate,
  barbearia,
}) {
  const handleChange = (field, value) => {  
    setFormValues((prev) => ({
      ...prev,
      [servico.id]: {
        ...prev[servico.id],
        [field]: value,
      },
    }));
  };

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
          <Link to={"/"}>
            <h1 className="logotxt-header">BarberNow</h1>
          </Link>
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
                  value={formValues[servico.id]?.nome}
                  onChange={(e) =>
                    handleChange(servico.id, "nome", e.target.value)
                  }
                  type="text"
                  name="nome"
                  id="nome"
                  className="input-cadastro"
                  placeholder={servico.nome}
                />
                <label>Nome do corte *</label>
                <input
                  value={formValues[servico.id]?.descricao}
                  onChange={(e) =>
                    handleChange(servico.id, "descricao", e.target.value)
                  }
                  type="text"
                  name="descricao"
                  id="descricao"
                  className="input-cadastro"
                  placeholder={servico.descricao}
                />
                <label>Breve descrição sobre o corte *</label>
                <input
                  value={formValues[servico.id]?.preco}
                  onChange={(e) =>
                    handleChange(servico.id, "preco", e.target.value)
                  }
                  type="text"
                  name="preco"
                  id="preco"
                  className="input-cadastro"
                  placeholder={servico.preco}
                />
                <label>Preço *</label>
                <div>
                  <section>
                    <input
                      value={formValues[servico.id]?.duracao}
                      onChange={(e) =>
                        handleChange(servico.id, "duracao", e.target.value)
                      }
                      type="text"
                      name="duracao"
                      id="duracao"
                      className="input-cadastro"
                      placeholder={servico.duracao}
                    />
                    <label>Duração *</label>
                  </section>
                  <section>
                    <input
                      value={formValues[servico.id]?.tipo}
                      onChange={(e) =>
                        handleChange(servico.id, "tipo", e.target.value)
                      }
                      type="text"
                      name="tipo"
                      id="tipo"
                      className="input-cadastro"
                      placeholder={servico.tipo}
                    />
                    <label>Tipo de serviço*</label>
                  </section>
                </div>
                <Link to={`/perfil/${barbearia.cnpj}`}>
                  <button
                    className="botao-adicionar"
                    onClick={() => handleUpdate(servico.id)}
                  >
                    <h1>EDITAR CORTE</h1>
                  </button>
                </Link>
              </div>
            </div>
          </section>
    
      </div>
    </div>
  );
}

export default EditarServicosHTML;
