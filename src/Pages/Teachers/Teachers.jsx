import Container from "../Shared/Container";
<<<<<<< HEAD
import { v4 as uuidv4 } from "uuid";
import TeacherCard from "./TeacherCard";
import avater from "../../assets/avater.jpg";
import Sidebar from "../../Components/Sidebar/Sidebar";
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
=======
import TeacherCard from "./TeacherCard";
import Sidebar from "../../Components/Sidebar/Sidebar";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";

const Teachers = () => {
  const { data: teachers = [], isLoading } = useQuery({
    queryKey: ["teachers"],
    queryFn: async () => {
      try {
        const res = await axios.get(
          `${import.meta.env.VITE_BASE_URL}/all-teachers`
        );
        return res.data;
      } catch (error) {
        console.log(error);
      }
    },
  });

>>>>>>> 691dfebce376a02b08f0e668c045badee015bc1f
  return (
    <div className="white mb-6">
      <Container>
        <div className="grid gap-4 md:grid-cols-[23rem_1fr]">
          <Sidebar />
<<<<<<< HEAD
          <div>
=======
          <div className="order-0 md:order-6">
>>>>>>> 691dfebce376a02b08f0e668c045badee015bc1f
            <h1 className="text-center text-xl sm:text-2xl font-bold bg-primary-20/70 p-2 text-white my-3 rounded-md">
              আমাদের সম্মানীয় শিক্ষকমণ্ডলীগন
            </h1>
            <div className="grid gap-4 sm:grid-cols-2 md:grid-cols-3 ">
              {teachers.map((teacher) => (
<<<<<<< HEAD
                <TeacherCard key={teacher.id} teacher={teacher} />
=======
                <TeacherCard key={teacher._id} teacher={teacher} />
>>>>>>> 691dfebce376a02b08f0e668c045badee015bc1f
              ))}
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Teachers;
