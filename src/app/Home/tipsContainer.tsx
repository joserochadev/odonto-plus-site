import Container from "@/components/container";
import "@/styles/cards.css";
import Image from "next/image";
import TipsImage from "@/app/assets/img-tips.jpg";
import PrimaryButton from "@/components/primaryButton";
import "@/styles/containers.css";

const TipsContainer = () => {
    const tips = [
        {
            "image": TipsImage,
            "title": "Mantenha seus exames em dia",
            "description": "A prevenção é a melhor forma de cuidar da sua saúde. Agende check-ups regularmente."
        },
        {
            "image": TipsImage,
            "title": "Hidrate-se bem",
            "description": "Beber água suficiente todos os dias melhora a digestão, a circulação e a disposição."
        },
        {
            "image": TipsImage,
            "title": "Priorize o bem-estar mental",
            "description": "Cuide da sua mente como cuida do corpo. Momentos de descanso e lazer são essenciais."
        }
    ]

    return (
        <section className="main-container tips-container">
            <Container className="">

                <div className="tips-content">
                    <h5>DICAS</h5>
                    <h2>Confira dicas exclusivas para viver com mais bem-estar e qualidade de vida.</h2>

                    <div className="card">
                        {tips.map((objects, index) => (
                            <div key={index} className="card-item">
                                <Image src={objects.image} alt="img-tips"/>

                                <h3>{objects.title}</h3>
                                <p>{objects.description}</p>

                                <PrimaryButton/>

                            </div>
                        ))}
                    </div>


                </div>

            </Container>
        </section>
    );
}

export default TipsContainer;