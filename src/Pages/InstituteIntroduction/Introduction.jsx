import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import InstituteHistory from "../../Components/InstituteHistory/InstituteHistory";
import Container from "../Shared/Container";
const institute = [
  {
    id: 114,
    name: "place",
    img: "https://images.pexels.com/photos/798721/pexels-photo-798721.jpeg?auto=compress&cs=tinysrgb&w=600",
  },
  {
    id: 1144,
    name: "place",
    img: "https://images.pexels.com/photos/5896843/pexels-photo-5896843.jpeg?auto=compress&cs=tinysrgb&w=600",
  },
  {
    id: 13144,
    name: "place",
    img: "https://images.pexels.com/photos/2565221/pexels-photo-2565221.jpeg?auto=compress&cs=tinysrgb&w=600",
  },
  {
    id: 6245,
    name: "place",
    img: "https://images.pexels.com/photos/3195186/pexels-photo-3195186.jpeg?auto=compress&cs=tinysrgb&w=600",
  },
];

const Introduction = () => {
  const { data: instituteinformation = [] } = useQuery({
    queryKey: ["instituteiImages"],
    queryFn: async () => {
      const res = await axios.get(
        `${import.meta.env.VITE_BASE_URL}/instituteinfo`
      );

      return res.data;
    },
  });

  return (
    <div className="my-6">
      <Container>
        <InstituteHistory />

        <div className="grid gap-4 sm:grid-cols-2 md:grid-cols-3">
          {instituteinformation[0]?.image.map((img, i) => (
            <div key={img + "" + i} className="rounded-md overflow-hidden">
              <img
                src={`${import.meta.env.VITE_BASE_URL}/${img.filename}`}
                alt=""
                className="w-full h-full hover:scale-110 transition-transform"
              />
            </div>
          ))}
        </div>
      </Container>
    </div>
  );
};

export default Introduction;
