export default function Header({ userName }) {
  return (
    <div className="flex justify-between items-center p-6 bg-white shadow-md rounded-b-xl">
      <h2 className="text-2xl font-bold">Bonjour, {userName} 👋</h2>
      <div className="flex items-center gap-4">
        <button className="relative">
          🔔
          <span className="absolute -top-1 -right-1 bg-red-500 rounded-full w-3 h-3"></span>
        </button>
        <div className="w-10 h-10 rounded-full bg-gray-300 flex items-center justify-center">
          👤
        </div>
      </div>
    </div>
  );
}
