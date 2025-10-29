export default function StatsCard({ title, value, icon }) {
  return (
    <div className="bg-white shadow p-4 rounded-lg flex items-center gap-4 hover:shadow-md transition">
      <div className="text-3xl">{icon}</div>
      <div>
        <div className="text-gray-500">{title}</div>
        <div className="font-bold text-xl">{value}</div>
      </div>
    </div>
  );
}
