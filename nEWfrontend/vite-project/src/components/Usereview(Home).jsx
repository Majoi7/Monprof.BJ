export default function UserReview() {
  const reviews = [
    {
      text: "Grâce à Monprof.bj, j'ai trouvé un excellent professeur de mathématiques pour ma fille en classe de 3ème. En quelques semaines, ses notes se sont améliorées et elle a retrouvé la motivation. La plateforme est simple à utiliser !",
      name: "Madame Gbedo",
      city: "Cotonou",
      avatar: "/assets/user.svg",
    },
    {
      text: "Je cherchais des cours d'anglais flexibles pour mon travail. Avec Monprof.bj, j'ai trouvé un prof disponible le soir et les weekends. Les cours en ligne sont pratiques et je progresse rapidement. Je recommande vivement !",
      name: "Naomi K. Johnson",
      city: "Porto-Novo",
      avatar: "/assets/user.svg",
    },
    {
      text: "En tant que professeur de physique-chimie, Monprof.bj m'a permis de donner des cours particuliers et d'augmenter mes revenus. L'inscription est simple, les paiements sont sécurisés et je gère mon emploi du temps plus librement!",
      name: "Professeur Kossou",
      city: "Parakou",
      avatar: "/assets/user.svg",
    },
  ];

  return (
    <section className="user_review">
      <div className="app_default_heading">
        <h2>Des résultats qui parlent d'eux-mêmes</h2>
        <p>Découvrez les expériences de nos utilisateurs notre produit</p>
      </div>

      <div className="review_cards">
        {reviews.map((review, index) => (
          <div className="user_card" key={index}>
            <p>{review.text}</p>
            <img src={review.avatar} alt="User avatar" />
            <div>
              <span>{review.name}</span>
              <span>{review.city}</span>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
