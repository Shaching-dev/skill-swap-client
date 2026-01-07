import React from "react";

const ReviewsAnimate = ({ review }) => {
  return (
    <div
      className="bg-white dark:bg-gray-800 shadow-lg rounded-xl p-4 sm:p-6 
                 flex flex-col md:flex-row items-center gap-4 md:gap-6 
                 hover:shadow-2xl transition-shadow duration-300
                 w-full h-full min-h-[280px] md:min-h-[250px] 
                 flex-shrink-0 px-6 cursor-pointer">
      {/* Reviewer Image - Responsive sizing */}
      <div className="flex-shrink-0">
        <img
          src={review.image}
          alt={review.name}
          className="w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24 
                     rounded-full object-cover border-2 border-purple-500 
                     shadow-md"
        />
      </div>

      {/* Text Content */}
      <div className="flex-1 text-center md:text-left w-full">
        <h3
          className="text-base sm:text-lg md:text-xl font-bold 
                       text-gray-900 dark:text-white 
                       truncate">
          {review.name}
        </h3>
        <p
          className="text-xs sm:text-sm md:text-base 
                      text-purple-500 mt-1 
                      truncate">
          {review.occupation}
        </p>
        <p
          className="mt-3 text-gray-700 dark:text-gray-300 
                      text-xs sm:text-sm md:text-base 
                      line-clamp-3 md:line-clamp-4">
          {review.description}
        </p>
      </div>
    </div>
  );
};

export default ReviewsAnimate;
