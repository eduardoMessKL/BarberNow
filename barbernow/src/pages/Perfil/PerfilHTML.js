import React from "react";
import { Link } from "react-router-dom";
import logoImg from "../../assets/Logo/LogoBranca.png"
import Pencil from "../../assets/Elements/Pencil.png"
import TrashCan from "../../assets/Elements/TrashCan.png"
import logotipo from "../../assets/Logotipo.png"
import Adicionar from "../../assets/Elements/Adicionar.png"
import arrow from "../../assets/Arrow Black.png"

export function PerfilHTML({barbearia} ){
    return (
        <div className="container-perfil">
            <header className='header'>
                <div className='headerL'>
                    <img src={logoImg} className='imglogo-header' alt='logoimg-header'></img>
                    <h1 className='logotxt-header'>BarberNow</h1>
                </div>
                <div className='headerR'>
                    <button className='botao-header'>
                        <Link to="/" className="botao-link">SAIR</Link>
                    </button>
                </div>
            </header>
            <div className="div-inf-perfil">
                <div className="card-perfil">
                    {/*----ARROW----*/}
                    <div className='card-login-arrow'>
                        <button className='botao-arrow'>
                        <Link to="/">
                        <img src={arrow} className='arrow' alt='arrow'></img>
                        </Link>
                        </button>
                    </div>
                    {/*CARD PARTE DE CIMA*/}
                    <div className="card-top">
                        <div className="card-topL">
                            <Link to={'/editar-perfil'}>
                            <h3>Editar <br/>Perfil<br/></h3>
                            <img src={Pencil}></img>
                            </Link>
                            <br/>
                            <Link to={'/senha'}>
                            <h3>Editar <br/>Senha<br/></h3>
                            <img src={Pencil}></img>
                            </Link>
                        </div>
                        <div className="card-topM">
                            <img src={logotipo}></img>
                            <h1>Style cuts barbearia</h1>
                        </div>
                        <div className="card-topR">
                            <Link to={'/erro'}>
                            <h3>Apagar <br/>Perfil<br/></h3>
                            <img src={TrashCan}></img>
                            </Link>
                        </div>
                    </div> 
                    {/*CARD PARTE DO MEIO*/}
                    <div className="card-mid">
                        <h1>Informações da sua barbearia:</h1>
                        <div className="info-perfil">
                            <div className="card-midL">
                                <h3>E-mail:</h3>
                                <h2>{barbearia.email}</h2>
                                <h3>Endereço:</h3>
                                <h2>{barbearia.endereco}</h2>
                            </div>
                            <div className="card-midR">
                                <h3>Telefone:</h3>
                                <h2>{barbearia.telefone}</h2>
                                <h3>CNPJ:</h3>
                                <h2>{barbearia.cnpj}</h2>
                                <h3>Horario de atendimento:</h3>
                                <h2>{barbearia.horario}</h2>
                            </div>
                        </div>
                    </div>
                    {/*CARD PARTE DE BAIXO*/}
                    <div className="card-bottom">
                        <Link to='/add-servico'>
                        <button className="botao-addServicos">
                            <h3>ADICIONAR SERVIÇOS</h3>
                            <img src={Adicionar}></img>
                        </button>
                        </Link>
                        <Link to='/consultar-servico'>
                        <button className="botao-consultarServicos">
                            <h3>CONSULTAR SERVICOS</h3>
                            <img src={Pencil}></img>
                        </button>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
 }

 export default PerfilHTML;