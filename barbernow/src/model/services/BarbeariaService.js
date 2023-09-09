import {
  getFirestore,
  doc,
  setDoc,
  getDoc,
  updateDoc,
  deleteDoc,
} from "firebase/firestore";
import { app } from "../../firebase/firebaseConfig";
import { uploadImageAndGetURL } from "./firestoreService";
import { Barbearia } from "../entities/Barbearia";

const db = getFirestore(app);

//funções CRUD Barbearia
export async function createBarbearia(barbeariaData, file) {
  try {
    const barbearia = new Barbearia(
      barbeariaData.cnpj,
      barbeariaData.nome,
      barbeariaData.telefone,
      barbeariaData.email,
      barbeariaData.senha,
      barbeariaData.endereco,
      barbeariaData.horario,
      barbeariaData.email
    );
    //função para adicionar imagem no Storage(recurso do firebase para adicionar imagens dos usuários)
    if (file) {
      try {
        const imageURL = await uploadImageAndGetURL(barbearia.cnpj, file);
        barbearia.fotoURL = imageURL;
      } catch (error) {
        console.error("Erro ao fazer upload da imagem:", error);
        return;
      }
    }
    await setDoc(doc(db, "barbearias", barbearia.cnpj), barbearia.toObject());
  } catch (e) {
    console.error("Error adding document: ", e);
    throw e; // Rejeita a promessa para que você possa capturar esse erro mais tarde
  }
}

export async function getBarbearia(cnpj) {
  try {
    const docRef = doc(db, "barbearias", cnpj);
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

export async function updateBarbearia(cnpj, updateData) {
  try {
    const docRef = doc(db, "barbearias", cnpj);
    await updateDoc(docRef, updateData);
  } catch (e) {
    console.error("Error updating document: ", e);
  }
}

export async function deleteBarbearia(cnpj) {
  try {
    await deleteDoc(doc(db, "barbearias", cnpj));
  } catch (e) {
    console.error("Error deleting document: ", e);
  }
}
