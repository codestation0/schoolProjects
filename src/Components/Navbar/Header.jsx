<<<<<<< HEAD
import Container from "../../Pages/Shared/Container";
import mujib from "../../assets/sotobarshiki.jpg";
import logo from "../../assets/logo.jpg";
const Header = () => {
=======
import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import Container from "../../Pages/Shared/Container";
import mujib from "../../assets/sotobarshiki.jpg";
const Header = () => {
  const { data: schools = [] } = useQuery({
    queryKey: ["school-information"],
    queryFn: async () => {
      const res = await axios.get(
        `${import.meta.env.VITE_BASE_URL}/all-school-information`
      );

      return res.data;
    },
  });

>>>>>>> 691dfebce376a02b08f0e668c045badee015bc1f
  return (
    <div className="bg-primary-10/70 py-4 sm:py-6 text-white  relative">
      <Container>
        <div className="text-center flex items-center gap-4 justify-between">
<<<<<<< HEAD
          <div className="flex items-center gap-2">
            <img src={logo} alt="logo" className="w-20 " />
            <div className="">
              <h1 className=" sm:text-3xl font-bold mb-2">
                ফরিদপুর জেলা স্কুল ফরিদপুর
              </h1>
              <p>স্কুল কোড:ঃ ৩৫২৫, কলেজ কোডঃ ৮৩৪৪</p>
            </div>
          </div>
=======
          {schools.map((school) => (
            <div className="flex items-center gap-2" key={school._id}>
              <img
                src={`${import.meta.env.VITE_BASE_URL}/${school.image}`}
                alt="logo"
                className="w-20 h-20 object-cover"
              />
              <div className="">
                <h1 className=" sm:text-3xl font-bold mb-2">{school.name}</h1>
                <p>স্কুল কোডঃ {school.code}</p>
              </div>
            </div>
          ))}
>>>>>>> 691dfebce376a02b08f0e668c045badee015bc1f
          <img src={mujib} alt="" className="w-28 h-auto" />
        </div>
      </Container>
    </div>
  );
};

export default Header;
