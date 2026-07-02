import dev1 from "../../../assets/Dev1.png";
import dev2 from "../../../assets/Dev2.png";
import dev3 from "../../../assets/Dev3.png";
import dev4 from "../../../assets/Dev4.png";
import dev5 from "../../../assets/Dev5.png";
import dev6 from "../../../assets/Dev6.png";

const developers = [
    { id: 1, name: "Sarah Chen", role: "Lead engineer", image: dev1 },
    { id: 2, name: "Sarah Chen", role: "Lead engineer", image: dev2 },
    { id: 3, name: "Sarah Chen", role: "Lead engineer", image: dev3 },
    { id: 4, name: "Sarah Chen", role: "Lead engineer", image: dev4 },
    { id: 5, name: "Sarah Chen", role: "Lead engineer", image: dev5 },
    { id: 6, name: "Sarah Chen", role: "Lead engineer", image: dev6 },
];

export default function Developers() {
    return (
        <section id="developers" className="developers-container">
            <article>
                <h4>Team</h4>
                <h2>Our Developers</h2>
                <h3>What sets them apart</h3>
            </article>

            <article className="developers-card-container">
                {developers.map((dev) => (
                    <div className="developer-card" key={dev.id}>
                        <div className="developers-image">
                            <img src={dev.image} alt={dev.name} />
                        </div>
                        <h2>{dev.name}</h2>
                        <p>{dev.role}</p>
                        <p>Description</p>
                        <div>
                            <a href="#"><i className="fa-brands fa-linkedin"></i></a>
                            <a href="#"><i className="fa-solid fa-x"></i></a>
                            <a href="#"><i className="fa-brands fa-github"></i></a>
                        </div>
                    </div>
                ))}
            </article>

            <article>
                <h3>We're hiring</h3>
            </article>
        </section>
    );
}