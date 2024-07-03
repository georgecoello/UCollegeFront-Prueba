import {FondoA} from "../../components/App/FondoAdmission"
import './FirstAdmission.css'
import Card from "../../components/App/cardAdmission"
import ImageCard from "../../components/App/ImagesCard";

export default function Admission(){
    return (
        <>
            <FondoA>
                <h1 className="title">Admisiones</h1>
                <div className="card-container">
                    <Card name="Inscripción" imageUrl="inscription.png" />
                    <Card name="Exámenes" imageUrl="exams.png" />
                    <Card name="Resultados" imageUrl="results.png" />
                </div>
                <h2 className="title2">Facultades con procedimientos específicos de admisión</h2>
                <div className="image-card-container">
                    <ImageCard imageUrl="Ingenieria.png" />
                    <ImageCard imageUrl="Medicina.png" />
                    <ImageCard imageUrl="Odontologia.png" />
                    <ImageCard imageUrl="Quimica.png" />
                </div>*
            </FondoA>
        </>
    )
}