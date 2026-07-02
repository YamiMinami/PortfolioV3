import themeImage from "../../../assets/ThemeImage.png";

export default function Connect() {
    return (
        <section id="contact" className="connect-container">
            <article>
                <h2>Ready to work together</h2>
                <h3>Lets get in touch with the team and build something!</h3>
                <div className="connect-buttons">
                    <button className="btn-primary">Contact</button>
                    <button className="btn-secondary">Developers</button>
                </div>
                <div className="theme-wrapper">
                    <img className="theme-img" src={themeImage} alt="Theme" />
                </div>
            </article>
        </section>
    );
}