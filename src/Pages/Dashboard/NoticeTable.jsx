import axios from "axios";
import Container from "../Shared/Container";
import { useQuery } from "@tanstack/react-query";
import NoticeRow from "../../Components/Dashboard/NoticeRow";

const NoticeTable = () => {
  const { data: notices = [], refetch } = useQuery({
    queryKey: ["notices"],
    queryFn: async () => {
      const res = await axios.get(
        `${import.meta.env.VITE_BASE_URL}/all-notice`
      );

      return res.data;
    },
  });

  return (
    <Container>
      {notices && Array.isArray(notices) && notices.length > 0 ? (
        <>
          <div className="overflow-x-auto bg-zinc-200 ">
            <table className="min-w-full divide-y divide-gray-200">
              <thead className="bg-zinc-300 ">
                <tr>
                  <th
                    scope="col"
                    className="px-6 py-3 text-left text-xs sm:text-base font-bold text-gray-500 uppercase tracking-wider"
                  >
                    PDF
                  </th>
                  <th
                    scope="col"
                    className="px-6 py-3 text-left text-xs sm:text-base font-bold text-gray-500 uppercase tracking-wider"
                  >
                    CLASS
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
                {notices.map((notice) => (
                  <NoticeRow
                    key={notice._id}
                    notice={notice}
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

export default NoticeTable;
