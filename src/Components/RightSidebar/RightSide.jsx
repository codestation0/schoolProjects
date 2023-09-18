import InstituteHistory from "../InstituteHistory/InstituteHistory";
import Slider from "../Slider/Slider";

const RightSide = () => {
  return (
    <div className="overflow-hidden z-10 order-1 md:order-6">
      <Slider />
      {/* স্কুলের ইতিহাস----------------- */}

      <InstituteHistory />
    </div>
  );
};

export default RightSide;
