import { Dialog, Transition } from "@headlessui/react";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { Fragment, useState } from "react";

const ClassInfoModal = ({ refetch, closeModalEdit, isOpenEdit, id }) => {
  const [formData, setFormData] = useState({
    class: "", // Default class selection as '6'
    male: "",
    female: "",
    total: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const { data: defaultInfo = {}, refetch: defaultRefetch } = useQuery({
    queryKey: ["singleclassinfo", id],
    queryFn: async () => {
      const res = await axios.get(
        `${import.meta.env.VITE_BASE_URL}/single-classinfo/${id}`
      );
      return res.data;
    },
  });

  // Handle form submission (you can implement the submission logic here)
  const modalHandlerEdit = async () => {
    await axios.patch(
      `${import.meta.env.VITE_BASE_URL}/update-classinfo/${id}`,
      formData
    );
    closeModalEdit();
  };

  defaultRefetch();
  refetch();

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
                  <p className="text-sm text-gray-500">
                    You edit your information
                  </p>
                </div>
                <hr className="mt-8 " />
                <div className="mb-4">
                  <div className="max-w-screen-lg mx-auto mt-5  w-full">
                    <form className="">
                      <div className="grid gap-3 sm:grid-cols-2">
                        <div className="mb-4">
                          <label className="block text-gray-700 text-sm font-bold mb-2">
                            শ্রেণীঃ
                          </label>
                          <select
                            className="border rounded w-full py-2 px-3"
                            name="class"
                            onChange={handleChange}
                            defaultValue={defaultInfo.class}
                          >
                            <option value="6">৬ম</option>
                            <option value="7">৭ম</option>
                            <option value="8">৮ম</option>
                            <option value="9">৯ম</option>
                            <option value="10">১০ম</option>
                          </select>
                        </div>
                        <div className="mb-4">
                          <label className="block text-gray-700 text-sm font-bold mb-2">
                            ছেলেঃ
                          </label>
                          <input
                            type="number"
                            className="border rounded w-full py-2 px-3"
                            name="male"
                            onChange={handleChange}
                            defaultValue={defaultInfo.male}
                          />
                        </div>
                        <div className="mb-4">
                          <label className="block text-gray-700 text-sm font-bold mb-2">
                            মেয়েঃ
                          </label>
                          <input
                            type="number"
                            className="border rounded w-full py-2 px-3"
                            name="female"
                            onChange={handleChange}
                            defaultValue={defaultInfo.female}
                          />
                        </div>
                      </div>
                    </form>
                  </div>
                </div>

                <div className="flex mt-2 justify-around">
                  <button
                    type="button"
                    className="inline-flex justify-center rounded-md border border-transparent bg-red-100 px-4 py-2 text-sm font-medium text-red-900 hover:bg-red-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-red-500 focus-visible:ring-offset-2"
                    onClick={modalHandlerEdit}
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

export default ClassInfoModal;
