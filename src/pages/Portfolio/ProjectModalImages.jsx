import { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/pagination";

import { Pagination } from "swiper/modules";

const ProjectModalImages = ({ imageUrls }) => {
  return (
    <div className="project__modal--body__image">
      <Swiper
        pagination={{
          dynamicBullets: true,
        }}
        modules={[Pagination]}
        className="project__modal--body__image--swiper"
        grabCursor={true}
      >
        {imageUrls.map((image, index) => (
          <SwiperSlide key={index}>
            <img
              src={image}
              alt={`Project screenshot ${index + 1}`}
              className="project__modal--body__image--img"
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default ProjectModalImages;
