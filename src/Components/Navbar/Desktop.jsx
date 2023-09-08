const navData = [
  {
    id: 1,
    title: "প্রতিষ্ঠান পরিতিচি",
    children: ["item1 itishas", "item2 biboron"],
  },
  {
    id: 2,
    title: "পাঠদান সংক্রান্ত তথ্য",
    children: ["রুটিন", "পাঠ্যসূচী", "নোটিশ"],
  },
  {
    id: 3,
    title: "শাখার তথ্য",
    children: ["item5 itishas", "item6 biboron"],
  },
];
const Desktop = () => {
  return (
    <ul className="relative gap-2 items-center text-lg hidden md:flex">
      {" "}
      <li className="hover:bg-primary-20/30 px-2 py-1  rounded-md text-xl">
        হোম
      </li>
      {navData.map((item) => (
        <li
          key={item.id}
          className="cursor-pointer relative group hover:bg-primary-30 py-1 px-2 rounded-md drop-shadow-md"
        >
          {item.title}

          <ul className="scale-y-0 min-w-[10rem] max-w-[20rem] h-0 bg-white overflow-hidden p-2 absolute top-9 left-0 rounded-md drop-shadow-lg transition-all group-hover:transition-all group-hover:h-max group-hover:opacity-100 z-20 group-hover:block group-hover:scale-y-100">
            {item.children.map((child) => (
              <li
                key={child}
                className="hover:bg-primary-20/30 px-2 py-1 text-base rounded-md"
              >
                {child}
              </li>
            ))}
          </ul>
        </li>
      ))}
    </ul>
  );
};

export default Desktop;
