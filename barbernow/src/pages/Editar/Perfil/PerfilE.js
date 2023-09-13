import React, { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import PerfilEHTML from "./PerfilEHTML";
import "./PerfilE.css";
import { getBarbearia, updateBarbearia } from "../../../model/services/BarbeariaService"; // Substitua isso pela sua importação real

export function PerfilE(){
    const [barbearia, setBarbearia] = useState({});
    const [formValues, setFormValues] = useState({});
    const params = useParams();
    const cnpj = params.cnpj;

    useEffect(() => {

        getBarbearia(cnpj).then(data => {
            setBarbearia(data);
            setFormValues(data); 
        });
    }, []);

    const handleChange = (field, value) => {
        setFormValues(prev => ({
            ...prev,
            [field]: value
        }));
    };

    const handleUpdate = () => {
        updateBarbearia(cnpj, formValues).then(() => {
            alert("Perfil atualizado com sucesso!");
        }).catch(err => {
            alert("Erro ao atualizar perfil: " + err.message);
        });
    };

    return (
        <div className="html-login">
            <PerfilEHTML
                barbearia={formValues}
                handleChange={handleChange}
                handleUpdate={handleUpdate}
            />
        </div>
    );
}

