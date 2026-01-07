import React from "react";
import { motion } from "motion/react";
import "swiper/css";
import Banner from "../HeroSection/Banner";

const Home = () => {
  return (
    <div>
      <motion.h1
        animate={{ opacity: 10, y: 0 }}
        initial={{ opacity: 0, y: 30 }}
        transition={{ duration: 2 }}
        whileHover={{ scale: 1.1 }}
        className="text-4xl font-bold text-center text-primary my-5">
        Boost your Skill
      </motion.h1>
      <Banner />
    </div>
  );
};

export default Home;
