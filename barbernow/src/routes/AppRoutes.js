import { BrowserRouter, Route, Routes } from "react-router-dom"
import { Login } from "../pages/Login/Login"
import { Cadastro} from "../pages/Cadastro/Cadastro"
import { Erro } from "../pages/Erro/Erro"
import { Home } from "../pages/Home/Home"

import { Perfil } from "../pages/Perfil/Perfil"
import { PerfilE } from "../pages/Editar/Perfil/PerfilE"

import { Servicos } from "../pages/Serviços/Servicos"
import { AddServicos} from "../pages/Adicionar/Serviço/AddServicos"
import { ServicosE } from "../pages/Editar/Serviço/ServicosE"
import { ServicosC} from "../pages/Consultar/ServicosC"

import { Senha } from "../pages/Senha/Senha"
 
export function AppRoutes(){
    return(
        <BrowserRouter>
            <Routes> 
                <Route path = "/" element = {<Home/>}/>
                <Route path = '/login' element = {<Login/>}/>
                <Route path = "/cadastro" element = {<Cadastro/>}/>
                <Route path = "/erro" element = {<Erro/>}/>

                <Route path="/perfil/:cnpj" element={<Perfil />} />
                <Route path = "/editar-perfil" element = {<PerfilE/>}/>

                <Route path="/servicos/:cnpj" element={ServicosC} />
                <Route path = "/add-servico" element = {<AddServicos/>}/>
                <Route path = "/editar-servico" element = {<ServicosE/>}/>
                <Route path = "/consultar-servico" element = {<ServicosC/>}/>

                <Route path ="/senha" element = {<Senha/>}/>
            </Routes>     
        </BrowserRouter>     
    );
}