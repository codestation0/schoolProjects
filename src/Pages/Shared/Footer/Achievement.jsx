import axios from "axios";
import { useEffect, useState } from "react";
import { MdSchool } from "react-icons/md";
const Achievement = () => {
  const [achievements, setAchievements] = useState([]);

  useEffect(() => {
    fetchAchievements();
  }, []);

  const fetchAchievements = async () => {
    const res = await axios.get(`${import.meta.env.VITE_BASE_URL}/achievement`);
    setAchievements(res.data);
  };

  return (
    <>
      {achievements &&
      Array.isArray(achievements) &&
      achievements.length > 0 ? (
        <div className="text-base">
          <h1 className="text-lg font-bold mb-2">পুরস্কার</h1>
          {achievements?.map((achievement) => (
            <p
              className="flex items-center gap-1 text-zinc-200"
              key={achievement._id}
            >
              <MdSchool size={20} />
              <span className="text-sm">{achievement.achievement}</span>
            </p>
          ))}
        </div>
      ) : (
        <p>No Footer Data available</p>
      )}
    </>
  );
};

export default Achievement;
