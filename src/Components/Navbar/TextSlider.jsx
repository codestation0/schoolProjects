import Marquee from "react-fast-marquee";
import Container from "../../Pages/Shared/Container";
const TextSlider = () => {
  return (
    <div className="bg-primary-10 py-2 relative flex">
      <Container>
        <div className="flex">
          <span className="text-lg font-bold px-2 text-white">সংবাদ</span>
          <Marquee speed={80} pauseOnHover>
            <div className="flex gap-10 text-normal text-white cursor-pointer hover:text-zinc-100">
              <p className="">
                ০৮/০৬/২০২৩ থেকে ২১/০৬/২০২৩ তারিখ পর্যন্ত ৭ম শ্রেণির প্রভাতি
                শাখার ক্লাশ রুটিন।
              </p>
            </div>
          </Marquee>
        </div>
      </Container>
    </div>
  );
};

export default TextSlider;
