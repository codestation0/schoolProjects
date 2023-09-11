import LastNews from "../../Components/RightSidebar/LastNews";
import Container from "../Shared/Container";
import NoticeCard from "./NoticeCard";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { Link } from "react-router-dom";
const Notice = () => {
  const {
    data: notices = [],
    isLoading,
    refetch,
  } = useQuery({
    queryKey: ["notices"],
    queryFn: async () => {
      const res = await axios.get(`${import.meta.env.VITE_BASE_URL}/notices`);
      return res.data;
    },
  });

  if (isLoading) {
    return "Loading...";
  }

  return (
    <Container>
      <div className="grid gap-2 lg:grid-cols-2">
        {/* TODO: LAST NEWS  */}
        <LastNews />
        <div className="border-4 rounded-md border-primary-20/70 mb-8 h-max">
          <h1 className="bg-primary-20/70 p-3 text-center text-2xl text-zinc-900">
            নোটিশ বোর্ড
          </h1>

          <div>
            {notices && notices.length > 0 && Array.isArray(notices) ? (
              <>
                {notices.map((notice) => (
                  <NoticeCard
                    key={notice._id}
                    notice={notice}
                    refetch={refetch}
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
    </Container>
  );
};

export default Notice;
