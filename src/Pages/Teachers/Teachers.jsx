import Container from "../Shared/Container";
import { v4 as uuidv4 } from "uuid";
import TeacherCard from "./TeacherCard";
import avater from "../../assets/avater.jpg";
const teachers = [
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
const Teachers = () => {
  return (
    <div className="white mb-6">
      <Container>
        <h1 className="text-center text-xl sm:text-2xl font-bold bg-primary-20/70 p-2 text-white my-3 rounded-md">
          আমাদের সম্মানীয় শিক্ষকমণ্ডলীগন
        </h1>
        <div className="grid gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
          {teachers.map((teacher) => (
            <TeacherCard key={teacher.id} teacher={teacher} />
          ))}
        </div>
      </Container>
    </div>
  );
};

export default Teachers;
