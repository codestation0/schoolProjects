import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import Container from "../../Pages/Shared/Container";
import Sidebar from "../Sidebar/Sidebar";
import CommitteeCard from "./CommitteeCard";

const CommitteeMembers = () => {
  const { data: committees = [] } = useQuery({
    queryKey: ["committees"],
    queryFn: async () => {
      try {
        const res = await axios.get(
          `${import.meta.env.VITE_BASE_URL}/all-committee`
        );
        return res.data;
      } catch (error) {
        console.log(error);
      }
    },
  });
  return (
    <div className="white mb-6">
      <Container>
        <div className="grid gap-4 md:grid-cols-[23rem_1fr]">
          <Sidebar />
          <div className="order-0 md:order-6">
            <h1 className="text-center text-xl sm:text-2xl font-bold bg-primary-20/70 p-2 text-white mb-3 rounded-md">
              কমিটি সদস্যগণ
            </h1>
            {committees &&
            Array.isArray(committees) &&
            committees.length > 0 ? (
              <>
                <div className="grid gap-4 sm:grid-cols-2 md:grid-cols-3 ">
                  {committees?.map((committee) => (
                    <CommitteeCard key={committee._id} committee={committee} />
                  ))}
                </div>
              </>
            ) : (
              <>
                <p>No Data Available</p>
              </>
            )}
          </div>
        </div>
      </Container>
    </div>
  );
};

export default CommitteeMembers;
