import { useEffect, useState } from "react";
import { deleteNotice } from "../../utils/utils";
import toast from "react-hot-toast";
import { BsFileEarmarkPdf } from "react-icons/bs";
const RoutineCard = ({ routine, refetch }) => {
  const { _id, selectedClass, filename } = routine;
  const [user, setUser] = useState(false);
  const email = localStorage.getItem("email");
  useEffect(() => {
    if (email) {
      setUser(true);
    } else {
      setUser(false);
    }
  }, [email, user]);

  const handleNoticeDelete = (id) => {
    deleteNotice(id).then((res) => {
      if (res.deletedCount > 0) {
        toast.success("Successfully Deleted");
        refetch();
      }
    });
  };

  return (
    <>
      <div className="flex justify-between items-center   bg-primary-30 py-2 px-1 border-b-2 border-blue-700 border-dotted mb-2">
        <div>
          <p className="text-xl font-bold">{selectedClass}</p>
          <p className="text-lg flex items-center gap-1 text-red-500">
            <BsFileEarmarkPdf color="red" /> {filename}
          </p>
        </div>
        <div className="flex flex-col gap-3">
          <button className="text-white bg-primary-20  transition py-1 px-2 rounded-md drop-shadow-md uppercase">
            <a href="" download={filename}>
              {" "}
              Download
            </a>
          </button>
          {/* TODO: CONDITIONALLY SHOW BUTTON */}
          {user && (
            <button
              onClick={() => handleNoticeDelete(_id)}
              className="text-white bg-rose-500  transition py-1 px-2 rounded-md drop-shadow-md uppercase"
            >
              Delete
            </button>
          )}
        </div>
      </div>
    </>
  );
};

export default RoutineCard;
