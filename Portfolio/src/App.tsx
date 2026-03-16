import { BrowserRouter, Route, Routes} from "react-router-dom";
import {Developers} from "./Functions.tsx";
import './App.css'


function App() {


  return (
    <>
      <BrowserRouter></BrowserRouter>
      <Routes>
        <Route path="/developers" element={<Developers />} />
      </Routes>


    </>
  )
}

export default App
