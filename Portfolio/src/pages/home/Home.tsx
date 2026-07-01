import Navbar from "../../components/shared/Navbar/Navbar.tsx";
import Hero from "./components/Hero.tsx";
import Intro from "./components/Intro.tsx";
import Developers from "./components/Developers.tsx";
import Connect from "./components/Connect.tsx";
import Footer from "../../components/shared/Footer/Footer.tsx";

export default function Home() {
    return (
        <>
            <Navbar />
            <main>
                <Hero />
                <Intro />
                <Developers />
                <Connect />
            </main>
            <Footer />
        </>
    );
}