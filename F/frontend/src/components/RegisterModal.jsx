import { useState } from "react";
import api from "../api";

export default function RegisterModal({ onClose, onSwitchToLogin }) {
  const [form, setForm] = useState({
    name: "",
    email: "",
    password: "",
  });
  const [role, setRole] = useState(""); // "prof" ou "apprenant"

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await api.post("/register", { ...form, role });
      alert("Inscription réussie !");
      onSwitchToLogin();
    } catch (err) {
      console.error(err);
      alert("Erreur d'inscription");
    }
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-40 flex justify-center items-center z-50">
      <div className="bg-white rounded-2xl p-6 w-[400px] shadow-lg relative">
        <button
          className="absolute top-3 right-4 text-gray-500 hover:text-gray-700"
          onClick={onClose}
        >
          ✕
        </button>
        <h2 className="text-2xl font-bold mb-4 text-center">
          Créer un compte
        </h2>

        <form onSubmit={handleSubmit} className="flex flex-col gap-3">
          <input
            type="text"
            placeholder="Nom complet"
            className="border rounded-lg px-3 py-2"
            value={form.name}
            onChange={(e) => setForm({ ...form, name: e.target.value })}
            required
          />
          <input
            type="email"
            placeholder="Email"
            className="border rounded-lg px-3 py-2"
            value={form.email}
            onChange={(e) => setForm({ ...form, email: e.target.value })}
            required
          />
          <input
            type="password"
            placeholder="Mot de passe"
            className="border rounded-lg px-3 py-2"
            value={form.password}
            onChange={(e) => setForm({ ...form, password: e.target.value })}
            required
          />

          <div className="flex gap-2 justify-center mt-3">
            <button
              type="button"
              onClick={() => setRole("apprenant")}
              className={`px-4 py-2 rounded-lg border ${
                role === "apprenant"
                  ? "bg-blue-600 text-white"
                  : "bg-gray-100 text-gray-700"
              }`}
            >
              Apprenant
            </button>
            <button
              type="button"
              onClick={() => setRole("prof")}
              className={`px-4 py-2 rounded-lg border ${
                role === "prof"
                  ? "bg-blue-600 text-white"
                  : "bg-gray-100 text-gray-700"
              }`}
            >
              Professeur
            </button>
          </div>

          <button
            type="submit"
            className="bg-blue-600 text-white rounded-lg py-2 mt-4 hover:bg-blue-700"
          >
            S’inscrire
          </button>
        </form>

        <p className="text-sm text-center mt-4">
          Déjà un compte ?{" "}
          <button
            onClick={onSwitchToLogin}
            className="text-blue-600 hover:underline"
          >
            Se connecter
          </button>
        </p>
      </div>
    </div>
  );
}
