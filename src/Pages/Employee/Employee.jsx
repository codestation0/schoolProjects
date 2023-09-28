import { useQuery } from "@tanstack/react-query";
import axios from "axios";

import Sidebar from "../../Components/Sidebar/Sidebar";

import Container from "../Shared/Container";
import EmployeeCard from "./EmployeeCard";

const Employee = () => {
  const { data: employees = [] } = useQuery({
    queryKey: ["employees-information"],
    queryFn: async () => {
      const res = await axios.get(`${import.meta.env.VITE_BASE_URL}/all-stuff`);

      return res.data;
    },
  });
  return (
    <div className="mb-6">
      <Container>
        <div className="grid gap-4 md:grid-cols-[23rem_1fr]">
          <Sidebar />
          <div className="md:order-6">
            <h1 className="text-center text-xl sm:text-2xl font-bold bg-primary-20/70 p-2 text-white mb-3 rounded-md">
              আমাদের কর্মচারীগণ
            </h1>
            {employees && Array.isArray(employees) && employees.length > 0 ? (
              <>
                <div className="grid gap-4 sm:grid-cols-2 md:grid-cols-3 ">
                  {employees?.map((employee) => (
                    <EmployeeCard key={employee._id} employee={employee} />
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

export default Employee;
