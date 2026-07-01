import { BrowserRouter, Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Developers from "./pages/Developers";
import Connect from "./pages/Connect";
import Footer from "./pages/Footer"
import Hero from "./pages/Hero";
import Intro from "./pages/Intro";

function App() {

  return (
    <>
        <BrowserRouter>
            <Navbar />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/developers" element={<Developers />} />
                <Route path="/connect" element={<Connect />} />
                <Route path="/footer" element={<Footer />} />
                <Route path="/hero" element={<Hero />} />
                <Route path="/intro" element={<Intro />} />
            </Routes>
        </BrowserRouter>
    </>
  )
}

export default App
