import axios from "axios";
import { useEffect, useState } from "react";
import Notice from "../../Pages/Notice/Notice";
import HeadmasterInformation from "../HeadmasterInformation/HeadmasterInformation";

const Sidebar = () => {
  const [showMore, setShowMore] = useState(false);

  const [headmasterbani, setHeadmasterbani] = useState([]);
  const [headmasterInfo, setHeadmasterInfo] = useState([]);

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
              {headmasterbani[0]?.description?.length > 180 && !showMore ? (
                <>{headmasterbani[0]?.description.slice(0, 200)}...</>
              ) : (
                headmasterbani[0]?.description
              )}
              {headmasterbani[0]?.description?.length > 180 && (
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

      <Notice />
    </div>
  );
};

export default Sidebar;
