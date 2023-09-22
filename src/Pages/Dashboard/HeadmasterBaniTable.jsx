import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import HeadmasterBaniRow from "../../Components/Dashboard/HeadmasterBaniRow";
import Container from "../Shared/Container";

const HeadmasterBaniTable = () => {
  const { data: headmasterbani = [], refetch } = useQuery({
    queryKey: ["headmasterbani"],
    queryFn: async () => {
      const res = await axios.get(
        `${import.meta.env.VITE_BASE_URL}/headmasterbani`
      );

      return res.data;
    },
  });

  return (
    <Container>
      {headmasterbani &&
      Array.isArray(headmasterbani) &&
      headmasterbani.length > 0 ? (
        <>
          <div className="overflow-x-auto bg-zinc-200 ">
            <table className="min-w-full divide-y divide-gray-200">
              <thead className="bg-zinc-300 ">
                <tr>
                  <th
                    scope="col"
                    className="px-6 py-3 text-left text-xs sm:text-base font-bold text-gray-500 uppercase tracking-wider"
                  >
                    {/* Description */}
                    বানী
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
                {headmasterbani.map((bani) => (
                  <HeadmasterBaniRow
                    key={bani._id}
                    bani={bani}
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

export default HeadmasterBaniTable;
