import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import ImportantLinkRow from "../../Components/Dashboard/ImportantLinkRow";
import Container from "../Shared/Container";

const ImportantLinkTable = () => {
  const { data: importantLink = [], refetch } = useQuery({
    queryKey: ["importantlinks"],
    queryFn: async () => {
      const res = await axios.get(
        `${import.meta.env.VITE_BASE_URL}/importantlinks`
      );

      return res.data;
    },
  });

  return (
    <Container>
      {importantLink &&
      Array.isArray(importantLink) &&
      importantLink.length > 0 ? (
        <>
          <div className="overflow-x-auto bg-zinc-200 ">
            <table className="min-w-full divide-y divide-gray-200">
              <thead className="bg-zinc-300 ">
                <tr>
                  <th
                    scope="col"
                    className="px-6 py-3 text-left text-xs sm:text-base font-bold text-gray-500 uppercase tracking-wider"
                  >
                    Link Name
                  </th>
                  <th
                    scope="col"
                    className="px-6 py-3 text-left text-xs sm:text-base font-bold text-gray-500 uppercase tracking-wider"
                  >
                    Http
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
                {importantLink.map((link) => (
                  <ImportantLinkRow
                    key={link._id}
                    link={link}
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

export default ImportantLinkTable;
