import { useSearchParams } from "react-router-dom";
import { useState } from "react";

export default function Register() {
  const [params] = useSearchParams();
  const role = params.get("role") || "student";
  const [form, setForm] = useState({
    name: "",
    email: "",
    password: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Inscription :", role, form);
    // 🧩 Plus tard : axios.post('http://127.0.0.1:8000/api/register', {...form, role})
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-b from-pink-100 to-white">
      <div className="bg-white w-full max-w-md p-8 rounded-3xl shadow-xl">
        <h2 className="text-3xl font-bold text-center mb-6 text-gray-800">
          {role === "teacher"
            ? "Inscription professeur"
            : "Inscription apprenant"}
        </h2>

        <form onSubmit={handleSubmit} className="space-y-4">
          <input
            type="text"
            placeholder="Nom complet"
            className="w-full border border-gray-300 rounded-xl p-3 focus:outline-none focus:ring-2 focus:ring-pink-400"
            onChange={(e) => setForm({ ...form, name: e.target.value })}
          />

          <input
            type="email"
            placeholder="Adresse email"
            className="w-full border border-gray-300 rounded-xl p-3 focus:outline-none focus:ring-2 focus:ring-pink-400"
            onChange={(e) => setForm({ ...form, email: e.target.value })}
          />

          <input
            type="password"
            placeholder="Mot de passe"
            className="w-full border border-gray-300 rounded-xl p-3 focus:outline-none focus:ring-2 focus:ring-pink-400"
            onChange={(e) => setForm({ ...form, password: e.target.value })}
          />

          {/* Champs supplémentaires selon le rôle */}
          {role === "teacher" && (
            <>
              <input
                type="text"
                placeholder="Matière enseignée"
                className="w-full border border-gray-300 rounded-xl p-3 focus:outline-none focus:ring-2 focus:ring-pink-400"
              />
              <input
                type="text"
                placeholder="Ville"
                className="w-full border border-gray-300 rounded-xl p-3 focus:outline-none focus:ring-2 focus:ring-pink-400"
              />
            </>
          )}

          {role === "student" && (
            <>
              <input
                type="text"
                placeholder="Niveau scolaire"
                className="w-full border border-gray-300 rounded-xl p-3 focus:outline-none focus:ring-2 focus:ring-pink-400"
              />
              <input
                type="text"
                placeholder="Matière recherchée"
                className="w-full border border-gray-300 rounded-xl p-3 focus:outline-none focus:ring-2 focus:ring-pink-400"
              />
            </>
          )}

          {/* Bouton principal */}
          <button
            type="submit"
            className="w-full bg-pink-500 text-white py-3 rounded-xl font-semibold hover:bg-pink-600 transition"
          >
            Créer mon compte
          </button>

          {/* OU Google */}
          <div className="text-center text-gray-500 mt-4">ou</div>

          <button
            type="button"
            onClick={() =>
              (window.location.href =
                "http://127.0.0.1:8000/api/auth/google/redirect")
            }
            className="w-full flex items-center justify-center gap-2 border border-gray-300 py-3 rounded-xl hover:bg-gray-50 transition"
          >
            <img
              src="https://www.svgrepo.com/show/475656/google-color.svg"
              alt="Google"
              className="w-5 h-5"
            />
            <span>Continuer avec Google</span>
          </button>
        </form>
      </div>
    </div>
  );
}
