import axios from "axios";
import { useState } from "react";
import Container from "../../Pages/Shared/Container";

const AddClassInfo = () => {
  const [formData, setFormData] = useState({
    class: "6", // Default class selection as '6'
    male: "",
    female: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Calculate total
    const total = parseInt(formData.male) + parseInt(formData.female);
    const info = {
      ...formData,
    };

    // Pass the data to the parent component

    axios
      .post(`${import.meta.env.VITE_BASE_URL}/classinfo`, info)
      .then((res) => {
        alert("List added");
        setFormData({
          class: "",
          male: "",
          female: "",
        });
      })
      .catch((err) => {
        alert(err.message);
      });
  };

  return (
    <Container>
      <div className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
        <h2 className="text-2xl font-bold mb-4">ছাত্র ছাত্রী তালিকা </h2>
        <form onSubmit={handleSubmit} className="">
          <div className="grid gap-3 sm:grid-cols-2">
            <div className="mb-4">
              <label className="block text-gray-700 text-sm font-bold mb-2">
                Class:
              </label>
              <select
                className="border rounded w-full py-2 px-3"
                name="class"
                value={formData.class}
                onChange={handleChange}
                required
              >
                <option value="6">Six</option>
                <option value="7">Seven</option>
                <option value="8">Eight</option>
                <option value="9">Nine</option>
                <option value="10">Ten</option>
              </select>
            </div>
            <div className="mb-4">
              <label className="block text-gray-700 text-sm font-bold mb-2">
                Male:
              </label>
              <input
                type="number"
                className="border rounded w-full py-2 px-3"
                name="male"
                value={formData.male}
                onChange={handleChange}
                required
              />
            </div>
            <div className="mb-4">
              <label className="block text-gray-700 text-sm font-bold mb-2">
                Female
              </label>
              <input
                type="number"
                className="border rounded w-full py-2 px-3"
                name="female"
                value={formData.female}
                onChange={handleChange}
                required
              />
            </div>
          </div>

          <button
            type="submit"
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
          >
            Add Student
          </button>
        </form>
      </div>
    </Container>
  );
};

export default AddClassInfo;
