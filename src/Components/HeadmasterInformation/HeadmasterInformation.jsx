import { useQuery } from "@tanstack/react-query";
import axios from "axios";

const HeadmasterInformation = () => {
  const { data: headmaster = [] } = useQuery({
    queryKey: ["headmaster-information"],
    queryFn: async () => {
      const res = await axios.get(
        `${import.meta.env.VITE_BASE_URL}/all-headmasterinformation`
      );

      return res.data;
    },
  });

  return (
    <>
      {headmaster?.map((hmaster) => (
        <div className="  bg-primary-20/70 rounded-md p-5" key={hmaster._id}>
          <div className="z-10">
            <img
              src={`${import.meta.env.VITE_BASE_URL}/${hmaster.image}`}
              alt="teacher image"
              className="w-full max-w-[15rem] mx-auto rounded-md"
            />
          </div>
          <div className="text-center mt-2 space-y-2 text-zinc-800">
            <h2 className="text-lg font-bold">{hmaster.name}</h2>
            <p className="text-sm">{hmaster.designation}</p>
          </div>
          <hr className=" text-zinc-800 mt-2" />
          <p className="pt-3 text-zinc-800">
            নিশ্বয় আল্লাহ মানুষ এবং জীন সৃষ্টি করেছেন একমাত্র তার ইবাদাত করার
            জন্য। (আল কোরআন)
          </p>
        </div>
      ))}
    </>
  );
};

export default HeadmasterInformation;
