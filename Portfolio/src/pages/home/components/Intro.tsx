import craft1 from "../../../assets/craft1.png";
import craft2 from "../../../assets/craft2.png";
import craft3 from "../../../assets/craft3.png";

const craftItems = [
    {
        id: 1,
        tag: "Speed",
        title: "Fast without losing precision",
        desc: "They move quick and deliver solid results",
        image: craft1,
    },
    {
        id: 2,
        tag: "Speed",
        title: "Fast without losing precision",
        desc: "They move quick and deliver solid results",
        image: craft3,
    },
    {
        id: 3,
        tag: "Speed",
        title: "Fast without losing precision",
        desc: "They move quick and deliver solid results",
        image: craft2,
    },
];

export default function Intro() {
    return (
        <section id="about" className="intro-container">
            <article>
                <h4>Craft</h4>
                <h2>What sets them apart</h2>
                <h3>Clean code, honest work, no shortcuts taken</h3>
            </article>

            <article className="craft-article-container">
                {craftItems.map((item) => (
                    <div className="craft-card" key={item.id}>
                        <div className="craft-card-text">
                            <h4>{item.tag}</h4>
                            <h2>{item.title}</h2>
                            <h3>{item.desc}</h3>
                            <a href="#" className="craft-link">
                                explore
                            </a>
                        </div>
                        <img src={item.image} alt={item.tag} />
                    </div>
                ))}
            </article>
        </section>
    );
}