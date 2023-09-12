// firestoreService.js

import { app } from "../../firebase/firebaseConfig";
import {
  addDoc,
  collection,
  doc,
  getFirestore,
  setDoc,
  getDocs,
  getDoc,
  query,
  where,
} from "firebase/firestore";
import { ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";
import { storage } from "../../firebase/firebaseConfig";

const db = getFirestore(app);

//checa se CNPJ ja existe no banco
export async function checkIfCnpjExists(cnpj) {
  const docRef = doc(db, "barbearias", cnpj);
  const docSnap = await getDoc(docRef);
  return docSnap.exists();
}
//checa se email ja existe no banco (firebase ja faz, nao precisaria, mas...)
export async function checkIfEmailExists(email) {
  const querySnapshot = await getDocs(
    query(collection(db, "barbearias"), where("email", "==", email))
  );
  return !querySnapshot.empty;
}

//função para mandar a imagem pro firestore e pegar a URL dela
export const uploadImageAndGetURL = async (cnpj, file) => {
  //imagem ficara localizada em barbearias/CNPJ-da-barbearia/imagem-da-barbearia
  const storageRef = ref(storage, "barbearias/" + cnpj + "/" + file.name);
  const uploadTask = uploadBytesResumable(storageRef, file); //nao sei como funciona (gpt4)

  //função inteira praa garantir que a imagem sera enviada para o storage
  return new Promise((resolve, reject) => {
    uploadTask.on(
      "state_changed",
      (snapshot) => {
        // Progress function ...
      },
      (error) => {
        // Handle unsuccessful uploads
        reject(error);
      },
      () => {
        // Handle successful uploads on complete
        getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
          //pega a URL da imagem (gpt4)
          resolve(downloadURL);
        });
      }
    );
  });
};

//adiciona a barbearia no banco
export const addBarbeariaToFirestore = async (userId, data) => {
  try {
    const barbeariasRef = collection(db, "barbearias");
    await setDoc(doc(barbeariasRef, userId), data);
  } catch (error) {
    console.error("Erro ao adicionar barbearia:", error);
  }
};

export const addServicoToFirestore = async (cnpj, data) => {
  try {
    const servicosRef = collection(db, "barbearias", cnpj, "servicos");
    await addDoc(servicosRef, data);
  } catch (error) {
    console.error("Erro ao adicionar serviço:", error);
  }
};

