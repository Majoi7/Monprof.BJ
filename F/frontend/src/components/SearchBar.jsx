export default function SearchBar() {
  return (
    <div className="flex flex-col items-center text-center py-12 bg-gradient-to-b from-pink-50 to-white">
      <h1 className="text-3xl md:text-4xl font-bold mb-2">Trouvez le professeur parfait</h1>
      <p className="text-gray-500 mb-6">Essayez "Maths", "Tennis", "Guitare"...</p>

      <div className="flex items-center bg-white shadow-md rounded-full overflow-hidden w-80 md:w-[500px]">
        <input
          type="text"
          placeholder='Ex: "Maths"'
          className="flex-grow px-4 py-3 outline-none"
        />
        <button className="bg-red-500 text-white px-6 py-3 font-semibold hover:bg-red-600 transition">
          Rechercher
        </button>
      </div>
    </div>
  );
}
