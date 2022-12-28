import React from "react";
import "./main.scss";
import "bootstrap-icons/font/bootstrap-icons.css";
import "../node_modules/bootstrap/dist/js/bootstrap.bundle";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import BookCommercialName from "./pages/BookCommercialName/BookCommercialName";
import Wrapper from "./components/Wrapper/Wrapper";
import Dashboard from "./pages/Dashboard/Dashboard";

const App = () => {
  return (
    <BrowserRouter>
      <Wrapper>
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="BookCommercialName" element={<BookCommercialName />} />
        </Routes>
      </Wrapper>
    </BrowserRouter>
  );
};

export default App;
