import {
  getFirestore,
  doc,
  setDoc,
  getDoc,
  updateDoc,
  deleteDoc,
  collection,
  addDoc,
  getDocs,
} from "firebase/firestore";
import { app } from "../../firebase/firebaseConfig";
import { uploadImageAndGetURL } from "./firestoreService";
import { Servico } from "../entities/Servico"; // Importe a classe Servico para criar instâncias

const db = getFirestore(app);

//funções CRUD Servico
export async function createServico(cnpj, servicoData, file) {
  try {
    // Se você quer que o Firestore gere o ID para você:
    const newDocRef = doc(collection(db, "barbearias", cnpj, "servicos"));
    servicoData.servicoID = newDocRef.id; // Aqui estamos pegando o ID gerado e usando-o em nossos dados.

    // Crie uma instância da classe Servico
    const servico = new Servico(
      servicoData.servicoID,
      servicoData.nome,
      servicoData.descricao,
      servicoData.preco,
      servicoData.duracao,
      servicoData.fotoURL,
      servicoData.tipo
    );

    // Adicione o tratamento para o upload da imagem
    if (file) {
      try {
        const imageURL = await uploadImageAndGetURL(
          `${cnpj}_${servicoData.servicoID}`,
          file
        );
        servico.fotoURL = imageURL;
      } catch (error) {
        console.error("Erro ao fazer upload da imagem:", error);
        return;
      }
    }

    // Aqui usamos setDoc() em vez de addDoc().
    await setDoc(newDocRef, servico.toObject());
  } catch (e) {
    console.error("Error adding document: ", e);
    throw e;
  }
}

export async function getServico(cnpj, servicoID) {
  try {
    const docRef = doc(db, "barbearias", cnpj, "servicos", servicoID);
    const docSnap = await getDoc(docRef);
    if (docSnap.exists()) {
      return docSnap.data();
    } else {
      console.log("No such document!");
    }
  } catch (e) {
    console.error("Error getting document: ", e);
  }
}

export async function updateServico(cnpj, servicoID, updateData) {
  try {
    const docRef = doc(db, "barbearias", cnpj, "servicos", servicoID);
    await updateDoc(docRef, updateData);
  } catch (e) {
    console.error("Error updating document: ", e);
  }
}

export async function deleteServico(cnpj, servicoID) {
  try {
    await deleteDoc(doc(db, "barbearias", cnpj, "servicos", servicoID));
  } catch (e) {
    console.error("Error deleting document: ", e);
  }
}

export async function getAllServicos(cnpj) {
  try {
    const querySnapshot = await getDocs(
      collection(db, "barbearias", cnpj, "servicos")
    );
    return querySnapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }));
  } catch (e) {
    console.error("Error fetching services: ", e);
  }
}

export const getServicosByBarbearia = async (cnpj) => {
  try {
      const servicosSnapshot = await getDocs(
        collection(db, "barbearias", cnpj, "servicos")
      );
      
      const servicos = [];
      servicosSnapshot.forEach(doc => {
          servicos.push({
              id: doc.id,
              ...doc.data()
          });
      });

      return servicos;
  } catch (error) {
      console.error("Erro ao buscar serviços: ", error);
      throw error;
  }
}
