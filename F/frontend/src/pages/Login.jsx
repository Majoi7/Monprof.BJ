import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";

export default function Login() {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(
        "http://127.0.0.1:8000/api/login",
        { email, password },
        { withCredentials: true }
      );

      // Stocke les infos de l'utilisateur
      localStorage.setItem("user", JSON.stringify(response.data.user));

      // Redirection vers le dashboard
      navigate("/dashboard");
    } catch (err) {
      console.error(err);
      alert("Erreur de connexion");
    }
  };

  const handleGoogleLogin = () => {
    window.location.href = "http://127.0.0.1:8000/auth/google";
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-50">
      <div className="bg-white p-8 rounded-2xl shadow-md w-96">
        {/* Logo cliquable */}
        <div className="flex justify-center mb-6">
          <Link to="/">
            <img src="/logo.png" alt="MonProf" className="w-24 h-24 object-contain cursor-pointer" />
          </Link>
        </div>

        <h2 className="text-2xl font-bold mb-6 text-center">Connexion</h2>

        <form onSubmit={handleLogin}>
          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full mb-4 border rounded-lg p-3"
            required
          />
          <input
            type="password"
            placeholder="Mot de passe"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="w-full mb-4 border rounded-lg p-3"
            required
          />
          <button type="submit" className="w-full bg-red-500 text-white py-3 rounded-lg hover:bg-red-600">
            Se connecter
          </button>
        </form>

        <div className="mt-6 text-center">
          <button
            onClick={handleGoogleLogin}
            className="w-full flex items-center justify-center border py-3 rounded-lg hover:bg-gray-100"
          >
            <img src="https://www.svgrepo.com/show/475656/google-color.svg" alt="Google" className="w-5 h-5 mr-2" />
            Continuer avec Google
          </button>
        </div>
      </div>
    </div>
  );
}
