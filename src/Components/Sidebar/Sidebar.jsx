import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import RoutineCard from "../../Pages/Routine/RoutineCard";
import HeadmasterInformation from "../HeadmasterInformation/HeadmasterInformation";
const headmasterbani = {
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
  const [showRoutine, setShowRoutine] = useState(false);
  const [headmasterbani, setHeadmasterbani] = useState([]);
  const [headmasterInfo, setHeadmasterInfo] = useState([]);

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

  useEffect(() => {
    fetchHedmasterbani();
    getHeadmasterInfo();
  }, []);

  const fetchHedmasterbani = async () => {
    await axios
      .get(`${import.meta.env.VITE_BASE_URL}/headmasterbani`)
      .then((res) => setHeadmasterbani(res.data));
  };

  const getHeadmasterInfo = async () => {
    await axios
      .get(`${import.meta.env.VITE_BASE_URL}/all-headmasterinformation`)
      .then((res) => setHeadmasterInfo(res.data));
  };

  if (isLoading) {
    return "Loading...";
  }

  return (
    <div className=" space-y-3 mb-4 order-2 md:order-4">
      <HeadmasterInformation />

      {headmasterInfo && Array.isArray(headmasterInfo) && (
        <div className="bg-primary-20/70 p-5 rounded-md shadow-md shadow-primary-20">
          <h1 className="text-2xl font-semibold  text-center mb-6">
            অধ্যক্ষ মহোদয়ের বাণী
          </h1>
          <div className="grid gap-5 sm:grid-cols-[1fr_2fr] ">
            <div>
              <img
                src={`${import.meta.env.VITE_BASE_URL}/${
                  headmasterInfo[0]?.image
                }`}
                alt=""
                className="mx-auto max-w-full"
              />
              <div className="text-center text-zinc-900 mt-3 space-y-1">
                <h1 className="md:text-xl lg:text-sm font-semibold ">
                  {headmasterInfo[0]?.name}
                </h1>
                <h1 className="text-sm text-zinc-900 lg:text-xs">
                  {headmasterInfo[0]?.designation}
                </h1>
              </div>
            </div>
            <p className="text-sm text-zinc-800 text-justify leading-6 tracking-tighter lg:text-start">
              {headmasterbani[0]?.description.length > 180 && !showMore ? (
                <>{headmasterbani[0]?.description.slice(0, 200)}...</>
              ) : (
                headmasterbani[0]?.description
              )}
              {headmasterbani[0]?.description.length > 180 && (
                <button
                  onClick={() => setShowMore(!showMore)}
                  className="border bg-rose-500 border-none text-white py-1 px-2 text-xs rounded-sm ml-3"
                >
                  {!showMore ? " আরও পড়ুন" : "পড়া শেষ করুণ"}
                </button>
              )}
            </p>
          </div>
        </div>
      )}

      {/* TODO: ! NOTICE BOARD */}
      <div className="border-4 rounded-md border-primary-20/70">
        <h1 className="bg-primary-20/70 p-3 text-center text-2xl text-zinc-800 font-bold">
          রুটিন বোর্ড
        </h1>

        <div>
          {routines && routines.length > 0 && Array.isArray(routines) ? (
            <>
              {showRoutine ? (
                <>
                  {routines.map((routine) => (
                    <RoutineCard
                      key={routine._id}
                      refetch={refetch}
                      routine={routine}
                    />
                  ))}
                </>
              ) : (
                <>
                  {routines.slice(0, 4).map((routine) => (
                    <RoutineCard
                      key={routine._id}
                      refetch={refetch}
                      routine={routine}
                    />
                  ))}
                </>
              )}
              <button
                onClick={() => setShowRoutine((prev) => !prev)}
                className="mx-auto py-1 px-2 text-white rounded-md drop-shadow-md w-max bg-primary-20 block
                "
              >
                {!showRoutine ? "See more" : "Show less"}
              </button>
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
