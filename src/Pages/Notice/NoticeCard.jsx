import { deleteNotice } from "../../utils/utils";
import toast from "react-hot-toast";
const NoticeCard = ({ notice, refetch }) => {
  const { _id, date, month, description } = notice;

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
      <div className="grid gap-2 grid-cols-[10rem_1fr]   bg-primary-30 py-2 px-1 border-b-2 border-blue-700 border-dotted mb-2">
        <div className="flex flex-col text-center font-bold text-lg ">
          <span className="bg-primary-10/70 text-white">{month}</span>
          <span className="bg-white">{date.split("-")[1]}</span>
        </div>
        <p className="break-all">{description}</p>
        <button
          onClick={() => handleNoticeDelete(_id)}
          className="text-white bg-rose-500 hover:bg-rose-600 transition py-1 px-2 rounded-sm drop-shadow-md"
        >
          Delete
        </button>
      </div>
    </>
  );
};

export default NoticeCard;
