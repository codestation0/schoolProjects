import axios from "axios";
import { useEffect, useState } from "react";
const Communication = () => {
  const [communication, setCommunication] = useState([]);

  useEffect(() => {
    fetchCommunicationData();
  }, []);

  const fetchCommunicationData = async () => {
    const res = await axios.get(
      `${import.meta.env.VITE_BASE_URL}/communication`
    );
    setCommunication(res.data);
  };

  return (
    <>
      {communication &&
      Array.isArray(communication) &&
      communication.length > 0 ? (
        <div className="text-base">
          <h1 className="text-lg font-bold mb-2">যোগাযোগের তথ্য</h1>
          {communication.map((data) => (
            <ul className="text-zinc-200 space-y-2" key={data._id}>
              <li>{data.schoolName}</li>
              <li>{data.address}</li>
              <li> ফোনঃ {data.phone} </li>
              <li>ই-মেইলঃ {data.email}</li>
            </ul>
          ))}
        </div>
      ) : (
        <p>No Footer Data available</p>
      )}
    </>
  );
};

export default Communication;
