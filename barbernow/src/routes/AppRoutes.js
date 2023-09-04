import { BrowserRouter, Route, Routes } from "react-router-dom"
import { Login } from "../pages/Login/Login"
import { Cadastro} from "../pages/Cadastro/Cadastro"


export function AppRoutes(){
    return(
        <BrowserRouter>
            <Routes> 
                <Route path = "/" element = {<Login/>}/>
                <Route path = "/cadastro" element = {<Cadastro/>}/>
            </Routes>
        
        </BrowserRouter>



        
    )

}