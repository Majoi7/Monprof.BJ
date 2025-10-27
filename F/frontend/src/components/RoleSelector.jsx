import React from "react";

export default function RoleSelector({ onSelectRole }) {
  return (
    <div className="text-center">
      <p className="text-gray-600 mb-4">Choisissez votre rôle :</p>
      <div className="flex flex-col gap-3">
        <button
          onClick={() => onSelectRole("apprenant")}
          className="border py-2 rounded-lg hover:bg-gray-50"
        >
          👨‍🎓 Je suis un apprenant
        </button>
        <button
          onClick={() => onSelectRole("prof")}
          className="border py-2 rounded-lg hover:bg-gray-50"
        >
          👨‍🏫 Je suis un professeur
        </button>
      </div>
    </div>
  );
}
