import { useState } from "react";
import avatar from "../../assets/man.jpg";
import { Link } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import NoticeCard from "../../Pages/Notice/NoticeCard";
const pricipalTalk = {
  image: "https://picsum.photos/400/400",
  talk: ` শিক্ষা, শৃংখলা, সংযম- এই মূলমন্ত্রকে হৃদয়ে লালন করে প্রগতিশীল পৃথিবী
            গড়ার প্রত্যয়ে ফারিদপুর জেলা স্কুলের ওয়েবসাইটে সকলের প্রতি রইল
            আন্তরিক অভিনন্দন। ফারিদপুর জেলা এর সকল সদস্য আধুনিক বিজ্ঞান সম্মত
            তথ্য প্রযুক্তিসমৃদ্ধ ‘ডিজিটাল বাংলাদেশ’ গড়ে তুলতে নিরলসভাবে কাজ করে
            চলেছে। শ্রেণি শিক্ষার পাশাপাশি সহপাঠ্যক্রমিক কার্যক্রম, সামাজিক ও
            সাংস্কৃতিক কর্মকাণ্ডেও শিক্ষার্থীরা সমান পারদর্শিতার সাথে অংশগ্রহণ
            করছে এবং ভবিষ্যতে আলোকিত মানুষ হিসেবে দেশ ও জাতির কল্যাণে তারা
            সফলতার পরিচয় দেবে বলে আশা করা যায়। ফারিদপুর জেলা এর শিক্ষার্থীদের
            প্রতি রইল আমার সর্বাঙ্গীণ শুভকামনা। আমি মনেকরি WEBSITE টি
            শিক্ষক-শিক্ষার্থী-অভিভাবকসহ সকলের জন্য সুফল বয়ে আনবে। এই
            প্রতিষ্ঠানের সংশ্লিষ্ট সকলকে জানাচ্ছি প্রাণঢালা অভিনন্দন।`,
};
const Sidebar = () => {
  const [showMore, setShowMore] = useState(false);
  const {
    data: routines = [],
    isLoading,
    refetch,
  } = useQuery({
    queryKey: ["routines"],
    queryFn: async () => {
      const res = await axios.get(
        `${import.meta.env.VITE_BASE_URL}/all-routine`
      );
      return res.data;
    },
  });

  if (isLoading) {
    return "Loading...";
  }
  return (
    <div className=" space-y-3 mb-4 order-2 md:order-4">
      <div className="  bg-primary-20/70 rounded-md p-5">
        <div className="z-10">
          <img
            src={avatar}
            alt="teacher image"
            className="w-full max-w-[15rem] mx-auto rounded-md"
          />
        </div>
        <div className="text-center mt-2 space-y-2 text-zinc-800">
          <h2 className="text-lg font-bold">আব্দুল্লাহ আল মামুন</h2>
          <p className="text-sm">প্রধান শিক্ষক</p>
          <p className="text-sm">ফরিদপুর জিলা স্কুল</p>
        </div>
        <hr className=" text-zinc-800 mt-2" />
        <p className="pt-3 text-zinc-800">
          নিশ্বয় আল্লাহ মানুষ এবং জীন সৃষ্টি করেছেন একমাত্র তার ইবাদাত করার
          জন্য। (আল কোরআন)
        </p>
      </div>

      <div className="bg-primary-20/70 p-5 rounded-md shadow-md shadow-primary-20">
        <h1 className="text-2xl font-semibold  text-center mb-6">
          অধ্যক্ষ মহোদয়ের বাণী
        </h1>
        <div className="grid gap-5 sm:grid-cols-[1fr_2fr] ">
          <div>
            <img
              src={pricipalTalk.image}
              alt=""
              className="mx-auto max-w-full"
            />
            <div className="text-center text-zinc-900 mt-3 space-y-1">
              <h1 className="md:text-xl lg:text-sm font-semibold ">
                আব্দুল্লাহ আল মামুন
              </h1>
              <h1 className="text-sm text-zinc-900 lg:text-xs">অধ্যক্ষ</h1>
              <h1 className="text-sm text-zinc-900 lg:text-xs">
                ফরিদপুর জেলা স্কুল ফারিদপুর
              </h1>
            </div>
          </div>
          <p className="text-sm text-zinc-800 text-justify leading-6 tracking-tighter lg:text-start">
            {pricipalTalk.talk.length > 200 && !showMore ? (
              <>{pricipalTalk.talk.slice(0, 200)}...</>
            ) : (
              pricipalTalk.talk
            )}
            <button
              onClick={() => setShowMore(!showMore)}
              className="border bg-rose-500 border-none text-white py-1 px-2 text-xs rounded-sm ml-3"
            >
              {!showMore ? " আরও পড়ুন" : "পড়া শেষ করুণ"}
            </button>{" "}
          </p>
        </div>
      </div>

      {/* TODO: NOTICE BOARD */}
      <div className="border-4 rounded-md border-primary-20/70">
        <h1 className="bg-primary-20/70 p-3 text-center text-2xl text-zinc-800 font-bold">
          নোটিশ বোর্ড
        </h1>

        <div>
          {routines && routines.length > 0 && Array.isArray(routines) ? (
            <>
              {routines.map((routine) => (
                <NoticeCard
                  key={routine._id}
                  refetch={refetch}
                  routine={routine}
                />
              ))}
            </>
          ) : (
            <>
              <p className="text-center text-2xl py-4 text-primary-20">
                এখন কোন নোটিশ নেই
              </p>
              <Link
                to="/"
                className="bg-primary-20 text-white py-1 px-2 rounded-md w-max my-5 block mx-auto"
              >
                হোম পেজে যান
              </Link>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
