import { RiLoginCircleFill } from "react-icons/ri";
import { useNavigate } from 'react-router-dom';//Pour la navigation utilise avec des boutons

export default function Navbar() {
    const navigate = useNavigate(); // Hook pour naviguer programmatique dans l'app

    // Fonction pour défiler doucement vers une section spécifique de la page
    const scrollToSection = (sectionId) => {
        const element = document.getElementById(sectionId);
        if (element) {
            element.scrollIntoView({ 
                behavior: 'smooth', // animation fluide
                block: 'start'      // alignement en haut de la section
            });
        }
    };

    return (
        <header>
            <nav>
                {/* Logo de l'application */}
                <span className="app_logo">
                    <img src="/assets/applogo.svg" alt="Application Logo" />
                </span>

                {/* Liens de navigation internes */}
                <div className="navbar_items">
                    <span onClick={() => scrollToSection('functionalities')}>
                        Fonctionnalités
                    </span>
                    <span onClick={() => scrollToSection('user_review')}>
                        Revues
                    </span>
                    <span onClick={() => scrollToSection('courses')}>
                        Nos cours
                    </span>
                </div>

                {/* Bouton de connexion */}
                <span className="login_button">
                    <button onClick={() => navigate('/login')}>
                        <RiLoginCircleFill size="20px" /> Connexion
                    </button>
                </span>
            </nav>
        </header>
    );
}
