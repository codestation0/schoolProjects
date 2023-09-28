import { Link } from "react-router-dom";
const navData = [
  {
    id: 41,
    title: "প্রতিষ্ঠান পরিতিচি",
    children: ["পরিচিতি", "সভাপতির-বানী"],
  },
  {
    id: 2,
    title: "শিক্ষক ও কর্মচারীর তথ্য",
    children: ["শিক্ষকমণ্ডলী", "কর্মচারী", "কমিটি-সদস্য"],
  },
  {
    id: 3,
    title: "পাঠদান সংক্রান্ত তথ্য",
    children: ["নোটিশ", "রুটিন", "পাঠ্যসূচী", "শাখার তথ্য"],
  },
];

const Desktop = () => {
  return (
    <ul className="relative gap-2 items-center text-base hidden md:flex text-white">
      {" "}
      <Link to="/" className="block">
        <li className="hover:bg-primary-30 py-1 px-2  rounded-md text-base hover:text-black cursor-pointer">
          হোম
        </li>
      </Link>
      {navData.map((item) => (
        <li
          key={item.id}
          className="cursor-pointer relative group hover:bg-primary-30 py-1 px-2 rounded-md drop-shadow-md hover:text-black"
        >
          {item.title}

          <ul className="scale-y-0 min-w-[10rem] max-w-[20rem] h-0 bg-zinc-100 overflow-hidden p-2 absolute top-9 left-0 rounded-md drop-shadow-lg transition-all group-hover:transition-all group-hover:h-max group-hover:opacity-100  group-hover:block group-hover:scale-y-100 z-[]">
            {item.children.map((child) => (
              <Link to={`/${child}`} key={child}>
                <li className="hover:bg-primary-20/30 px-2 py-1 text-base rounded-md">
                  {child}
                </li>
              </Link>
            ))}
          </ul>
        </li>
      ))}
    </ul>
  );
};

export default Desktop;
