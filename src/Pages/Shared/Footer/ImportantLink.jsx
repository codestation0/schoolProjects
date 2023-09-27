import axios from "axios";
import { useEffect, useState } from "react";
import { HiChevronRight } from "react-icons/hi";

const ImportantLink = () => {
  const [links, setLinks] = useState([]);
  useEffect(() => {
    fetchlinksData();
  }, []);

  const fetchlinksData = async () => {
    const res = await axios.get(
      `${import.meta.env.VITE_BASE_URL}/all-important-links`
    );
    setLinks(res.data);
  };

  return (
    <>
      {links && Array.isArray(links) && links.length > 0 ? (
        <div className="text-base">
          <h1 className="text-lg font-bold mb-2">যোগাযোগের তথ্য</h1>
          {links.map((data) => (
            <ul className="text-zinc-200 space-y-2" key={data._id}>
              <li className="flex items-center hover:underline font-thin cursor-pointer">
                <HiChevronRight size={20} className="block mt-1" />
                <a href={data.item.http} className="block">
                  {data.item.name}
                </a>
              </li>
            </ul>
          ))}
        </div>
      ) : (
        <p>No Footer Data available</p>
      )}
    </>
  );
};

export default ImportantLink;
