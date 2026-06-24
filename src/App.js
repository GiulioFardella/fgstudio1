import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar1 from "./components/Navbar1";
import Home from "./pages/Home";

function App() {
  return (
    <BrowserRouter>
      <Navbar1 />

      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;