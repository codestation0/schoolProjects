import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import ClassInfoRow from "../../Components/Dashboard/ClassInfoRow";
import Container from "../Shared/Container";

const ClassInfoTable = () => {
  const { data: classInfo = [], refetch } = useQuery({
    queryKey: ["classinfo"],
    queryFn: async () => {
      const res = await axios.get(
        `${import.meta.env.VITE_BASE_URL}/all-classinfo`
      );

      return res.data;
    },
  });

  return (
    <Container>
      {classInfo && Array.isArray(classInfo) && classInfo.length > 0 ? (
        <>
          <div className="overflow-x-auto bg-zinc-200 ">
            <table className="min-w-full divide-y divide-gray-200">
              <thead className="bg-zinc-300 ">
                <tr>
                  <th
                    scope="col"
                    className="px-6 py-3 text-left text-xs sm:text-base font-bold text-gray-500 uppercase tracking-wider"
                  >
                    শ্রেণী
                  </th>
                  <th
                    scope="col"
                    className="px-6 py-3 text-left text-xs sm:text-base font-bold text-gray-500 uppercase tracking-wider"
                  >
                    ছাত্র
                  </th>
                  <th
                    scope="col"
                    className="px-6 py-3 text-left text-xs sm:text-base font-bold text-gray-500 uppercase tracking-wider"
                  >
                    ছাত্রী
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
                {classInfo.map((headmaster) => (
                  <ClassInfoRow
                    key={headmaster._id}
                    headmaster={headmaster}
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

export default ClassInfoTable;
