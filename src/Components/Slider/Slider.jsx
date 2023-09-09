import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import { Autoplay } from "swiper/modules";
const Slider = () => {
  return (
    <>
      <div className="overflow-hidden rounded-md border border-primary-10">
        <Swiper
          autoplay={{ delay: 3000 }}
          modules={[Autoplay]}
          spaceBetween={50}
          slidesPerView={1}
          onSlideChange={() => console.log("slide change")}
          onSwiper={(swiper) => console.log(swiper)}
        >
          <SwiperSlide>
            <img
              className="w-full"
              src="https://images.pexels.com/photos/5676741/pexels-photo-5676741.jpeg?auto=compress&cs=tinysrgb&w=600"
              alt=""
            />
          </SwiperSlide>
          <SwiperSlide>
            <img
              className="w-full"
              src="https://images.pexels.com/photos/5905557/pexels-photo-5905557.jpeg?auto=compress&cs=tinysrgb&w=600"
              alt=""
            />
          </SwiperSlide>
          <SwiperSlide>
            <img
              className="w-full"
              src="https://images.pexels.com/photos/8613121/pexels-photo-8613121.jpeg?auto=compress&cs=tinysrgb&w=600"
              alt=""
            />
          </SwiperSlide>
        </Swiper>
      </div>
    </>
  );
};

export default Slider;
