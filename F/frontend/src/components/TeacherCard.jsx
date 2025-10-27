export default function TeacherCard({ teacher }) {
  return (
    <div className="bg-white shadow-md rounded-xl overflow-hidden w-60 hover:scale-105 transition-transform">
      {/* Logo utilisateur plus petit */}
      <div className="h-32 w-full flex items-center justify-center bg-gray-100">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-16 w-16 text-gray-400" // <-- taille réduite
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth={2}
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M5.121 17.804A9 9 0 0112 15c2.485 0 4.746.999 6.364 2.634M15 11a3 3 0 11-6 0 3 3 0 016 0z"
          />
        </svg>
      </div>
      <div className="p-4">
        <h3 className="font-semibold text-lg">{teacher.name}</h3>
        <p className="text-gray-500 text-sm">{teacher.city} ({teacher.mode})</p>
        <p className="text-yellow-500 text-sm mt-1">⭐ {teacher.rating} ({teacher.reviews} avis)</p>
      </div>
    </div>
  );
}
