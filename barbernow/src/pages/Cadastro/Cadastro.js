import { useState } from "react";
import { useCreateUserWithEmailAndPassword } from "react-firebase-hooks/auth";
import { Link } from "react-router-dom";
import { auth } from "../../firebase/firebaseConfig";
import "./styles.css";
import CadastroHTML from "./CadastroHTML";
//importando as funções do meu arquivo firestoreService (banco de dados do Firebase)
import {
  addBarbeariaToFirestore,
  checkIfCnpjExists,
  checkIfEmailExists,
  uploadImageAndGetURL,
} from "../../model/services/firestoreService";

export function Cadastro() {
  // Estados para os novos campos
  const [nome, setNome] = useState("");
  const [telefone, setTelefone] = useState("");
  const [cnpj, setCnpj] = useState("");
  const [endereco, setEndereco] = useState("");
  const [horario, setHorario] = useState("");
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");
  const [repetirSenha, setRepetirSenha] = useState("");
  const [image, setImage] = useState(null);

  //sem usar por enquanto
  //const [setLoading] = useState(false);
  //const [errorMessage, setErrorMessage] = useState("");

  const [createUserWithEmailAndPassword, user, loading, error] =
    useCreateUserWithEmailAndPassword(auth);

  //função inteira para criar usuario/barbearia e adicionar seus dados no banco
  async function handleSignUp(e) {
    e.preventDefault();

    //checa se CNPJ ja existe no banco
    const cnpjExists = await checkIfCnpjExists(cnpj);
    if (cnpjExists) {
      console.error("CNPJ já cadastrado.");
      return;
    }

    // Checa se email existe
    const emailExists = await checkIfEmailExists(email);
    if (emailExists) {
      console.error("E-mail já cadastrado.");
      return;
    }

    //função para adicionar imagem no Storage(recurso do firebase para adicionar imagens dos usuários)
    let fotoURL = "";
    if (image) {
      try {
        //chamo a função de enviar imagem e pegar URL dela, esta no arquivo firestoreService
        fotoURL = await uploadImageAndGetURL(cnpj, image);
      } catch (error) {
        console.error("Erro ao fazer upload da imagem:", error);
        return;
      }
    }

    //uma simples condição para criar o usuário (devemos colocar mais)
    if (senha === repetirSenha) {
      createUserWithEmailAndPassword(email, senha)
        .then((userCredential) => {
          const user = userCredential.user; //deve ser para usar as credencias do usuario criado, mas nao é usada(gpt4...)
          const barbeariaData = {
            nome: nome,
            telefone: telefone,
            cnpj: cnpj,
            endereco: endereco,
            horario: horario,
            email: email,
            fotoURL: fotoURL,
          };
          //depois de criar o usuario/barbearia, adiciona no banco
          addBarbeariaToFirestore(cnpj, barbeariaData); // CNPJ é usado como ID
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
          setImageFile={setImage}
          handleSignUp={handleSignUp}
          SignInLink={() => <Link to="/">Acesse sua conta aqui</Link>}
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
  /*if (createUserWithEmailAndPassword) {
    return (
      <div>
        <h1> Barbearia cadastrada com sucesso!!</h1>
      </div>
    );
  }*/
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
      setImageFile={setImage}
      handleSignUp={handleSignUp}
      SignInLink={() => <Link to="/login">Acesse sua conta aqui</Link>}
    />
  );
}
