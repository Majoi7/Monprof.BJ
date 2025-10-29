export default function Courses({ date, prof, subject, status }) {
  const statusColor = {
    "En attente": "text-yellow-500",
    "Terminé": "text-green-500",
    "Annulé": "text-red-500",
  }[status] || "text-gray-500";

  return (
    <tr className="border-b hover:bg-gray-50">
      <td className="p-3">{date}</td>
      <td className="p-3">{prof}</td>
      <td className="p-3">{subject}</td>
      <td className={`p-3 font-semibold ${statusColor}`}>{status}</td>
      <td className="p-3">
        <button className="bg-blue-500 text-white px-3 py-1 rounded hover:bg-blue-600 transition">
          Action
        </button>
      </td>
    </tr>
  );
}
