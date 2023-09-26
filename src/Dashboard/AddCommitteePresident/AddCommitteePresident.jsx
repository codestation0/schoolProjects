import axios from "axios";
import FormData from "form-data";
import { useState } from "react";
import FormTitle from "../../Pages/Shared/FormTitle";
const AddCommitteePresident = () => {
  // Define state variables for form inputs

  const [formData, setFormData] = useState({
    name: "",
    image: null,
    phone: "",
    designation: "",
  });

  const handleFileChange = (e) => {
    setFormData({
      ...formData,
      image: e.target.files[0],
    });
  };

  // Handle form input changes
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  // Handle form submission (you can implement the submission logic here)
  const handleSubmit = async (e) => {
    e.preventDefault();
    // You can send the formData to your backend or perform any other actions here

    // Create a FormData object to send the form data to the server
    const formDataToSend = new FormData();
    formDataToSend.append("name", formData.name);
    formDataToSend.append("image", formData.image);
    formDataToSend.append("phone", formData.phone);
    formDataToSend.append("designation", formData.designation);

    const res = await axios.post(
      `${import.meta.env.VITE_BASE_URL}/add-president`,
      formDataToSend,
      {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      }
    );
    if (res.data.insertedId) {
      alert("President added");
      setFormData({
        name: "",
        image: null,
        phone: "",
        designation: "",
      });
    }
  };

  return (
    <div className="max-w-screen-lg mx-auto mt-5  w-full ">
      <FormTitle title={"Add Committee President Information"} />
      <form
        onSubmit={handleSubmit}
        className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4 "
      >
        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4 items-center">
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
              value={formData.name}
              onChange={handleInputChange}
              placeholder="John Doe"
            />
          </div>

          <div className="mb-4">
            <label
              className="block text-primary-20/80 text-base font-bold mb-2"
              htmlFor="image"
            >
              Image
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-primary-20/80 leading-tight focus:outline-none focus:shadow-outline"
              onChange={handleFileChange}
              type="file"
              id="image"
              name="image"
              accept="image/*"
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
              value={formData.phone}
              onChange={handleInputChange}
              placeholder="0123456789"
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
              value={formData.designation}
              onChange={handleInputChange}
              placeholder="designation"
            />
          </div>
        </div>

        {/* TODO: SUBMIT BUTTON */}
        <div className="flex items-center justify-between">
          <button
            className="bg-primary-20/80 hover:bg-primary-20 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline w-full"
            type="submit"
          >
            Add Porshod Post
          </button>
        </div>
      </form>
    </div>
  );
};

export default AddCommitteePresident;
