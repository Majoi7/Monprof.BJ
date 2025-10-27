const categories = [
  "Maths", "Anglais", "Coach sportif", "Français",
  "Piano", "Soutien scolaire", "Chant", "Guitare"
];

export default function CategoryList() {
  return (
    <div className="flex flex-wrap justify-center gap-4 py-6">
      {categories.map((cat, i) => (
        <button
          key={i}
          className="px-4 py-2 bg-gray-100 rounded-full hover:bg-red-50 text-gray-700"
        >
          {cat}
        </button>
      ))}
    </div>
  );
}
