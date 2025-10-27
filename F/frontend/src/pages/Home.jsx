import React, { useState } from "react";
import Navbar from "../Components/Navbar";
import SearchBar from "../Components/SearchBar";
import CategoryList from "../Components/CategoryList";
import TeacherCard from "../Components/TeacherCard";
import LoginModal from "../components/LoginModal";
import RegisterModal from "../components/RegisterModal";

export default function Home() {
  const [showLogin, setShowLogin] = useState(false);
  const [showRegister, setShowRegister] = useState(false);

 const teachers = [
  { name: "Adlane", city: "Villeurbanne", mode: "Face à face", rating: 4.8, reviews: 60 },
  { name: "Angelina", city: "Paris", mode: "En ligne", rating: 4.7, reviews: 45 },
  { name: "Florent", city: "Lyon", mode: "Présentiel", rating: 4.9, reviews: 80 },
];


  return (
    <div>
      <Navbar />

      {/* Bouton pour ouvrir Login */}
      <div className="flex justify-center py-4">
        <button
          onClick={() => setShowLogin(true)}
          className="px-6 py-3 bg-red-500 hover:bg-red-600 text-white rounded-full font-medium shadow-md"
        >
          Se connecter
        </button>
      </div>

      {showLogin && (
        <LoginModal
          onClose={() => setShowLogin(false)}
          onSwitchToRegister={() => {
            setShowLogin(false);
            setShowRegister(true);
          }}
        />
      )}

      {showRegister && (
        <RegisterModal
          onClose={() => setShowRegister(false)}
          onSwitchToLogin={() => {
            setShowRegister(false);
            setShowLogin(true);
          }}
        />
      )}

      <SearchBar />
      <CategoryList />

      <div className="max-w-6xl mx-auto py-10">
        <h2 className="text-xl font-semibold mb-6">
          25 millions de professeurs particuliers évalués ⭐⭐⭐⭐⭐
        </h2>
        <div className="flex flex-wrap gap-6 justify-center">
          {teachers.map((t, i) => (
            <TeacherCard key={i} teacher={t} />
          ))}
        </div>
      </div>
    </div>
  );
}
