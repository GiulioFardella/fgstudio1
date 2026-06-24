import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Navbar1 from "./components/Navbar1";

function HomeTest() {
  return (
    <main className="app">
      <section className="app__test">
        <p className="app__eyebrow">FG Studio</p>

        <h1>Base React attiva.</h1>

        <p>Il progetto è pronto per navbar, routing e pagine.</p>
      </section>
    </main>
  );
}

function App() {
  return (
    <BrowserRouter>
      <Navbar1 />

      <Routes>
        <Route path="/" element={<HomeTest />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;