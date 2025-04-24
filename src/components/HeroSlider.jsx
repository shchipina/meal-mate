import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';

import { Autoplay, Navigation, Pagination } from 'swiper/modules';

import slide1 from '../assets/slide1.png';
import slide2 from '../assets/slide2.png';
import slide3 from '../assets/slide3.png';

import { GrNext } from "react-icons/gr";
import { GrPrevious } from "react-icons/gr";

export const Slider = () => {
  return (
    <Swiper
      modules={[Navigation, Pagination, Autoplay]}
      navigation={{
        nextEl: '.custom-next',
        prevEl: '.custom-prev'
      }}
      spaceBetween={20}
      slidesPerView={1}
      loop={true}
      autoplay={{ delay: 3000, disableOnInteraction: false }}
      pagination={{ clickable: true }}

      className="h-[50vh] md:h-[80%] relative"
    >
      <SwiperSlide>
        <img
          src={slide1}
          alt="Slider image"
          className="w-full h-full object-cover object-center"
        />
      </SwiperSlide>

      <SwiperSlide>
        <img
          src={slide2}
          alt="Slider image"
          className="w-full h-full object-cover object-center"
        />
      </SwiperSlide>

      <SwiperSlide>
        <img
          src={slide3}
          alt="Slider image"
          className="w-full h-full object-cover object-center"
        />
      </SwiperSlide>

      <button
        className="custom-prev absolute h-full top-1/2 left-0 -translate-y-1/2 z-10 bg-white/80 text-gray-800 p-2 shadow hover:bg-[#9FDC26] transition hidden md:flex items-center justify-center"

      >
        <GrPrevious />
      </button>

      <button
        className="custom-next absolute h-full top-1/2 right-0 -translate-y-1/2 z-10 bg-white/80 text-gray-800 p-2 shadow hover:bg-[#9FDC26] transition hidden md:flex items-center justify-center"
      >
        <GrNext />
      </button>
    </Swiper>

  );
}