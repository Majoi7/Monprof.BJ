import { BiSolidDoorOpen } from "react-icons/bi";
import { useNavigate } from 'react-router-dom';

export default function Herosection() {
  const navigate = useNavigate();

  // Fonction de navigation pour les boutons
  const goTo = (path) => navigate(path);

  return (
    <section className="hero_section magic-pattern">
      {/* Titre et description de la section */}
      <div className="hero_heading">
        <h1 className="fade-in-normal">
          Trouvez le prof parfait, où que vous soyez au Bénin
        </h1>
        <p className="fade-in-normal">
          Trouvez rapidement des enseignants qualifiés pour tous les niveaux et matières. Monprof.bj simplifie la recherche de cours particuliers, formations techniques et accompagnement scolaire, partout au Bénin.
        </p>
      </div>

      {/* Boutons d'action */}
      <div className="hero_buttons fade-in-normal">
        <button onClick={() => goTo('/signup')}>
          <BiSolidDoorOpen size="30px" />
          Créer votre compte
        </button>
        <button onClick={() => goTo('/login')}>
          Connectez-vous
        </button>
      </div>

      {/* Vidéo intégrée jE SUIS EN TRAIN DE LA CREEER C'EST POUR EXPLIQUER NOTRE PRODUIT BEAUCOUP PLUS FACILEMENT */}
      <iframe
        className="fade-in-normal"
        width="1000"
        height="600px"
        src="https://www.youtube.com/embed/4aIkMwUeL_Q"
        title="YouTube video player"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
      />
    </section>
  );
}
