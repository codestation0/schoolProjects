import Container from "../Shared/Container";
import { v4 as uuidv4 } from "uuid";
import EmployeeCard from "./EmployeeCard";
import avater from "../../assets/avater.jpg";
import Sidebar from "../../Components/Sidebar/Sidebar";
const employees = [
  {
    id: uuidv4(),
    name: "আব্দুল্লাহ আল মামুন",
    designation: "প্রধান শিক্ষক",
    img: avater,
  },
  {
    id: uuidv4(),
    name: "আব্দুল্লাহ আল মামুন",
    designation: "প্রধান শিক্ষক",
    img: avater,
  },
  {
    id: uuidv4(),
    name: "আব্দুল্লাহ আল মামুন",
    designation: "প্রধান শিক্ষক",
    img: avater,
  },
  {
    id: uuidv4(),
    name: "আব্দুল্লাহ আল মামুন",
    designation: "প্রধান শিক্ষক",
    img: avater,
  },
];
const Employee = () => {
  return (
    <div className="mb-6">
      <Container>
        <div className="grid gap-4 md:grid-cols-[23rem_1fr]">
          <Sidebar />
          <div className="md:order-6">
            <h1 className="text-center text-xl sm:text-2xl font-bold bg-primary-20/70 p-2 text-white my-3 rounded-md">
              আমাদের কর্মচারীগণ
            </h1>
            <div className="grid gap-4 sm:grid-cols-2 md:grid-cols-3 ">
              {employees.map((employee) => (
                <EmployeeCard key={employee.id} employee={employee} />
              ))}
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Employee;
