import React, { Suspense } from "react";
import { motion } from "motion/react";
import "swiper/css";
import Banner from "../HeroSection/Banner";
import ReviewsCard from "../../Cards/ReviewsCard";

const Home = () => {
  const reviewsPromise = fetch("/reviews.json").then((res) => res.json());

  return (
    <div>
      <motion.h1
        animate={{ opacity: 10, y: 0 }}
        initial={{ opacity: 0, y: 30 }}
        transition={{ duration: 2 }}
        whileHover={{ scale: 1.1 }}
        className="text-4xl font-bold text-center text-primary my-5 roboto">
        Boost your Skill
      </motion.h1>
      <Banner />

      <div>
        <Suspense
          fallback={
            <div className="text-center">
              <span className="loading loading-ring h-[300px] w-[300px] animate-spin text-primary text-center loading-xl"></span>
            </div>
          }>
          <ReviewsCard reviewsPromise={reviewsPromise}></ReviewsCard>
        </Suspense>
      </div>
    </div>
  );
};

export default Home;
