import Slider from "../Slider/Slider";
import LastNews from "./LastNews";

const RightSide = () => {
  return (
    <div className="overflow-hidden z-10">
      <Slider />
      {/* স্কুলের ইতিহাস----------------- */}
      <div className="my-6 border-4 border-primary-20/70 rounded-md">
        <h1 className="bg-primary-20/70 p-2 text-2xl font-bold text-center mb-2 text-white">
          ফরিদপুর জেলা স্কুলের ইতিহাস
        </h1>
        <p className="py-1 px-2 ">
          ইতিহাস ১৮৪০ সালে তৎকালীন ব্রিটিশ জেলা ম্যাজিস্ট্রেট এডগার এফ লুথার
          ইংলিশ সেমিনারি স্কুল নামে ফরিদপুরে একটি বিদ্যালয় প্রতিষ্ঠিত করেন।
          ১৮৫১ সালে এটির জাতীয়করণ হয় ও ব্রিটিশ সরকার বিদ্যালয় পরিচালনার খরচ ও
          দায়িত্বগ্রহণ করে। সেসময় বিদ্যালয়ের নতুন নাম ফরিদপুর জিলা স্কুল রাখা
          হয়।
        </p>
      </div>

      {/* সর্বশেষ  সংবাদ  */}
      <LastNews />
    </div>
  );
};

export default RightSide;
