import { NavLink } from "react-router-dom";
import {
  HomeIcon,
  UserGroupIcon,
  CreditCardIcon,
  ChatBubbleLeftRightIcon,
  ClipboardDocumentListIcon,
  StarIcon,
  Cog6ToothIcon,
  ArrowRightOnRectangleIcon
} from "@heroicons/react/24/outline";

export default function Sidebar() {
  const links = [
    { name: "Dashboard", to: "/dashboard", icon: <HomeIcon className="h-5 w-5" /> },
    { name: "Professeurs", to: "/professors", icon: <UserGroupIcon className="h-5 w-5" /> },
    { name: "Paiements", to: "/payments", icon: <CreditCardIcon className="h-5 w-5" /> },
    { name: "Messages", to: "/messages", icon: <ChatBubbleLeftRightIcon className="h-5 w-5" /> },
    { name: "Cours", to: "/courses", icon: <ClipboardDocumentListIcon className="h-5 w-5" /> },
    { name: "Évaluations", to: "/ratings", icon: <StarIcon className="h-5 w-5" /> },
    { name: "Paramètres", to: "/settings", icon: <Cog6ToothIcon className="h-5 w-5" /> },
    { name: "Déconnexion", to: "/logout", icon: <ArrowRightOnRectangleIcon className="h-5 w-5" /> },
  ];

  return (
    <div className="w-64 bg-white shadow-lg flex flex-col p-6 min-h-screen border-r border-gray-100">
      <div className="text-2xl font-extrabold mb-8 text-blue-600 tracking-tight">
        MonProf<span className="text-gray-900">.bj</span>
      </div>

      <nav className="flex flex-col space-y-2">
        {links.map((link) => (
          <NavLink
            key={link.name}
            to={link.to}
            className={({ isActive }) =>
              `flex items-center gap-3 p-3 rounded-lg transition-colors duration-200 ${
                isActive
                  ? "bg-blue-100 text-blue-700 font-semibold"
                  : "text-gray-700 hover:bg-gray-100 hover:text-blue-600"
              }`
            }
          >
            {link.icon}
            <span>{link.name}</span>
          </NavLink>
        ))}
      </nav>
    </div>
  );
}
