import React, { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

export default function Dashboard() {
  const [user, setUser] = useState(null);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const token = localStorage.getItem("token");

    if (!token) {
      // pas de token, redirection vers login
      navigate("/login");
      return;
    }

    axios
      .get("http://127.0.0.1:8000/api/me", {
        headers: { Authorization: `Bearer ${token}` },
      })
      .then((res) => setUser(res.data))
      .catch(() => {
        // token invalide ou expiré
        localStorage.removeItem("token");
        navigate("/login");
      });
  }, [navigate]);

  const handleLogout = () => {
    localStorage.removeItem("token");
    navigate("/login");
  };

  if (!user) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-50">
        Chargement...
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-100">
      {/* Header */}
      <header className="bg-white shadow flex justify-between items-center px-6 py-4">
        <h1 className="text-2xl font-bold text-gray-800">Mon Dashboard</h1>

        <div className="relative">
          <button
            onClick={() => setDropdownOpen(!dropdownOpen)}
            className="flex items-center space-x-2 bg-gray-200 px-4 py-2 rounded-full hover:bg-gray-300"
          >
            <img
              src="https://i.pravatar.cc/40"
              alt="avatar"
              className="w-8 h-8 rounded-full"
            />
            <span>{user.name}</span>
          </button>

          {dropdownOpen && (
            <div className="absolute right-0 mt-2 w-48 bg-white shadow-lg rounded-md py-2 z-50">
              <button
                onClick={handleLogout}
                className="block w-full text-left px-4 py-2 text-gray-700 hover:bg-gray-100"
              >
                Déconnexion
              </button>
            </div>
          )}
        </div>
      </header>

      {/* Contenu du dashboard */}
      <main className="p-6">
        <h2 className="text-xl font-semibold mb-4">
          Bienvenue sur ton espace, {user.name} !
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <div className="bg-white p-4 rounded-lg shadow">Option 1</div>
          <div className="bg-white p-4 rounded-lg shadow">Option 2</div>
          <div className="bg-white p-4 rounded-lg shadow">Option 3</div>
        </div>
      </main>
    </div>
  );
}
