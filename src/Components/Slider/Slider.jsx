import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
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
        <Swiper
          autoplay={{ delay: 3000 }}
          modules={[Autoplay]}
          spaceBetween={50}
          slidesPerView={1}
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
        </Swiper>
      </div>
    </>
  );
};

export default Slider;
