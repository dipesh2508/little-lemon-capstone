import "./App.css";

import { BrowserRouter, Routes, Route } from "react-router-dom";

import Header from "./components/Header";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import About from "./components/About";
import Highlights from "./components/Highlights";
import Testimonials from "./components/Testimonials";
import Reservations from "./components/Reservations";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Hero />}></Route>
        <Route path="/reserve" element={<Reservations />}></Route>
      </Routes>
      <Highlights />
      <About />
      <Testimonials />
      <Footer />
    </BrowserRouter>
  );
}

export default App;
