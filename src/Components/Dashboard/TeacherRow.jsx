import axios from "axios";
import toast from "react-hot-toast";

const TeacherRow = ({ teacher, refetch }) => {
  const { _id, name, image, phone } = teacher;

  const handleDelete = async (id) => {
    const res = await axios.delete(
      `${import.meta.env.VITE_BASE_URL}/delete-teacher/${id}`
    );

    if (res.data.deletedCount > 0) {
      toast.success("Teacher deleted successfully");
      refetch();
    }
  };

  return (
    <tr className="odd:bg-zinc-300 hover:bg-zinc-400 hover:text-white transition">
      <td className="px-6 py-2">
        <div className="flex items-center">
          <div className="flex-shrink-0 h-12 w-12">
            <img
              className="h-full w-full rounded-md border border-zinc-400 block object-cover"
              src={`${import.meta.env.VITE_BASE_URL}/${image}`}
              alt={`Image of ${name}`}
            />
          </div>
        </div>
      </td>
      <td className="px-6 py-4 whitespace-nowrap">
        <div className="text-sm text-gray-900">{name}</div>
      </td>
      <td className="px-6 py-4 whitespace-nowrap">
        <div className="text-sm text-gray-900">{phone}</div>
      </td>
      <td className="px-6 py-4  text-sm text-gray-500 flex flex-col gap-2 sm:flex-row text-right w-max mx-auto">
        <button
          className="py-1 px-4 rounded-md drop-shadow-md bg-primary-20/90 text-white font-semibold
         "
        >
          Edit
        </button>
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

export default TeacherRow;
