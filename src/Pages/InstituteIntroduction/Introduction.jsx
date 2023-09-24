import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import InstituteHistory from "../../Components/InstituteHistory/InstituteHistory";
import Container from "../Shared/Container";

const Introduction = () => {
  const { data: instituteinformation = [] } = useQuery({
    queryKey: ["instituteiimages"],
    queryFn: async () => {
      const res = await axios.get(
        `${import.meta.env.VITE_BASE_URL}/instituteimages`
      );

      return res.data;
    },
  });

  return (
    <div className="my-6">
      <Container>
        <InstituteHistory />

        <div className="grid gap-4 sm:grid-cols-2 md:grid-cols-3">
          {instituteinformation[0]?.image?.map((img, i) => (
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
