import avatar from "../../assets/man.jpg";
const Sidebar = () => {
  return (
    <div className="bg-primary-10 rounded-md">
      <div className=" p-5">
        <div className="z-10">
          <img
            src={avatar}
            alt="teacher image"
            className="w-full max-w-[15rem] mx-auto rounded-md"
          />
        </div>
        <div className="text-center mt-2 space-y-2 text-white">
          <h2 className="text-lg font-bold">আব্দুল্লাহ আল মামুন</h2>
          <p className="text-sm">প্রধান শিক্ষক</p>
          <p className="text-sm">ফরিদপুর জিলা স্কুল</p>
        </div>
        <hr className=" text-zinc-300 mt-2" />
        <p className="pt-3 text-white">
          নিশ্বয় আল্লাহ মানুষ এবং জীন সৃষ্টি করেছেন একমাত্র তার ইবাদাত করার
          জন্য। (আল কোরআন)
        </p>
      </div>
    </div>
  );
};

export default Sidebar;
