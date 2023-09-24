import axios from "axios";
import { useEffect, useState } from "react";
import Container from "../Shared/Container";
import ClassInfoCard from "./ClassInfoCard";

const ClassInfo = () => {
  const [data, setData] = useState([]);
  useEffect(() => {
    fetchClassInfoData();
  }, [data]);

  const fetchClassInfoData = async () => {
    const res = await axios.get(
      `${import.meta.env.VITE_BASE_URL}/all-classinfo`
    );
    setData(res.data);
  };
  return (
    <Container>
      {data && Array.isArray(data) && data.length > 0 ? (
        <div className="p-4">
          <table className="min-w-full divide-y divide-gray-200">
            <thead className="">
              <tr>
                <th className="px-6 py-3 bg-gray-50 text-left text-base leading-4 font-medium text-gray-500 uppercase tracking-wider">
                  শ্রেণী
                </th>
                <th className="px-6 py-3 bg-gray-50 text-left text-base leading-4 font-medium text-gray-500 uppercase tracking-wider">
                  ছাত্র
                </th>
                <th className="px-6 py-3 bg-gray-50 text-left text-base leading-4 font-medium text-gray-500 uppercase tracking-wider">
                  ছাত্রী
                </th>
                <th className="px-6 py-3 bg-gray-50 text-left text-base leading-4 font-medium text-gray-500 uppercase tracking-wider">
                  মোট শিক্ষার্থী
                </th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {data.map((row) => (
                <ClassInfoCard key={row.class} row={row} />
              ))}
            </tbody>
          </table>
        </div>
      ) : (
        <p className="text-center text-2xl my-6">No Data Available</p>
      )}
    </Container>
  );
};

export default ClassInfo;
