import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./components/Competence/Header";
import Home from "./pages/Home.js";
// import Competence from "./pages/Competence.js";
// import Portfolio from "./pages/Portfolio.js";
// import Contact from "./pages/Contact.js";
import NotFound from "./pages/NotFound.js";
import Footer from "./components/Competence/Footer";

const App = () => {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route exact path="/" element={<Home />} />
        {/* <Route path="/competence" element={<Competence />} />
        <Route path="/portfolio" element={<Portfolio />} />
        <Route path="/contact" element={<Contact />} /> */}
        <Route path="*" element={<NotFound />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
};

export default App;
