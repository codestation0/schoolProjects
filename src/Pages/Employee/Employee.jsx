import Container from "../Shared/Container";
import { v4 as uuidv4 } from "uuid";
import EmployeeCard from "./EmployeeCard";

const employees = [
  {
    id: uuidv4(),
    name: "আব্দুল্লাহ আল মামুন",
    designation: "প্রধান শিক্ষক",
    img: "https://images.pexels.com/photos/6517325/pexels-photo-6517325.jpeg?auto=compress&cs=tinysrgb&w=600",
  },
  {
    id: uuidv4(),
    name: "আব্দুল্লাহ আল মামুন",
    designation: "প্রধান শিক্ষক",
    img: "https://images.pexels.com/photos/6517325/pexels-photo-6517325.jpeg?auto=compress&cs=tinysrgb&w=600",
  },
  {
    id: uuidv4(),
    name: "আব্দুল্লাহ আল মামুন",
    designation: "প্রধান শিক্ষক",
    img: "https://images.pexels.com/photos/6517325/pexels-photo-6517325.jpeg?auto=compress&cs=tinysrgb&w=600",
  },
  {
    id: uuidv4(),
    name: "আব্দুল্লাহ আল মামুন",
    designation: "প্রধান শিক্ষক",
    img: "https://images.pexels.com/photos/6517325/pexels-photo-6517325.jpeg?auto=compress&cs=tinysrgb&w=600",
  },
];
const Employee = () => {
  return (
    <div className="mb-8">
      <Container>
        <div className="grid gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
          {employees.map((employee) => (
            <EmployeeCard key={employee.id} employee={employee} />
          ))}
        </div>
      </Container>
    </div>
  );
};

export default Employee;
