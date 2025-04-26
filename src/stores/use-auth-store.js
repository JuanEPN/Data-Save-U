import { create } from "zustand";
import { 
  signInWithEmailAndPassword, 
  onAuthStateChanged, 
  signOut 
} from "firebase/auth";

import { auth } from "/src/firebase/firebase-config"; // Ajusta bien esta ruta si lo necesitas

export const useAuthStore = create((set) => ({
  user: null,
  loading: true,

  loginWithEmailAndPassword: async (email, password) => {
    try {
      await signInWithEmailAndPassword(auth, email, password);
    } catch (error) {
      console.error("Error en login:", error);
    }
  },

  logout: async () => {
    try {
      await signOut(auth);
      set({ user: null });
    } catch (error) {
      console.error("Error en logout:", error);
    }
  },

  observeAuthState: () => {
    set({ loading: true });
    onAuthStateChanged(auth, (user) => {
      if (user) {
        set({ user, loading: false });
      } else {
        set({ user: null, loading: false });
      }
    });
  },
}));
