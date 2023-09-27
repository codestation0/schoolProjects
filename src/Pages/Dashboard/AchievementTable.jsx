import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import AchievementRow from "../../Components/Dashboard/AchievementRow";
import Container from "../Shared/Container";

const AchievementTable = () => {
  const { data: achievement = [], refetch } = useQuery({
    queryKey: ["achievement"],
    queryFn: async () => {
      const res = await axios.get(
        `${import.meta.env.VITE_BASE_URL}/achievement`
      );

      return res.data;
    },
  });

  return (
    <Container>
      {achievement && Array.isArray(achievement) && achievement.length > 0 ? (
        <>
          <div className="overflow-x-auto bg-zinc-200 ">
            <table className="min-w-full divide-y divide-gray-200">
              <thead className="bg-zinc-300 ">
                <tr>
                  <th
                    scope="col"
                    className="px-6 py-3 text-left text-xs sm:text-base font-bold text-gray-500 uppercase tracking-wider"
                  >
                    Achievement
                  </th>
                  <th
                    scope="col"
                    className="px-6 py-3 text-center text-xs sm:text-base font-bold text-gray-500 uppercase tracking-wider "
                  >
                    Action
                  </th>
                </tr>
              </thead>
              <tbody>
                {achievement.map((achievement) => (
                  <AchievementRow
                    key={achievement._id}
                    achievement={achievement}
                    refetch={refetch}
                  />
                ))}
              </tbody>
            </table>
          </div>
        </>
      ) : (
        <>
          <p className=" my-6 text-center text-3xl font-semibold w-full h-screen grid place-content-center">
            No Data Available
          </p>
        </>
      )}
    </Container>
  );
};

export default AchievementTable;
