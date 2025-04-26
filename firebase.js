import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore"; // Si quieres Firestore
import { getAuth } from "firebase/auth"; // 👈 Agrega esto

const firebaseConfig = {
  apiKey: "AIzaSyDgyXQFyvrFwlCyOfk9CFTHNN4iqexieLQ",
  authDomain: "data-save-u.firebaseapp.com",
  projectId: "data-save-u",
  storageBucket: "data-save-u.appspot.com", // OJO: aquí tenías un error, falta ".appspot.com"
  messagingSenderId: "120170284775",
  appId: "1:120170284775:web:9e94b06687158e05bfc442"
};

// Inicializa la app de Firebase
const app = initializeApp(firebaseConfig);

// Exporta Firestore y Auth
export const db = getFirestore(app);
export const auth = getAuth(app); // 👈 Agrega esto
