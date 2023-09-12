import {
  getFirestore,
  doc,
  setDoc,
  getDoc,
  updateDoc,
  deleteDoc,
  query,
  where,
  getDocs,
  collection,
} from "firebase/firestore";
import { app } from "../../firebase/firebaseConfig";
import { uploadImageAndGetURL } from "./firestoreService";
import { Barbearia } from "../entities/Barbearia";
import { db } from "../../firebase/firebaseConfig";

const database = getFirestore(app);

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
    await setDoc(
      doc(database, "barbearias", barbearia.cnpj),
      barbearia.toObject()
    );
  } catch (e) {
    console.error("Error adding document: ", e);
    throw e; // Rejeita a promessa para que você possa capturar esse erro mais tarde
  }
}

export async function getBarbearia(cnpj) {
  try {
    const docRef = doc(database, "barbearias", cnpj);
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
    const docRef = doc(database, "barbearias", cnpj);
    await updateDoc(docRef, updateData);
  } catch (e) {
    console.error("Error updating document: ", e);
  }
}

export async function deleteBarbearia(cnpj) {
  try {
    await deleteDoc(doc(database, "barbearias", cnpj));
  } catch (e) {
    console.error("Error deleting document: ", e);
  }
}

export async function getAllBarbearias() {
  try {
    const querySnapshot = await getDocs(collection(db, "barbearias"));
    return querySnapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }));
  } catch (e) {
    console.error("Error fetching barbearias: ", e);
  }
}

export const orderByName = async (reverse = false) => {
  let barbearias = await getAllBarbearias();
  return barbearias.sort((a, b) => {
    if (!reverse) {
      return a.nome.localeCompare(b.nome);
    } else {
      return b.nome.localeCompare(a.nome);
    }
  });
};

export const orderByPriceMax = async (reverse = false) => {
  let barbearias = await getAllBarbearias();
  return barbearias.sort((a, b) => {
    if (!reverse) {
      return parseFloat(a.precoMax) - parseFloat(b.precoMax);
    } else {
      return parseFloat(b.precoMax) - parseFloat(a.precoMax);
    }
  });
};
