import LastNews from "../../Components/RightSidebar/LastNews";
import Container from "../Shared/Container";

const Notice = () => {
  return (
    <Container>
      <div className="grid gap-2 lg:grid-cols-2">
        <div className="border-4 rounded-md border-primary-20/70 mb-8 h-max">
          <h1 className="bg-primary-20/70 p-3 text-center text-2xl text-zinc-900">
            নোটিশ বোর্ড
          </h1>
          <div className="grid gap-2 grid-cols-[10rem_1fr] bg-primary-30 py-2 px-1 border-b-2 border-blue-700 border-dotted mb-2">
            <div className="flex flex-col text-center font-bold text-lg ">
              <span className="bg-primary-10/70 text-white">Dec</span>
              <span className="bg-white">01</span>
            </div>
            <p>
              একাদশ শ্রেণিতে ২০২২-২০২৩ শিক্ষাবর্ষে ভর্তির জন্য প্রয়োজনীয়
              কাগজপত্র
            </p>
          </div>
          <div className="grid gap-2 grid-cols-[10rem_1fr] bg-primary-30 py-2 px-1 border-b-2 border-blue-700 border-dotted mb-2">
            <div className="flex flex-col text-center font-bold text-lg ">
              <span className="bg-primary-10/70 text-white">Dec</span>
              <span className="bg-white">01</span>
            </div>
            <p>
              একাদশ শ্রেণিতে ২০২২-২০২৩ শিক্ষাবর্ষে ভর্তির জন্য প্রয়োজনীয়
              কাগজপত্র
            </p>
          </div>
          <div className="grid gap-2 grid-cols-[10rem_1fr] bg-primary-30 py-2 px-1 border-b-2 border-blue-700 border-dotted mb-2">
            <div className="flex flex-col text-center font-bold text-lg ">
              <span className="bg-primary-10/70 text-white">Dec</span>
              <span className="bg-white">01</span>
            </div>
            <p>
              একাদশ শ্রেণিতে ২০২২-২০২৩ শিক্ষাবর্ষে ভর্তির জন্য প্রয়োজনীয়
              কাগজপত্র
            </p>
          </div>
        </div>
        <LastNews />
      </div>
    </Container>
  );
};

export default Notice;
