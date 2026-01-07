import React, { use } from "react";
import ReviewsAnimate from "./ReviewsAnimate";
import Container from "../components/Container/Container";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";

const ReviewsCard = ({ reviewsPromise }) => {
  const reviews = use(reviewsPromise);

  //   console.log(reviews);

  return (
    <div>
      <h3 className="text-3xl text-center my-5 font-bold text-primary">
        Our users reviews
      </h3>

      <Container>
        <div className="max-w-6xl mx-auto">
          <Swiper
            modules={[Autoplay, Pagination, Navigation]}
            slidesPerView={1}
            spaceBetween={24}
            pagination={true}
            autoplay={{ delay: 4000, disableOnInteraction: false }}
            breakpoints={{
              640: { slidesPerView: 1 },
              768: { slidesPerView: 2 },
              1024: { slidesPerView: 3 },
            }}
            className="mySwiper pb-10">
            {reviews.map((review) => (
              <SwiperSlide key={review.id}>
                <ReviewsAnimate review={review} />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </Container>
    </div>
  );
};

export default ReviewsCard;
