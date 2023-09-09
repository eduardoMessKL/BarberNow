import { BrowserRouter, Route, Routes } from "react-router-dom"
import {Home} from "../pages/Home/Home"
import { Login } from "../pages/Login/Login"
import { Cadastro} from "../pages/Cadastro/Cadastro"
import {Perfil} from "../pages/Perfil/perfil"


export function AppRoutes(){
    return(
        <BrowserRouter>
            <Routes> 
                <Route path = "/" element = {<Home/>}/>
                <Route path = "/login" element = {<Login/>}/>
                <Route path = "/cadastro" element = {<Cadastro/>}/>
                <Route path = "/perfil" element = {<Perfil/>}/>
            </Routes>
        
        </BrowserRouter>


    )

}