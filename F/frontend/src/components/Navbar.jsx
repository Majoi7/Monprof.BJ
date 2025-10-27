import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <nav className="flex justify-between items-center px-8 py-4 bg-white shadow-sm">
      <Link to="/" className="text-2xl font-bold text-red-500">monprof</Link>

      <div className="flex items-center space-x-6">
        <Link to="/teach" className="text-gray-700 hover:text-red-500">Donner des cours</Link>
        <Link to="/login" className="text-gray-700 hover:text-red-500">Connexion</Link>
      </div>
    </nav>
  );
}
