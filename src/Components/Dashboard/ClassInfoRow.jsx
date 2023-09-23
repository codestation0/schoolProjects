import axios from "axios";
import { useState } from "react";
import toast from "react-hot-toast";
import DeleteModal from "../../Components/Modal/DeleteModal";
import ClassInfoModal from "../Modal/ClassInfoModal";

const ClassInfoRow = ({ headmaster, refetch }) => {
  const { _id, class: classes, male, female } = headmaster;
  const [isOpen, setIsOpen] = useState(false);
  const [isEditOpen, setEditIsOpen] = useState(false);

  const handleDelete = async (id) => {
    const res = await axios.delete(
      `${import.meta.env.VITE_BASE_URL}/delete-classinfo/${id}`
    );

    if (res.data.deletedCount > 0) {
      toast.success(" deleted successfully");
      refetch();
    }
  };

  const modalHandler = (id) => {
    handleDelete(id);
  };

  const closeModal = () => {
    setIsOpen(false);
  };
  const closeModalEdit = () => {
    setEditIsOpen(false);
  };

  return (
    <tr className="odd:bg-zinc-300 hover:bg-zinc-400 hover:text-white transition">
      <td className="px-6 py-2">
        <div className="text-sm text-gray-900">{classes}</div>
      </td>
      <td className="px-6 py-4 whitespace-nowrap">
        <div className="text-sm text-gray-900">{male}</div>
      </td>
      <td className="px-6 py-4 whitespace-nowrap">
        <div className="text-sm text-gray-900">{female}</div>
      </td>
      <td className="px-6 py-4  text-sm text-gray-500 flex flex-col gap-2 sm:flex-row text-right w-max mx-auto">
        <button
          onClick={() => setEditIsOpen(true)}
          className="py-1 px-4 rounded-md drop-shadow-md bg-primary-20/90 text-white font-semibold
         "
        >
          Edit
        </button>
        <button
          onClick={() => setIsOpen(true)}
          className="py-1 px-4 bg-red-500 drop-shadow-md text-white rounded-md"
        >
          Delete
        </button>
      </td>

      <DeleteModal
        modalHandler={modalHandler}
        closeModal={closeModal}
        isOpen={isOpen}
        id={_id}
      />
      <ClassInfoModal
        closeModalEdit={closeModalEdit}
        isOpenEdit={isEditOpen}
        id={_id}
        refetch={refetch}
      />
    </tr>
  );
};

export default ClassInfoRow;
