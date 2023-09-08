import {
  getFirestore,
  doc,
  setDoc,
  getDoc,
  updateDoc,
  deleteDoc,
} from "firebase/firestore";
import app from "./firebase";

const db = getFirestore(app);

//funções CRUD Barbearia
export async function createBarbearia(barbearia) {
  try {
    await setDoc(doc(db, "barbearias", barbearia.cnpj), barbearia);
  } catch (e) {
    console.error("Error adding document: ", e);
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
