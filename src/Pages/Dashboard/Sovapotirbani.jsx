import axios from "axios";
import { useState } from "react";
import FormTitle from "../Shared/FormTitle";

const Sovapotirbani = () => {
  const [description, setDescription] = useState("");

  const handleInputChange = (e) => {
    const value = e.target.value;
    setDescription(value);
  };

  // Handle form submission (you can implement the submission logic here)
  const handleSubmit = async (e) => {
    e.preventDefault();

    const res = await axios.post(
      `${import.meta.env.VITE_BASE_URL}/add-sovapotirbani`,
      { description }
    );
    if (res.data.insertedId) {
      alert("Bani added");
      setDescription("");
    }
    console.log(res);
  };

  return (
    <div className="max-w-lg mx-auto mt-5  w-full ">
      <FormTitle title={"Add Sovapotir Bani"} />
      <form
        onSubmit={handleSubmit}
        className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4"
      >
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
            value={description}
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
