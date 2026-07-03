import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar1 from "./components/Navbar1";
import Home from "./pages/Home";
import Footer from "./components/Footer";
import Portfolio from "./pages/Portfolio";
import Contacts from "./pages/Contacts";
import Form1 from "./pages/Form1";
import ScrollToTop from "./components/ScrollTop";
function App() {
  return (
    <BrowserRouter>
      <Navbar1 />
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="portfolio" element={<Portfolio />} />
        <Route path="contacts" element={<Contacts />} />
        <Route path="form" element={<Form1 />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
