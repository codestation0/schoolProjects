import axios from "axios";
import { useState } from "react";
import FormData from "form-data";

const Sovapotirbani = () => {
  const [formData, setFormData] = useState({
    name: "",
    image: null,
    message: "",
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

    const formDataToSend = new FormData();
    formDataToSend.append("name", formData.name);
    formDataToSend.append("image", formData.image);
    formDataToSend.append("message", formData.message);

    const res = await axios.post(
      `${import.meta.env.VITE_BASE_URL}/add-sovapotirbani`,
      formDataToSend,
      {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      }
    );
    if (res.data.insertedId) {
      alert("Bani added");
      setFormData({
        name: "",
        image: null,
        message: "",
      });
    }
    console.log(res);
  };

  return (
    <div className="max-w-lg mx-auto mt-5  w-full ">
      <form
        onSubmit={handleSubmit}
        className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4"
      >
        <div className="mb-4">
          <label
            className="block text-primary-20/80 text-base font-bold mb-2"
            htmlFor="name"
          >
            Name
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-primary-20/80 leading-tight focus:outline-none focus:shadow-outline"
            required
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
            required
            type="file"
            id="image"
            name="image"
            accept="image/*"
          />
        </div>

        <div className="mb-4">
          <label
            className="block text-primary-20/80 text-base font-bold mb-2"
            htmlFor="message"
          >
            Message
          </label>
          <textarea
            className="shadow appearance-none border rounded w-full py-2 px-3 text-primary-20/80 leading-tight focus:outline-none focus:shadow-outline"
            required
            type="text"
            id="message"
            name="message"
            value={formData.phone}
            onChange={handleInputChange}
            placeholder="Write here..."
            cols="20"
            rows="10"
          ></textarea>
        </div>
        <div className="flex items-center justify-between">
          <button
            className="bg-primary-20/80 hover:bg-primary-20 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline w-full"
            type="submit"
          >
            Add Bani
          </button>
        </div>
      </form>
    </div>
  );
};

export default Sovapotirbani;
