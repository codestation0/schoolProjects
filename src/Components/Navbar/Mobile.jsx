import { useState } from "react";
import { BiChevronRight, BiChevronDown } from "react-icons/bi";
import { MdClose } from "react-icons/md";
import { Link } from "react-router-dom";
const navData = [
  {
    id: 1,
    title: "প্রতিষ্ঠান পরিতিচি",
    children: ["পরিচিতি"],
  },
  {
    id: 2,
    title: "শিক্ষক ও কর্মচারীর তথ্য",
    children: ["শিক্ষকমণ্ডলী", "কর্মচারী"],
  },
  {
    id: 3,
    title: "পাঠদান সংক্রান্ত তথ্য",
    children: ["রুটিন", "পাঠ্যসূচী", "নোটিশ"],
  },

  {
    id: 4,
    title: "শাখার তথ্য",
    children: ["জাতীয়করণ তথ্য"],
  },
];

const Mobile = ({ showNav, handleNavbar }) => {
  const [isShow, setIsShow] = useState(null);
  const handleMenu = (text) => {
    setIsShow(text);
    if (isShow === text) {
      setIsShow(null);
    }
  };

  return (
    <div
      className={`min-h-screen w-[70%] bg-zinc-50 shadow-md fixed top-0 right-0 transition-all duration-500 md:hidden z-50 ${
        showNav && "translate-x-[110%]"
      }`}
    >
      <MdClose
        onClick={handleNavbar}
        className="absolute top-1/2 translate-y-1/2 -left-4 bg-rose-500 p-2 text-4xl text-white font-bold rounded-full cursor-pointer"
      />
      <div className="w-full">
        <Link
          onClick={handleNavbar}
          className="hover:bg-primary-20 hover:text-white list-none pl-6 py-2 cursor-pointer w-full block text-xl"
        >
          হোম
        </Link>
        {navData.map((item) => (
          <div key={item.id} className="relative group w-full ">
            <li
              onClick={() => handleMenu(item.id)}
              className={`list-none text-xl py-1  rounded-sm drop-shadow-md transition-all w-full border-b border-b-slate-200 flex justify-between items-center hover:bg-primary-20 hover:text-white ${
                isShow === item.id && "bg-primary-20 text-white"
              }`}
            >
              <span className=" py-2 rounded w-full block cursor-pointer pl-4">
                {item.title}
              </span>
              <span className="pr-2">
                {isShow === item.id ? (
                  <BiChevronDown size={25} />
                ) : (
                  <BiChevronRight size={25} />
                )}
              </span>
            </li>
            <div
              className={`max-h-0 overflow-hidden transition-all duration-300 bg-primary-30  ${
                isShow === item.id && "max-h-[99rem] transition-all"
              }`}
            >
              {/* TODO: SUBMENU  */}
              {item.children.map((child) => (
                <Link onClick={handleNavbar} to={`/${child}`} key={child}>
                  <li className="hover:bg-primary-20 list-none pl-6 py-2 cursor-pointer">
                    {child}
                  </li>
                </Link>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Mobile;
{
  /* <div className="group-hover:block bg-white list-none p-4 w-[15rem] hidden shadow-md absolute top-2 -right-[15rem] rounded-md z-50 space-y-1 border border-secondary-10/0">
  {item.children.map((child) => (
    <li className="hover:bg-rose-200" key={child}>
      {child}
    </li>
  ))}
</div>; */
}
