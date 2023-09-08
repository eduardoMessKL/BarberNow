import { getFirestore, doc, setDoc, getDoc, updateDoc, deleteDoc, collection, addDoc } from "firebase/firestore";
import app from "./firebase";

const db = getFirestore(app);


//funções CRUD Servico
export async function createServico(cnpj, servico) {
  try {
    await addDoc(collection(db, "barbearias", cnpj, "servicos"), servico);
  } catch (e) {
    console.error("Error adding document: ", e);
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
