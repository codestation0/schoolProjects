import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
<<<<<<< HEAD
import "swiper/css";
import { Autoplay } from "swiper/modules";
const Slider = () => {
  return (
    <>
      <div className="overflow-hidden rounded-md border border-primary-10">
=======
import axios from "axios";
import { useEffect, useState } from "react";
import "swiper/css";
import { Autoplay } from "swiper/modules";

const Slider = () => {
  const [slideImages, setSlideImages] = useState([]);

  useEffect(() => {
    getInstituteImages();
  }, []);
  const getInstituteImages = async () => {
    await axios
      .get(`${import.meta.env.VITE_BASE_URL}/instituteimages`)
      .then((res) => setSlideImages(res.data));
  };

  return (
    <>
      <div className="overflow-hidden rounded-md h-max">
>>>>>>> 691dfebce376a02b08f0e668c045badee015bc1f
        <Swiper
          autoplay={{ delay: 3000 }}
          modules={[Autoplay]}
          spaceBetween={50}
          slidesPerView={1}
<<<<<<< HEAD
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
=======
          onSlideChange={() => {}}
          onSwiper={(swiper) => console.log(swiper)}
        >
          {slideImages[0]?.image?.map((slide) => (
            <SwiperSlide key={slide._id}>
              <img
                className="w-full h-full"
                src={`${import.meta.env.VITE_BASE_URL}/${slide.filename}`}
                alt=""
              />
            </SwiperSlide>
          ))}
>>>>>>> 691dfebce376a02b08f0e668c045badee015bc1f
        </Swiper>
      </div>
    </>
  );
};

export default Slider;
