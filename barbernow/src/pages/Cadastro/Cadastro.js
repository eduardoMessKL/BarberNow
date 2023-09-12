import React, { useState } from 'react';
import { useCreateUserWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { Link, useNavigate  } from 'react-router-dom';
import { auth } from '../../firebase/firebaseConfig';
import CadastroHTML from './CadastroHTML';
import './Cadastro.css';
import {
  checkIfCnpjExists,
  checkIfEmailExists,
} from '../../model/services/firestoreService';
import { createBarbearia } from '../../model/services/BarbeariaService';

export function Cadastro() {
  const [nome, setNome] = useState("");
  const [telefone, setTelefone] = useState("");
  const [cnpj, setCnpj] = useState("");
  const [endereco, setEndereco] = useState("");
  const [horario, setHorario] = useState("");
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");
  const [repetirSenha, setRepetirSenha] = useState("");
  const [imageFile, setImageFile] = useState(null);

  const [createUserWithEmailAndPassword, loading, error] =
    useCreateUserWithEmailAndPassword(auth);

  const navigate = useNavigate();  // Instância do useHistory

  async function handleSignUp(e) {
    e.preventDefault();

    const cnpjExists = await checkIfCnpjExists(cnpj);
    if (cnpjExists) {
      console.error("CNPJ já cadastrado.");
      return;
    }

    const emailExists = await checkIfEmailExists(email);
    if (emailExists) {
      console.error("E-mail já cadastrado.");
      return;
    }

    if (senha === repetirSenha) {
      createUserWithEmailAndPassword(email, senha)
        .then(async (userCredential) => {
          const barbeariaData = {
            nome: nome,
            telefone: telefone,
            cnpj: cnpj,
            endereco: endereco,
            horario: horario,
            email: email,
            senha: senha,
          };

          await createBarbearia(barbeariaData, imageFile);
          navigate(`/perfil/${cnpj}`);  // Redirecionando para a página de perfil do CNPJ registrado
        })
        .catch((error) => {
          console.error("Erro ao registrar usuário:", error);
        });
    } else {
      console.error("As senhas não coincidem.");
    }
  }

  if (error) {
    return (
      <div>
        <CadastroHTML
          setEmail={setEmail}
          setSenha={setSenha}
          setNome={setNome}
          setTelefone={setTelefone}
          setCnpj={setCnpj}
          setEndereco={setEndereco}
          setHorario={setHorario}
          setRepetirSenha={setRepetirSenha}
          setImageFile={setImageFile}
          handleSignUp={handleSignUp}
          SignInLink={() => <Link to="/login">Acesse sua conta aqui</Link>}
        />
        <div>
          <p>Error: {error.message}</p>
        </div>
      </div>
    );
  }

  if (loading) {
    return <p>carregando...</p>;
  }

  return (
    <CadastroHTML
      setEmail={setEmail}
      setSenha={setSenha}
      setNome={setNome}
      setTelefone={setTelefone}
      setCnpj={setCnpj}
      setEndereco={setEndereco}
      setHorario={setHorario}
      setRepetirSenha={setRepetirSenha}
      setImageFile={setImageFile}
      handleSignUp={handleSignUp}
      SignInLink={() => <Link to="/login">Acesse sua conta aqui</Link>}
    />
  );
}
