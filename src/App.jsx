import React from "react";
import { BrowserRouter } from "react-router-dom";
import Header from "./components/Competence/Header";
import Home from "./pages/Home.jsx";

import Footer from "./components/Competence/Footer";

const App = () => {
  return (
    <BrowserRouter>
      <Header />

      <Home />

      {/* <Routes>
        <Route exact path="/" element={<Home />} /> */}

      {/* <Route path="*" element={<NotFound />} />
      </Routes> */}
      <Footer />
    </BrowserRouter>
  );
};

export default App;
