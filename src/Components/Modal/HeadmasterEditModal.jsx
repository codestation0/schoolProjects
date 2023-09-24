import { Dialog, Transition } from "@headlessui/react";
import { Fragment, useRef, useState } from "react";
import axios from "axios";
import { useQuery } from "@tanstack/react-query";

const TeacherEditModal = ({ refetch, closeModalEdit, isOpenEdit, id }) => {
  // console.log(id);
  //   const [description, setDescription] = useState("");
  //   const inputRef = useRef();
  const [formData, setFormData] = useState({
    name: "",

    phone: "",
    designation: "",
    First_Date_of_joining: "",
    Date_of_joining: "",
    Date_of_MPO: "",
    Date_of_birth: "",
    SSC: "",
    HSC: "",
    BA: "",
    HONS: "",
    M_ED: "",
    B_ED: "",
    Masters: "",
    M_Phil: "",
    PHD: "",
  });

  const { data: defaultHeadmasterInfo = {}, refetch: defaultRefetch } =
    useQuery({
      queryKey: ["singleheadmaster"],
      queryFn: async () => {
        const res = await axios.get(
          `${import.meta.env.VITE_BASE_URL}/single-headmaster/${id}`
        );

        return res.data;
      },
    });

  // Handle form input changes
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  // Handle form submission (you can implement the submission logic here)
  const modalHandlerEdit = async () => {
    await axios.patch(
      `${import.meta.env.VITE_BASE_URL}/update-headmasterinformation/${id}`,
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
                    <form className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4 w-full">
                      <div className="grid sm:grid-cols-2 gap-4 items-center">
                        <div className="mb-4">
                          <label
                            className="block text-primary-20/80 text-base font-bold mb-2"
                            htmlFor="name"
                          >
                            Name
                          </label>
                          <input
                            className="shadow appearance-none border rounded w-full py-2 px-3 text-primary-20/80 leading-tight focus:outline-none focus:shadow-outline"
                            type="text"
                            id="name"
                            name="name"
                            onChange={handleInputChange}
                            defaultValue={defaultHeadmasterInfo.name}
                          />
                        </div>

                        <div className="mb-4">
                          <label
                            className="block text-primary-20/80 text-base font-bold mb-2"
                            htmlFor="phone"
                          >
                            Phone
                          </label>
                          <input
                            className="shadow appearance-none border rounded w-full py-2 px-3 text-primary-20/80 leading-tight focus:outline-none focus:shadow-outline"
                            type="phone"
                            id="phone"
                            name="phone"
                            onChange={handleInputChange}
                            defaultValue={defaultHeadmasterInfo.phone}
                          />
                        </div>

                        <div className="mb-4">
                          <label
                            className="block text-primary-20/80 text-base font-bold mb-2"
                            htmlFor="designation"
                          >
                            designation
                          </label>
                          <input
                            className="shadow appearance-none border rounded w-full py-2 px-3 text-primary-20/80 leading-tight focus:outline-none focus:shadow-outline"
                            type="text"
                            id="designation"
                            name="designation"
                            onChange={handleInputChange}
                            defaultValue={defaultHeadmasterInfo.designation}
                          />
                        </div>

                        <div className="mb-4">
                          <label
                            className="block text-primary-20/80 text-base font-bold mb-2"
                            htmlFor="phone"
                          >
                            First Date of joining
                          </label>
                          <input
                            className="shadow appearance-none border rounded w-full py-2 px-3 text-primary-20/80 leading-tight focus:outline-none focus:shadow-outline"
                            type="text"
                            id="First_Date_of_joining"
                            name="First_Date_of_joining"
                            onChange={handleInputChange}
                            defaultValue={
                              defaultHeadmasterInfo.First_Date_of_joining
                            }
                          />
                        </div>

                        <div className="mb-4">
                          <label
                            className="block text-primary-20/80 text-base font-bold mb-2"
                            htmlFor="phone"
                          >
                            Date of joining
                          </label>
                          <input
                            className="shadow appearance-none border rounded w-full py-2 px-3 text-primary-20/80 leading-tight focus:outline-none focus:shadow-outline"
                            type="text"
                            id="Date_of_joining"
                            name="Date_of_joining"
                            onChange={handleInputChange}
                            defaultValue={defaultHeadmasterInfo.Date_of_joining}
                          />
                        </div>
                        <div className="mb-4">
                          <label
                            className="block text-primary-20/80 text-base font-bold mb-2"
                            htmlFor="phone"
                          >
                            Date of MPO
                          </label>
                          <input
                            className="shadow appearance-none border rounded w-full py-2 px-3 text-primary-20/80 leading-tight focus:outline-none focus:shadow-outline"
                            type="text"
                            id="Date_of_MPO"
                            name="Date_of_MPO"
                            onChange={handleInputChange}
                            defaultValue={defaultHeadmasterInfo.Date_of_MPO}
                          />
                        </div>

                        <div className="mb-4">
                          <label
                            className="block text-primary-20/80 text-base font-bold mb-2"
                            htmlFor="phone"
                          >
                            Date of birth
                          </label>
                          <input
                            className="shadow appearance-none border rounded w-full py-2 px-3 text-primary-20/80 leading-tight focus:outline-none focus:shadow-outline"
                            type="text"
                            id="Date_of_birth"
                            name="Date_of_birth"
                            onChange={handleInputChange}
                            defaultValue={defaultHeadmasterInfo.Date_of_birth}
                          />
                        </div>

                        <div className="mb-4">
                          <label
                            className="block text-primary-20/80 text-base font-bold mb-2"
                            htmlFor="SSC"
                          >
                            SSC
                          </label>
                          <input
                            className="shadow appearance-none border rounded w-full py-2 px-3 text-primary-20/80 leading-tight focus:outline-none focus:shadow-outline"
                            type="text"
                            id="SSC"
                            name="SSC"
                            onChange={handleInputChange}
                            defaultValue={defaultHeadmasterInfo.SSC}
                          />
                        </div>

                        <div className="mb-4">
                          <label
                            className="block text-primary-20/80 text-base font-bold mb-2"
                            htmlFor="phone"
                          >
                            HSC
                          </label>
                          <input
                            className="shadow appearance-none border rounded w-full py-2 px-3 text-primary-20/80 leading-tight focus:outline-none focus:shadow-outline"
                            type="text"
                            id="HSC"
                            name="HSC"
                            onChange={handleInputChange}
                            defaultValue={defaultHeadmasterInfo.HSC}
                          />
                        </div>

                        <div className="mb-4">
                          <label
                            className="block text-primary-20/80 text-base font-bold mb-2"
                            htmlFor="BA"
                          >
                            BA
                          </label>
                          <input
                            className="shadow appearance-none border rounded w-full py-2 px-3 text-primary-20/80 leading-tight focus:outline-none focus:shadow-outline"
                            type="text"
                            id="BA"
                            name="BA"
                            onChange={handleInputChange}
                            defaultValue={defaultHeadmasterInfo.BA}
                          />
                        </div>

                        <div className="mb-4">
                          <label
                            className="block text-primary-20/80 text-base font-bold mb-2"
                            htmlFor="HONS"
                          >
                            HONS
                          </label>
                          <input
                            className="shadow appearance-none border rounded w-full py-2 px-3 text-primary-20/80 leading-tight focus:outline-none focus:shadow-outline"
                            type="text"
                            id="HONS"
                            name="HONS"
                            onChange={handleInputChange}
                            defaultValue={defaultHeadmasterInfo.HONS}
                          />
                        </div>

                        <div className="mb-4">
                          <label
                            className="block text-primary-20/80 text-base font-bold mb-2"
                            htmlFor="M_ED"
                          >
                            M ED
                          </label>
                          <input
                            className="shadow appearance-none border rounded w-full py-2 px-3 text-primary-20/80 leading-tight focus:outline-none focus:shadow-outline"
                            type="text"
                            id="M_ED"
                            name="M_ED"
                            onChange={handleInputChange}
                            defaultValue={defaultHeadmasterInfo.M_ED}
                          />
                        </div>

                        <div className="mb-4">
                          <label
                            className="block text-primary-20/80 text-base font-bold mb-2"
                            htmlFor="B_ED"
                          >
                            B ED
                          </label>
                          <input
                            className="shadow appearance-none border rounded w-full py-2 px-3 text-primary-20/80 leading-tight focus:outline-none focus:shadow-outline"
                            type="text"
                            id="B_ED"
                            name="B_ED"
                            onChange={handleInputChange}
                            defaultValue={defaultHeadmasterInfo.B_ED}
                          />
                        </div>

                        <div className="mb-4">
                          <label
                            className="block text-primary-20/80 text-base font-bold mb-2"
                            htmlFor="Masters"
                          >
                            Masters
                          </label>
                          <input
                            className="shadow appearance-none border rounded w-full py-2 px-3 text-primary-20/80 leading-tight focus:outline-none focus:shadow-outline"
                            type="text"
                            id="Masters"
                            name="Masters"
                            onChange={handleInputChange}
                            defaultValue={defaultHeadmasterInfo.Masters}
                          />
                        </div>

                        <div className="mb-4">
                          <label
                            className="block text-primary-20/80 text-base font-bold mb-2"
                            htmlFor="M_Phil"
                          >
                            M_Phil
                          </label>
                          <input
                            className="shadow appearance-none border rounded w-full py-2 px-3 text-primary-20/80 leading-tight focus:outline-none focus:shadow-outline"
                            type="text"
                            id="M_Phil"
                            name="M_Phil"
                            onChange={handleInputChange}
                            defaultValue={defaultHeadmasterInfo.M_Phil}
                          />
                        </div>

                        <div className="mb-4">
                          <label
                            className="block text-primary-20/80 text-base font-bold mb-2"
                            htmlFor="PHD"
                          >
                            PHD
                          </label>
                          <input
                            className="shadow appearance-none border rounded w-full py-2 px-3 text-primary-20/80 leading-tight focus:outline-none focus:shadow-outline"
                            type="text"
                            id="PHD"
                            name="PHD"
                            onChange={handleInputChange}
                            defaultValue={defaultHeadmasterInfo.PHD}
                          />
                        </div>
                      </div>

                      {/* TODO: SUBMIT BUTTON */}
                      {/* <div className="flex items-center justify-between">
                        <button
                          className="bg-primary-20/80 hover:bg-primary-20 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline w-full"
                          type="submit"
                        >
                          Add Teacher
                        </button>
                      </div> */}
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

export default TeacherEditModal;
