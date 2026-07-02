import heroImg from "../../../assets/hero.png";

export default function Hero() {
    return (
        <section id="home" className="hero-container">
            <img src={heroImg} alt="" className="hero-bg" />
            <div className="hero-overlay"></div>

            <article className="hero-article">
                <h2>Meet the developers building tomorrow</h2>
                <p>
                    We bring together talented engineers who create elegant solutions.
                    Each developer brings their own craft to the work.
                </p>
                <div>
                    <button>Explore</button>
                    <button>Learn more</button>
                </div>
            </article>
        </section>
    );
}