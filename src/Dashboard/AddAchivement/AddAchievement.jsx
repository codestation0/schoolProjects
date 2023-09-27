import axios from "axios";
import { useState } from "react";
import FormTitle from "../../Pages/Shared/FormTitle";

const AddAchievement = () => {
  const [achievement, setAchievement] = useState("");

  const handleInputChange = (e) => {
    const value = e.target.value;
    setAchievement(value);
  };

  // Handle form submission (you can implement the submission logic here)
  const handleSubmit = async (e) => {
    e.preventDefault();

    const res = await axios.post(
      `${import.meta.env.VITE_BASE_URL}/add-achievement`,
      { achievement }
    );
    if (res.data.insertedId) {
      alert("Achievement added");
      setAchievement("");
    }
  };

  return (
    <div className="max-w-lg mx-auto mt-5  w-full ">
      <FormTitle title={"Add Achievement"} />
      <form
        onSubmit={handleSubmit}
        className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4"
      >
        <div className="mb-4">
          <label
            className="block text-primary-20/80 text-base font-bold mb-2"
            htmlFor="message"
          >
            Achievement
          </label>
          <textarea
            className="shadow appearance-none border rounded w-full py-2 px-3 text-primary-20/80 leading-tight focus:outline-none focus:shadow-outline"
            required
            type="text"
            id="message"
            name="message"
            value={achievement}
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
            Add Achievement
          </button>
        </div>
      </form>
    </div>
  );
};

export default AddAchievement;
