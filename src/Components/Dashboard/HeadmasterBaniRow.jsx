import axios from "axios";
import { useState } from "react";
import toast from "react-hot-toast";
import DeleteModal from "../Modal/DeleteModal";
import HeadmasterBaniModal from "../Modal/HeadmasterBnaiModal";
const HeadmasterBaniRow = ({ bani = {}, refetch }) => {
  const { _id, description } = bani;
  const [isOpen, setIsOpen] = useState(false);
  const [isOpenEdit, setIsOpenEdit] = useState(false);
  const closeModal = () => {
    setIsOpen(false);
  };
  const closeModalEdit = () => {
    setIsOpenEdit(false);
  };

  const handleDelete = async (id) => {
    const res = await axios.delete(
      `${import.meta.env.VITE_BASE_URL}/delete-headmasterbani/${id}`
    );

    if (res.data.deletedCount > 0) {
      toast.success("Bani deleted successful");
      refetch();
    }
  };

  const modalHandler = (id) => {
    handleDelete(id);
  };

  return (
    <tr className="odd:bg-zinc-300 hover:bg-zinc-400 hover:text-white transition">
      <td className="px-6 py-4 whitespace-nowrap">
        <div className="text-sm text-gray-900">
          {description.slice(0, 150) + "..."}
        </div>
      </td>
      <td className="px-6 py-4  text-sm text-gray-500 flex flex-col gap-2 sm:flex-row text-right w-max mx-auto">
        <button
          onClick={() => setIsOpenEdit(true)}
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
        isOpen={isOpen}
        closeModal={closeModal}
        id={_id}
      />

      <HeadmasterBaniModal
        id={_id}
        isOpenEdit={isOpenEdit}
        closeModalEdit={closeModalEdit}
        refetch={refetch}
      />
    </tr>
  );
};

export default HeadmasterBaniRow;
