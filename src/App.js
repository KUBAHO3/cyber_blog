import React from "react";
import Layout from "./pages/Layout";
import Home from "./Home";
import { BrowserRouter, Routes, Route  } from "react-router-dom";
import Services from "./pages/Services";

function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/services" element={<Services />} />
                <Route path="/" element={<Home />} />
            </Routes>
        </BrowserRouter>
    );
  }
  
  export default App;