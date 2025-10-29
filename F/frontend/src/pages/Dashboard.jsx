import StatsCard from "../components/StatsCard";
import CourseCard from "../components/CourseCard";

export default function Dashboard() {
  return (
    <div>
      <h1 className="text-3xl font-bold mb-6">👋 Bienvenue, Jean !</h1>

      {/* Stats */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
        <StatsCard title="Cours suivis" value="3" icon="📘" />
        <StatsCard title="Professeurs contactés" value="2" icon="🧑‍🏫" />
        <StatsCard title="Total payé" value="15 000 XOF" icon="💳" />
        <StatsCard title="Heures d’apprentissage" value="8 h" icon="⌛" />
      </div>

      {/* Prochains cours */}
      <h2 className="text-2xl font-semibold mb-4">📅 Prochains cours</h2>
      <div className="grid gap-4">
        <CourseCard professor="M. Koffi" subject="Maths" date="29/10" status="🕓 En attente" />
        <CourseCard professor="Mme Sarah" subject="Anglais" date="30/10" status="✅ Confirmé" />
      </div>
    </div>
  );
}
