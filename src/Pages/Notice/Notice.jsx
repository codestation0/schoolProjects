<<<<<<< HEAD
import LastNews from "../../Components/RightSidebar/LastNews";
import Container from "../Shared/Container";

const Notice = () => {
  return (
    <Container>
      <div className="grid gap-2 lg:grid-cols-2">
        {/* TODO: LAST NEWS  */}
        <LastNews />
        <div className="border-4 rounded-md border-primary-20/70 mb-8 h-max">
          <h1 className="bg-primary-20/70 p-3 text-center text-2xl text-zinc-900">
            নোটিশ বোর্ড
          </h1>
          <div className="grid gap-2 grid-cols-[10rem_1fr] bg-primary-30 py-2 px-1 border-b-2 border-blue-700 border-dotted mb-2">
            <div className="flex flex-col text-center font-bold text-lg ">
              <span className="bg-primary-10/70 text-white">Dec</span>
              <span className="bg-white">01</span>
            </div>
            <p>
              একাদশ শ্রেণিতে ২০২২-২০২৩ শিক্ষাবর্ষে ভর্তির জন্য প্রয়োজনীয়
              কাগজপত্র
            </p>
          </div>
          <div className="grid gap-2 grid-cols-[10rem_1fr] bg-primary-30 py-2 px-1 border-b-2 border-blue-700 border-dotted mb-2">
            <div className="flex flex-col text-center font-bold text-lg ">
              <span className="bg-primary-10/70 text-white">Dec</span>
              <span className="bg-white">01</span>
            </div>
            <p>
              একাদশ শ্রেণিতে ২০২২-২০২৩ শিক্ষাবর্ষে ভর্তির জন্য প্রয়োজনীয়
              কাগজপত্র
            </p>
          </div>
          <div className="grid gap-2 grid-cols-[10rem_1fr] bg-primary-30 py-2 px-1 border-b-2 border-blue-700 border-dotted mb-2">
            <div className="flex flex-col text-center font-bold text-lg ">
              <span className="bg-primary-10/70 text-white">Dec</span>
              <span className="bg-white">01</span>
            </div>
            <p>
              একাদশ শ্রেণিতে ২০২২-২০২৩ শিক্ষাবর্ষে ভর্তির জন্য প্রয়োজনীয়
              কাগজপত্র
            </p>
          </div>
          
=======
import Container from "../Shared/Container";
import NoticeCard from "./NoticeCard";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { Link } from "react-router-dom";

const Notice = () => {
  const {
    data: routines = [],
    isLoading,
    refetch,
  } = useQuery({
    queryKey: ["routines"],
    queryFn: async () => {
      const res = await axios.get(
        `${import.meta.env.VITE_BASE_URL}/all-notice`
      );
      return res.data;
    },
  });

  if (isLoading) {
    return "Loading...";
  }

  return (
    <Container>
      <div className="max-w-screen-md w-full mx-auto">
        {/* TODO: LAST NEWS  */}

        <div className="border-4 rounded-md border-primary-20/70 mb-8 h-max">
          <h1 className="bg-primary-20/70 p-3 text-center text-2xl text-white">
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
>>>>>>> 691dfebce376a02b08f0e668c045badee015bc1f
        </div>
      </div>
    </Container>
  );
};

export default Notice;
