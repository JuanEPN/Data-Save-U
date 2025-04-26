import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore"; // Si quieres Firestore

const firebaseConfig = {
    apiKey: "AIzaSyDgyXQFyvrFwlCyOfk9CFTHNN4iqexieLQ",
    authDomain: "data-save-u.firebaseapp.com",
    projectId: "data-save-u",
    storageBucket: "data-save-u.firebasestorage.app",
    messagingSenderId: "120170284775",
    appId: "1:120170284775:web:9e94b06687158e05bfc442"
  };

// Inicializa la app de Firebase
const app = initializeApp(firebaseConfig);

// Exporta Firestore (o lo que necesites)
export const db = getFirestore(app);