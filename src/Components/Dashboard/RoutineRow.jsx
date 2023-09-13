import axios from "axios";
import toast from "react-hot-toast";
import { BsFileEarmarkPdf } from "react-icons/bs";

const RoutineRow = ({ routine, refetch }) => {
  const { _id, selectedClass, filename } = routine;

  const handleDelete = async (id) => {
    const res = await axios.delete(
      `${import.meta.env.VITE_BASE_URL}/delete-routine/${id}`
    );

    if (res.data.deletedCount > 0) {
      toast.success("Teacher deleted successfully");
      refetch();
    }
  };

  return (
    <tr className="odd:bg-zinc-300 hover:bg-zinc-400 hover:text-white transition">
      <td className="px-6 py-2">
        <div className="flex sm:items-center gap-2">
          <BsFileEarmarkPdf className="block text-red-500 " size={25} />
          {filename}
        </div>
      </td>
      <td className="px-6 py-4 whitespace-nowrap">
        <div className="text-sm text-gray-900">{selectedClass}</div>
      </td>

      <td className="px-6 py-4  text-sm text-gray-500 flex flex-col gap-2 sm:flex-row text-right w-max mx-auto">
        <button
          onClick={() => handleDelete(_id)}
          className="py-1 px-4 bg-red-500 drop-shadow-md text-white rounded-md"
        >
          Delete
        </button>
      </td>
    </tr>
  );
};

export default RoutineRow;
