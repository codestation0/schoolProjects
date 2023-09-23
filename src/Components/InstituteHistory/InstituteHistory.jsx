import { useQuery } from "@tanstack/react-query";
import axios from "axios";

const InstituteHistory = () => {
  const { data: instituteHistory = [] } = useQuery({
    queryKey: ["instituteHistory"],
    queryFn: async () => {
      const res = await axios.get(
        `${import.meta.env.VITE_BASE_URL}/instituteinfo`
      );

      return res.data;
    },
  });

  return (
    <>
      {instituteHistory &&
        Array.isArray(instituteHistory) &&
        instituteHistory.length > 0 && (
          <div className="my-6 border-4 border-primary-20/70 rounded-md">
            <h1 className="bg-primary-20/70 p-2 text-2xl font-bold text-center mb-2 text-white">
              প্রতিষ্ঠানের নাম ও ইতিহাস
            </h1>
            <p className="py-1 px-2 ">{instituteHistory[0].description}</p>
          </div>
        )}
    </>
  );
};

export default InstituteHistory;
