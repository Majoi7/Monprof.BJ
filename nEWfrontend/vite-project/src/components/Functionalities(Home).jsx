export default function Functionalities() {
  // Liste des fonctionnalités avec image, titre et description
  const functionalities = [
    {
      img: "/assets/functionality-image1.svg",
      title: "Profils complets et vérifiés",
      desc: "Consultez les profils détaillés de chaque enseignant : matières enseignées, tarifs, expérience, qualifications",
    },
    {
      img: "/assets/func2.svg",
      title: "Profils complets et vérifiés",
      desc: "Consultez les profils détaillés de chaque enseignant : matières enseignées, tarifs, expérience, qualifications",
    },
    {
      img: "/assets/func3.svg",
      title: "Profils complets et vérifiés",
      desc: "Consultez les profils détaillés de chaque enseignant : matières enseignées, tarifs, expérience, qualifications",
    },
    {
      img: "/assets/func4.svg",
      title: "Profils complets et vérifiés",
      desc: "Consultez les profils détaillés de chaque enseignant : matières enseignées, tarifs, expérience, qualifications",
    },
    {
      img: "/assets/func5.svg",
      title: "Profils complets et vérifiés",
      desc: "Consultez les profils détaillés de chaque enseignant : matières enseignées, tarifs, expérience, qualifications",
    },
    {
      img: "/assets/func6.svg",
      title: "Profils complets et vérifiés",
      desc: "Consultez les profils détaillés de chaque enseignant : matières enseignées, tarifs, expérience, qualifications",
    },
  ];

  return (
    <section className="app_functionalities">
      <div className="app_default_heading">
        <h2>Des fonctionnalités pensées pour vous</h2>
        <p>
          Une plateforme complète qui simplifie la mise en relation entre enseignants et apprenants, avec un système de paiement sécurisé et un suivi personnalisé
        </p>
      </div>

      <div className="functionalities_card">
        {functionalities.map((func, idx) => (
          <div key={idx} className="functionality_card">
            <img src={func.img} alt={`Functionality ${idx + 1}`} />
            <div>
              <span>{func.title}</span>
              <p>{func.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
