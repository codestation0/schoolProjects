<<<<<<< HEAD
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
  return (
    <div className="my-6">
      <Container>
        <div className="mb-6 border-4 border-primary-20/70 rounded-md">
          <h1 className="bg-primary-20/70 p-2 text-2xl font-bold text-center mb-2 text-white">
            প্রতিষ্ঠান পরিচিতি
          </h1>
          <p className="p-4">
            ইতিহাস ১৮৪০ সালে তৎকালীন ব্রিটিশ জেলা ম্যাজিস্ট্রেট এডগার এফ লুথার
            ইংলিশ সেমিনারি স্কুল নামে ফরিদপুরে একটি বিদ্যালয় প্রতিষ্ঠিত করেন।
            ১৮৫১ সালে এটির জাতীয়করণ হয় ও ব্রিটিশ সরকার বিদ্যালয় পরিচালনার খরচ
            ও দায়িত্বগ্রহণ করে। সেসময় বিদ্যালয়ের নতুন নাম ফরিদপুর জিলা স্কুল
            রাখা হয়।
          </p>
        </div>

        <div className="grid gap-4 sm:grid-cols-2 md:grid-cols-3">
          {institute.map(({ id, img }) => (
            <div key={id} className="rounded-md overflow-hidden">
              <img
                src={img}
=======
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
          {instituteinformation[0]?.image.map((img, i) => (
            <div key={img + "" + i} className="rounded-md overflow-hidden">
              <img
                src={`${import.meta.env.VITE_BASE_URL}/${img.filename}`}
>>>>>>> 691dfebce376a02b08f0e668c045badee015bc1f
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
