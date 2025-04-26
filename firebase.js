// src/firebase/firebase.js
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";

// Configuración de Firebase
const firebaseConfig = {
  apiKey: "AIzaSyDgyXQFyvrFwlCyOfk9CFTHNN4iqexieLQ",
  authDomain: "data-save-u.firebaseapp.com",
  projectId: "data-save-u",
  storageBucket: "data-save-u.appspot.com",
  messagingSenderId: "120170284775",
  appId: "1:120170284775:web:9e94b06687158e05bfc442"
};

// Inicializar Firebase
const app = initializeApp(firebaseConfig);

// Exportar Firestore y Auth
export const db = getFirestore(app);
export const auth = getAuth(app);

