import '../style/Home.css';
import Footer from '../components/Footer(Home)';
import Functionalities  from '../components/Functionalities(Home)';
import UserReview from '../components/Usereview(Home)';
import Courses from '../components/Courses(Home)';
import Herosection from '../components/Herosection(Home)';
import Navbar from '../components/navbar';
import Results from '../components/Results(Home)';

/**
 * Page d'accueil de l'application
 * Important la page n'est pas termine , j'aurais aime ajoute autre chose ou ajouter plus d'animation mais vu le temps je ne peux plus 
 * la video youtube je l'ajouterai plus tard je suis en train de la realiser c'est pour mieux expliquer notre produit , 
 * les changements de couleur sont bienvenus ou si vous voyez que vous n'aimez pas qqch , changez juste a partir de home.css
 * Affiche les différentes sections : Navbar, Hero, Résultats, Cours, Avis des utilisateurs,
 * Fonctionnalités et Footer.
 * Les sections Courses, UserReview et Functionalities sont ciblables via des ancres pour le scroll.
 */
export default function Home() {
  return(
    <>
        {/* Barre de navigation */}
        <Navbar />

        {/* Section Hero avec message principal et vidéo */}
        <Herosection />

        {/* Section de statistiques clés */}
        <Results />

        {/* Section des cours disponibles */}
        <section id='courses'>
            <Courses />
        </section>

        {/* Section des avis utilisateurs */}
        <section id='user_review'>
            <UserReview />
        </section>

        {/* Section présentant les fonctionnalités */}
        <section id='functionalities'>
            <Functionalities />
        </section>

        {/* Pied de page */}
        <Footer />
    </>
  );
}
