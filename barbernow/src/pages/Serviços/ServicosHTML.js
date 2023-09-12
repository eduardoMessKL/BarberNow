import React from "react";
import arrow from "../../assets/Arrow Black.png";
import logoimg from "../../assets/Logo/LogoBranca.png";
import CorteCabelo from "../../assets/CorteCabelo.png"
import logotipo from "../../assets/Logotipo.png"
import Pencil from "../../assets/Elements/Pencil.png"
import Wpp from "../../assets/Elements/WhatsApp.png"

import { Link } from "react-router-dom";

function ServicosHTML(){
    return(
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
                <Link to="/" className="botao-link">
                <button className='botao-header'>
                    INÍCIO
                </button>
                </Link>
                <Link to="/cadastro" className="botao-link">
                <button className='botao-header'>
                    REGISTRAR-SE
                </button>
                </Link>
                <Link to="/login" className="botao-link">
                <button className='botao-header'>
                    LOGIN
                </button>
                </Link>
            </div>
            </header>
            <div className="div-inf-Servicos">
                <div className="info-barbearia">
                    {/*----ARROW----*/}
                    <div className='card-login-arrow'>
                        <button className='botao-arrow'>
                        <Link to="/">
                        <img src={arrow} className='arrow' alt='arrow'></img>
                        </Link>
                        </button>
                    </div>
                    <div className="dados-barbearia">
                        <div className="dados-barbeariaL">
                            <img src={logotipo}></img>
                            <button className="entrar-contato">
                                ENTRAR EM CONTATO
                                <img src={Wpp} className="wpp"></img>
                            </button>
                        </div>
                        <div className="dados-barbeariaR">
                            <h1>Style Cuts Barbearia</h1>
                            <h3> - Rua Padre Chagas, 4598, Centro</h3>
                            <h3> - 42 99987-8729</h3>
                            <h3> - Horário de atendimento:<br/>Seg. à Sex.: 8h - 18h</h3>
                        </div>
                    </div>
                </div>
                <div className="servicos-barbearia">
                    <Link to={'/editar-servico'}>
                    <div className="card-servico1">
                        <div className="card-servicoL">
                            <img src={CorteCabelo} className="CorteCabelo" alt="logotipo-barbearia"></img>
                        </div>       
                        <div className="card-servicoR">                 
                            <h1>Corte Maloka</h1>
                            <h3>Cabelo pra voce ficar <br/>chave na quebrada!</h3>
                            <h2>R$20,00</h2>
                            <h3>60 min</h3>
                        </div>
                    </div>
                    </Link>
                    <Link to={'/editar-servico'}>
                    <div className="card-servico1">
                        <div className="card-servicoL">
                            <img src={CorteCabelo} className="CorteCabelo" alt="logotipo-barbearia"></img>
                        </div>       
                        <div className="card-servicoR">                 
                            <h1>Corte Maloka</h1>
                            <h3>Cabelo pra voce ficar <br/>chave na quebrada!</h3>
                            <h2>R$20,00</h2>
                            <h3>60 min</h3>
                        </div>
                    </div>
                    </Link>
                    <Link to={'/editar-servico'}>
                    <div className="card-servico1">
                        <div className="card-servicoL">
                            <img src={CorteCabelo} className="CorteCabelo" alt="logotipo-barbearia"></img>
                        </div>       
                        <div className="card-servicoR">                 
                            <h1>Corte Maloka</h1>
                            <h3>Cabelo pra voce ficar <br/>chave na quebrada!</h3>
                            <h2>R$20,00</h2>
                            <h3>60 min</h3>
                        </div>
                    </div>
                    </Link>
                    <Link to={'/editar-servico'}>
                    <div className="card-servico1">
                        <div className="card-servicoL">
                            <img src={CorteCabelo} className="CorteCabelo" alt="logotipo-barbearia"></img>
                        </div>       
                        <div className="card-servicoR">                 
                            <h1>Corte Maloka</h1>
                            <h3>Cabelo pra voce ficar <br/>chave na quebrada!</h3>
                            <h2>R$20,00</h2>
                            <h3>60 min</h3>
                        </div>
                    </div>
                    </Link>
                    <Link to={'/editar-servico'}>
                    <div className="card-servico1">
                        <div className="card-servicoL">
                            <img src={CorteCabelo} className="CorteCabelo" alt="logotipo-barbearia"></img>
                        </div>       
                        <div className="card-servicoR">                 
                            <h1>Corte Maloka</h1>
                            <h3>Cabelo pra voce ficar <br/>chave na quebrada!</h3>
                            <h2>R$20,00</h2>
                            <h3>60 min</h3>
                        </div>
                    </div>
                    </Link>
                    </div> 
            </div> 
        </div>
    );
}

export default ServicosHTML;