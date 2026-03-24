import { BrowserRouter, Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Developers from "./pages/Developers";


function App() {


  return (
    <>
        <BrowserRouter>
            <Navbar />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/developers" element={<Developers />} />
            </Routes>
        </BrowserRouter>
    </>
  )
}

export default App
