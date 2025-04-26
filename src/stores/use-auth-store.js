import { useState } from "react";
import { auth } from "../../firebase";
import { signInWithEmailAndPassword, signOut } from "firebase/auth";

export const useAuthStore = () => {
  const [user, setUser] = useState(null); // Guardar el usuario logueado
  const [error, setError] = useState(null); // Para errores de login
  const [loading, setLoading] = useState(false); // Para loading en login

  const login = async (email, password) => {
    setLoading(true);
    setError(null);

    try {
      const userCredential = await signInWithEmailAndPassword(auth, email, password);
      setUser(userCredential.user);
      console.log("Login exitoso");
    } catch (err) {
      console.error("Error de login:", err.message);
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  const logout = async () => {
    try {
      await signOut(auth);
      setUser(null);
      console.log("Cierre de sesión exitoso");
    } catch (err) {
      console.error("Error al cerrar sesión:", err.message);
      setError(err.message);
    }
  };

  return {
    user,
    error,
    loading,
    login,
    logout,
  };
};
