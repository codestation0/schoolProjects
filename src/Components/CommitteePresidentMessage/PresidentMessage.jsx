import axios from "axios";
import { useEffect, useState } from "react";
import Container from "../../Pages/Shared/Container";
import Sidebar from "../Sidebar/Sidebar";
const PresidentMessage = () => {
  const [message, setMessage] = useState([]);

  useEffect(() => {
    fetchPresidentMessage();
  }, []);

  const fetchPresidentMessage = async () => {
    const res = await axios.get(
      `${import.meta.env.VITE_BASE_URL}/sovapotirbani`
    );

    setMessage(res.data);
  };

  return (
    <>
      <Container>
        <div className="grid gap-4 md:grid-cols-[23rem_1fr]">
          <Sidebar />
          <div className="order-0 md:order-6">
            {message && Array.isArray(message) && message.length > 0 ? (
              <div className="border-4 border-primary-20/80 rounded-md">
                <h1 className="py-2 bg-primary-20/80 text-center  text-white text-xl font-medium">
                  সভাপতির বানী
                </h1>

                {message?.map((m) => (
                  <p key={m._id} className="p-3">
                    {m.description}
                  </p>
                ))}
              </div>
            ) : (
              <p>No Data Available</p>
            )}
          </div>
        </div>
      </Container>
    </>
  );
};

export default PresidentMessage;
