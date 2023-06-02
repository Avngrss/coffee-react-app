import React from "react";
import { Route, Routes, useLocation } from "react-router-dom";
import { AnimatePresence } from "framer-motion";

import Ourcoffe from "../../pages/Ourcoffe";
import Main from "../Main/Main";
import Pleasure from "../../pages/Pleasure.jsx";

function AnimateRoute() {
  const location = useLocation();
  return (
    <AnimatePresence>
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<Main />} />
        <Route path="/ourcoffe" element={<Ourcoffe />} />
        <Route path="/pleasure" element={<Pleasure />} />
      </Routes>
    </AnimatePresence>
  );
}

export default AnimateRoute;
