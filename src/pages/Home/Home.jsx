import React, { useState } from "react";
import { Outlet } from "react-router-dom";
import Header from "./components/Header";
import { AnimatePresence, motion } from "framer-motion";

const Home = () => {
  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0, transition: { duration: 0.5 } }}
        transition={{ duration: 0.3 }}
        className="scroll-smooth"
      >
        <div className="mx-auto max-w-7xl">
          <Header />
        </div>

        <div className="mx-auto max-w-6xl">
          <Outlet />
        </div>
      </motion.div>
    </AnimatePresence>
  );
};

export default Home;
