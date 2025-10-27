import api from "../api";
import React, { useState } from "react";

export default function LoginModal({ onClose, onSwitchToRegister }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const res = await api.post("/login", { email, password });
      localStorage.setItem("token", res.data.token);
      alert("Connexion réussie !");
      onClose();
      // Rediriger vers dashboard
      window.location.href = "/dashboard";
    } catch (err) {
      alert("Erreur de connexion !");
      console.error(err);
    }
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-40 flex justify-center items-center z-50">
      <div className="bg-white rounded-2xl shadow-lg p-6 w-96">
        <button onClick={onClose} className="text-gray-400 float-right">✕</button>
        <h2 className="text-center text-xl font-bold mb-6">Connectez-vous</h2>

        <form onSubmit={handleLogin}>
          <input
            type="email"
            placeholder="Adresse email"
            className="w-full border rounded-lg px-3 py-2 mb-3"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <input
            type="password"
            placeholder="Mot de passe"
            className="w-full border rounded-lg px-3 py-2 mb-3"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <button className="w-full bg-red-500 hover:bg-red-600 text-white py-2 rounded-lg">
            Connexion
          </button>
        </form>

        <p className="text-center text-gray-500 text-sm mt-4">
          Vous n'avez pas de compte ?{" "}
          <button
            onClick={onSwitchToRegister}
            className="text-red-500 hover:underline"
          >
            Inscrivez-vous
          </button>
        </p>
      </div>
    </div>
  );
}
