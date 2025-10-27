import { useNavigate } from "react-router-dom";

export default function ChooseRole() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-b from-pink-100 to-white">
      <h1 className="text-4xl font-bold text-gray-800 mb-6">
        Créez votre compte
      </h1>
      <p className="text-gray-600 mb-10 text-center">
        Choisissez votre rôle pour commencer l'aventure 🌟
      </p>

      <div className="flex flex-col md:flex-row gap-8">
        {/* PROFESSEUR */}
        <div
          onClick={() => navigate("/register?role=teacher")}
          className="cursor-pointer bg-white border-2 border-pink-300 hover:border-pink-400 transition rounded-3xl shadow-md hover:shadow-lg w-80 p-8 flex flex-col items-center"
        >
          <span className="text-6xl mb-4">👨‍🏫</span>
          <h2 className="text-xl font-semibold text-gray-800 mb-2">
            Je suis professeur
          </h2>
          <p className="text-sm text-gray-500 text-center">
            Donnez des cours et partagez votre savoir à vos futurs élèves.
          </p>
        </div>

        {/* APPRENANT */}
        <div
          onClick={() => navigate("/register?role=student")}
          className="cursor-pointer bg-white border-2 border-blue-300 hover:border-blue-400 transition rounded-3xl shadow-md hover:shadow-lg w-80 p-8 flex flex-col items-center"
        >
          <span className="text-6xl mb-4">🧑‍🎓</span>
          <h2 className="text-xl font-semibold text-gray-800 mb-2">
            Je suis apprenant
          </h2>
          <p className="text-sm text-gray-500 text-center">
            Trouvez le professeur parfait pour apprendre rapidement et bien.
          </p>
        </div>
      </div>
    </div>
  );
}
