import { Dialog, Transition } from "@headlessui/react";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { Fragment, useRef, useState } from "react";
const SovapotirbaniEditModal = ({
  refetch,
  closeModalEdit,
  isOpenEdit,
  id,
}) => {
  const [description, setDescription] = useState("");
  const inputRef = useRef();

  const { data: defaultDesc = {}, refetch: defaultRefetch } = useQuery({
    queryKey: ["single-sovapotirbani", id],
    queryFn: async () => {
      const res = await axios.get(
        `${import.meta.env.VITE_BASE_URL}/single-sovapotirbani/${id}`
      );
      return res.data.description;
    },
  });

  const handleInputChange = () => {
    setDescription(inputRef.current.value);
  };

  const modalHandlerEdit = async (id) => {
    await axios.patch(`${import.meta.env.VITE_BASE_URL}/${id}`, {
      description,
    });

    refetch();
    defaultRefetch();
    closeModalEdit();
  };

  return (
    <Transition appear show={isOpenEdit} as={Fragment}>
      <Dialog as="div" className="relative z-10" onClose={closeModalEdit}>
        <Transition.Child
          as={Fragment}
          enter="ease-out duration-300"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="ease-in duration-200"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <div className="fixed inset-0 bg-black bg-opacity-25" />
        </Transition.Child>

        <div className="fixed inset-0 overflow-y-auto">
          <div className="flex min-h-full items-center justify-center p-4 text-center">
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0 scale-95"
              enterTo="opacity-100 scale-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100 scale-100"
              leaveTo="opacity-0 scale-95"
            >
              <Dialog.Panel className="w-full max-w-md transform overflow-hidden rounded-2xl bg-white p-6 text-left align-middle shadow-xl transition-all">
                <Dialog.Title
                  as="h3"
                  className="text-lg font-medium leading-6 text-gray-900"
                >
                  Are you sure?
                </Dialog.Title>
                <div className="mt-2">
                  <p className="text-sm text-gray-500">You edit your content</p>
                </div>
                <hr className="mt-8 " />
                <div className="mb-4">
                  <label
                    className="block text-primary-20/80 text-base font-bold mb-2"
                    htmlFor="message"
                  >
                    Message
                  </label>
                  <textarea
                    className="shadow appearance-none border rounded w-full py-2 px-3 text-primary-20/80 leading-tight focus:outline-none focus:shadow-outline"
                    ref={inputRef}
                    required
                    type="text"
                    id="message"
                    name="message"
                    defaultValue={defaultDesc}
                    onChange={handleInputChange}
                    cols="20"
                    rows="10"
                  ></textarea>
                </div>

                <div className="flex mt-2 justify-around">
                  <button
                    type="button"
                    className="inline-flex justify-center rounded-md border border-transparent bg-red-100 px-4 py-2 text-sm font-medium text-red-900 hover:bg-red-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-red-500 focus-visible:ring-offset-2"
                    onClick={() => modalHandlerEdit(id)}
                  >
                    Yes
                  </button>
                  <button
                    type="button"
                    className="inline-flex justify-center rounded-md border border-transparent bg-green-100 px-4 py-2 text-sm font-medium text-green-900 hover:bg-green-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-green-500 focus-visible:ring-offset-2"
                    onClick={closeModalEdit}
                  >
                    No
                  </button>
                </div>
              </Dialog.Panel>
            </Transition.Child>
          </div>
        </div>
      </Dialog>
    </Transition>
  );
};

export default SovapotirbaniEditModal;
