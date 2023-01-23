import React from "react";
import { BrowserRouter } from "react-router-dom";
import Header from "./components/Competence/Header";
import Home from "./pages/Home.js";

import Footer from "./components/Competence/Footer";

const App = () => {
  return (
    <BrowserRouter>
      <Header />
      {/* <Routes>
        <Route exact path="/" element={<Home />} /> */}
      <Home />
      {/* <Route path="*" element={<NotFound />} />
      </Routes> */}
      <Footer />
    </BrowserRouter>
  );
};

export default App;
