import {
  doc,
  setDoc,
  getDoc,
  updateDoc,
  deleteDoc,
  getDocs,
  collection,
} from "firebase/firestore";
import { uploadImageAndGetURL } from "./firestoreService";
import { Barbearia } from "../entities/Barbearia";
import { db } from "../../firebase/firebaseConfig";
import { getMinMaxPrices } from "./ServicoService";

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
  if (!updateData || typeof updateData !== "object") {
    console.error("updateData is not valid:", updateData);
    return { success: false, message: "Update data is not valid." };
  }
  try {
    const docRef = doc(db, "barbearias", String(cnpj));

    await updateDoc(docRef, updateData);

    return { success: true, message: "Document successfully updated!" };
  } catch (e) {
    console.error("Error updating document: ", e);
    return { success: false, message: e.message };
  }
}

export async function deleteBarbearia(cnpj) {
  try {
    await deleteDoc(doc(db, "barbearias", cnpj));
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

export const orderByPriceMin = async (
  reverse = false,
  tipoServico,
  barbearias
) => {
  const cnpjs = barbearias.map((barbearia) => barbearia.cnpj);
  const prices = await getMinMaxPrices(cnpjs, tipoServico);

  // Atualiza as barbearias com os preços mínimos e máximos
  const updatedBarbearias = barbearias.map((barbearia) => ({
    ...barbearia,
    precoMin:
      prices[barbearia.cnpj]?.minPrice || (reverse ? Infinity : -Infinity),
    precoMax:
      prices[barbearia.cnpj]?.maxPrice || (reverse ? -Infinity : Infinity),
  }));

  // Ordena as barbearias com base nos preços mínimos e máximos
  return updatedBarbearias.sort((a, b) => {
    // Se ambas as barbearias não têm o serviço, coloca por último
    if (a.precoMin === Infinity && b.precoMin === Infinity) {
      return 0;
    } else if (a.precoMin === Infinity) {
      // Se a barbearia A não tem o serviço, coloca por último
      return 1;
    } else if (b.precoMin === Infinity) {
      // Se a barbearia B não tem o serviço, coloca por último
      return -1;
    } else {
      // Se ambas as barbearias têm o serviço, compara os preços
      return reverse ? b.precoMin - a.precoMin : a.precoMin - b.precoMin;
    }
  });
};
