import axios from "axios";
import FormData from "form-data";
import { useState } from "react";
import FormTitle from "../Shared/FormTitle";

const InstituteInfo = () => {
  const [images, setImages] = useState();
  const [formData, setFormData] = useState({
    message: "",
  });

  const handleFileChange = (e) => {
    const fileList = e.target.files;
    const imageList = Array.from(fileList);
    setImages(imageList);

    setFormData({
      ...formData,
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
    formDataToSend.append("message", formData.message);

    for (let i = 0; i < images.length; i++) {
      formDataToSend.append("images", images[i]);
    }

    const res = await axios.post(
      `${import.meta.env.VITE_BASE_URL}/add-instituteinfo`,
      formDataToSend,
      {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      }
    );
    if (res.data.insertedId) {
      alert("information added");
      setFormData({
        message: "",
      });
    }
  };

  return (
    <div className="max-w-4xl mx-auto mt-5  w-full ">
      <FormTitle title={"Add Institute Information"} />
      <form
        onSubmit={handleSubmit}
        className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4"
      >
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
            multiple={true}
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
            cols="30"
            rows="10"
          ></textarea>
        </div>
        <div className="flex items-center justify-between">
          <button
            className="bg-primary-20/80 hover:bg-primary-20 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline w-full"
            type="submit"
          >
            Add Institute Info
          </button>
        </div>
      </form>
    </div>
  );
};

export default InstituteInfo;
