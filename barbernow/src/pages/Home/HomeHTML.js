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
import { Link } from "react-router-dom";
import logoImg from "../../assets/Logo/LogoBranca.png"
import AZ from "../../assets/Elements/AZ.png";
import ZA from "../../assets/Elements/ZA.png";
import baratocaro from "../../assets/Elements/12.png";
import carobarato from "../../assets/Elements/21.png"
import logotipo from "../../assets/Logotipo.png"

export function HomeHTML(){
    return (
        <div className="container-home">
            <header className='header'>
                <div className='headerL'>
                    <img src={logoImg} className='imglogo-header' alt='logoimg-header'></img>
                    <h1 className='logotxt-header'>BarberNow</h1>
                </div>
                <div className='headerR'>
                    <button className='botao-header'>
                        <Link to="/cadastro" className="botao-link">REGISTRAR-SE</Link>
                    </button>
                    <button className='botao-header'>
                        <Link to="/login" className="botao-link">LOGIN</Link>
                    </button>
                </div>
            </header>
            <div className="div-inf-home">
                <h1>As melhores barbearias <br/> reunidas em um só lugar.</h1>
                <br/>
                <h1>Descubra barbearias em sua <br/> região com o BarberNow!</h1>
            </div>
            <div className="div-inf-home2">
                <h1 className="filtro-txt">Escolha o tipo de serviço que deseja realizar:</h1>
                <div className="filtro">
                    <button>CABELO</button>
                    <button>BARBA</button>
                    <button>SOBRANCELHA</button>
                </div>
                <div className="ordenar">
                    <h1>Barbearias:</h1>
                    <div>
                        <span>Ordenar barbearias por:</span>
                        <button>
                            <img src={AZ}></img>
                        </button>
                        <button>
                            <img src={AZ}></img>
                        </button>
                        <button>
                            <img src={baratocaro}></img>
                        </button>
                        <button>
                            <img src={carobarato}></img>
                        </button>
                    </div>
                </div>
                <div className="catalogo">
                   {/* {barbearias.map((barbearia) => (
                        <Link to={'/serviços$/{barbearia.id}'}>
                            <div className="card-barbearia" key={barbearia.id}>
                                <div className="card-barbeariaL"><img src={barbearia.logotipo} className="logotipo" alt="logotipo-barbearia"></img></div>       
                                <div className="card-barbeariaR">                 
                                    <h1>{barbearia.nome}</h1>
                                    <h3>{barbearia.endereço}<br/>{barbearia.telefone}</h3>
                                    <h2>{barbearia.precomin} - {barbearia.precomax}</h2>
                                </div>
                            </div>
                        </Link>
                   ))} */}
                    <div className="card-barbearia">
                        <div className="card-barbeariaL"><img src={logotipo} className="logotipo" alt="logotipo-barbearia"></img></div>       
                        <div className="card-barbeariaR">                 
                            <h1>Style Cuts Barbearia</h1>
                            <h3>Rua Padre Chagas, 4598<br/>42 99953-9872</h3>
                            <h2>R$20,00 - R$75,00</h2>
                        </div>
                    </div>
                    <div className="card-barbearia">
                        <div className="card-barbeariaL"><img src={logotipo}  className="logotipo" alt="logotipo-barbearia"></img></div>       
                        <div className="card-barbeariaR">                 
                            <h1>Style Cuts Barbearia</h1>
                            <h3>Rua Padre Chagas, 4598<br/>42 99953-9872</h3>
                            <h2>R$20,00 - R$75,00</h2>
                        </div>
                    </div>
                    <div className="card-barbearia">
                        <div className="card-barbeariaL"><img src={logotipo}  className="logotipo" alt="logotipo-barbearia"></img></div>       
                        <div className="card-barbeariaR">                 
                            <h1>Style Cuts Barbearia</h1>
                            <h3>Rua Padre Chagas, 4598<br/>42 99953-9872</h3>
                            <h2>R$20,00 - R$75,00</h2>
                        </div>
                    </div>
                    <div className="card-barbearia">
                        <div className="card-barbeariaL"><img src={logotipo}  className="logotipo" alt="logotipo-barbearia"></img></div>       
                        <div className="card-barbeariaR">                 
                            <h1>Style Cuts Barbearia</h1>
                            <h3>Rua Padre Chagas, 4598<br/>42 99953-9872</h3>
                            <h2>R$20,00 - R$75,00</h2>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
} 


export default HomeHTML;