import { MdKeyboardArrowRight } from "react-icons/md";
import { BiMath, BiWorld } from "react-icons/bi";
import { SlChemistry } from "react-icons/sl";
import { RiEnglishInput } from "react-icons/ri";
import { MdOutlineBiotech } from "react-icons/md";
import { TiImageOutline } from "react-icons/ti";
import { FaLanguage } from "react-icons/fa";

export default function Courses() {
    // Tableau des cours avec icône, nom et nombre de professeurs
    const courses = [
        { icon: <BiMath size="20px" />, name: "Mathématiques", teachers: 200 },
        { icon: <SlChemistry size="20px" />, name: "Physique et Chimie", teachers: 200 },
        { icon: <RiEnglishInput size="20px" />, name: "Anglais", teachers: 200 },
        { icon: <MdOutlineBiotech size="20px" />, name: "SVT", teachers: 200 },
        { icon: <TiImageOutline size="20px" />, name: "Géographie", teachers: 200 },
        { icon: <FaLanguage size="25px" />, name: "Français", teachers: 200 },
        { icon: <BiWorld size="20px" />, name: "Philosophie", teachers: 200 },
        { icon: <BiMath size="20px" />, name: "Mathématiques", teachers: 200 },
        { icon: <BiMath size="20px" />, name: "Mathématiques", teachers: 200 },
    ];

    return (
        <section className="course_offered">
            {/* Titre et description */}
            <div className="app_default_heading">
                <h2 className="fade-in-normal">
                    Des cours pour tous les besoins
                </h2>
                <p>
                    Nos enseignants qualifiés couvrent une large gamme de matières et compétences.
                    Du primaire au supérieur, des langues aux métiers techniques, trouvez le cours
                    qui vous correspond.
                </p>
            </div>

            {/* Carte des cours */}
            <div className="courses_card">
                {courses.map((course, index) => (
                    <div className="course_card" key={index}>
                        <div className="course_card1">
                            <span>{course.icon} {course.name}</span>
                            <span>{course.teachers} professeurs disponibles</span>
                        </div>
                        <div className="course_card2">
                            <MdKeyboardArrowRight size="40px" />
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
}
