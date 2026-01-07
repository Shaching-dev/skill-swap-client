import { Swiper, SwiperSlide } from "swiper/react";
import { motion } from "motion/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";
import Banner1 from "../../assets/banner-1.jpg";
import Banner2 from "../../assets/banner-2.jpg";
import Banner3 from "../../assets/banner-3.jpg";
import Banner4 from "../../assets/banner-4.jpg";
import { Link } from "react-router";

const Banner = () => {
  //   const banners = [Banner1, Banner2, Banner3, Banner4];
  const slides = [
    {
      image: Banner1,
      title: "Learn Skills From Experts",
      subtitle: "Exchange knowledge and grow together",
      buttonText: "Explore Skills",
      link: "/skills",
    },
    {
      image: Banner2,
      title: "Share Your Expertise",
      subtitle: "Teach what you know and earn reputation",
      buttonText: "Become a Mentor",
      link: "/add-skill",
    },
    {
      image: Banner3,
      title: "Connect With Learners",
      subtitle: "Build meaningful learning connections",
      buttonText: "Join Now",
      link: "/register",
    },
    {
      image: Banner4,
      title: "Connect With Learners",
      subtitle: "Build meaningful learning connections",
      buttonText: "Join Now",
      link: "/register",
    },
  ];

  return (
    <div className="max-w-7xl mx-auto px-4">
      <Swiper
        modules={[Autoplay]}
        autoplay={{ delay: 5000, disableOnInteraction: false }}
        loop
        slidesPerView={1}>
        {slides.map((slide, index) => (
          <SwiperSlide key={index}>
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 10, y: 0 }}
              transition={{ duration: 0.6 }}
              className={
                "relative h-64 sm:h-80 md:h-[450px] rounded-xl overflow-hidden"
              }>
              <img
                src={slide.image}
                alt={slide.title}
                className="w-full h-full object-cover"
              />

              {/* Dark Overlay */}
              <div className="absolute inset-0 bg-black/50" />

              {/* Text Content */}
              <div className="absolute inset-0 flex items-center">
                <div className="px-6 sm:px-10 max-w-xl text-white space-y-4">
                  <h1 className="text-2xl sm:text-4xl font-bold">
                    {slide.title}
                  </h1>
                  <p className="text-sm sm:text-lg opacity-90">
                    {slide.subtitle}
                  </p>

                  <Link
                    to={slide.link}
                    className=" btn btn-primary flex justify-center">
                    {slide.buttonText}
                  </Link>
                </div>
              </div>
            </motion.div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Banner;
