import { create } from "zustand";
import {
  getAuth,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signOut
} from "firebase/auth";
import { auth } from "../../firebase";

const useAuthStore = create((set) => ({
  user: null,
  loading: true,

  loginWithEmailAndPassword: async (email, password) => {
    try {
      const userCredential = await signInWithEmailAndPassword(auth, email, password);
      set({ user: userCredential.user });
    } catch (error) {
      console.error("Error en login:", error);
      throw error;
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

export default useAuthStore;
