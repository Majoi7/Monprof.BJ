export default function Results() {
  // Données des statistiques clés de la plateforme
  const stats = [
    { value: "+1 000 ", label: "Enseignants expérimentés" },
    { value: "+3 000 ", label: "Revues d'enseignants 5 étoiles" },
    { value: "+120", label: "Sujets enseignés" },
    { value: "+180", label: "Villes du pays" },
  ];

  return (
    <section className="app_results">
      {/* Carte de résultats affichant chaque statistique */}
      {stats.map((stat, index) => (
        <div className="result_card" key={index}>
          <span>{stat.value}</span>
          <span>{stat.label}</span>
        </div>
      ))}
    </section>
  );
}
