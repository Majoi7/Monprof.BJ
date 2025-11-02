import { FiGithub } from "react-icons/fi";
import { AiOutlineYoutube } from "react-icons/ai";

export default function Footer() {
  // Données pour les sections répétitives
  const sections = [
    { title: "Produit", items: ["Fonctionnalités", "Comment ça marche ?", "FAQ"] },
    { title: "Legal", items: ["Politique de Confidentialité", "Conditions d'Utilisation"] },
  ];

  const socials = [
    { icon: <FiGithub size="30px" />, name: "Github" },
    { icon: <AiOutlineYoutube size="30px" />, name: "YouTube" },
  ];

  return (
    <footer>
      <div className="footer_container">

        {/* Bloc principal avec logo, description et sections */}
        <div className="footer_container1">

          <div className="app_details">
            <span className="app_logo">
              <img src="/assets/applogo.svg" alt="Application Logo" />
            </span>
            <span className="app_description">
              Votre partenaire de confiance pour un apprentissage de qualité au Bénin.
            </span>
          </div>

          {/* Sections dynamiques */}
          {sections.map((section, idx) => (
            <div key={idx} className={section.title === "Produit" ? "product_box" : "legal_mentions"}>
              <span>{section.title}</span>
              {section.items.map((item, i) => (
                <p key={i}>{item}</p>
              ))}
            </div>
          ))}

          {/* Réseaux sociaux */}
          <div className="socials">
            <span>Socials</span>
            <div>
              {socials.map((social, idx) => (
                <span key={idx}>{social.icon}</span>
              ))}
            </div>
          </div>

        </div>

        <div className="footer_container2"><hr /></div>

        <div className="footer_container3">
          <p className="right_reserved">
            &copy; 2025 MonProfbj. Tous droits réservés.
          </p>
        </div>

      </div>
    </footer>
  );
}
