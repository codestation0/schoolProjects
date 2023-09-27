import axios from "axios";
import { useState } from "react";
function AddCommunicationInfo() {
  const [formData, setFormData] = useState({
    schoolName: "",
    address: "",
    phone: "",
    email: "",
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
    // Handle form submission here, e.g., send data to the server or perform validation.
    axios
      .post(`${import.meta.env.VITE_BASE_URL}/add-communication`, formData)
      .then((res) => {
        if (res.data.insertedId) {
          alert("Data inserted successfully");
          setFormData({
            schoolName: "",
            address: "",
            phone: "",
            email: "",
          });
        }
      })
      .catch((err) => console.log(err.message));
  };

  return (
    <div className="max-w-lg mx-auto mt-8 ">
      <form
        onSubmit={handleSubmit}
        className="space-y-6 bg-white p-5 rounded-md shadow-md"
      >
        <div>
          <label
            htmlFor="schoolName"
            className="block text-sm font-medium text-gray-700"
          >
            School Name
          </label>
          <input
            required
            type="text"
            id="schoolName"
            name="schoolName"
            value={formData.schoolName}
            onChange={handleChange}
            className="mt-1 p-2 w-full border rounded-md"
          />
        </div>
        <div>
          <label
            htmlFor="address"
            className="block text-sm font-medium text-gray-700"
          >
            Address
          </label>
          <input
            required
            type="text"
            id="address"
            name="address"
            value={formData.address}
            onChange={handleChange}
            className="mt-1 p-2 w-full border rounded-md"
          />
        </div>
        <div>
          <label
            htmlFor="phone"
            className="block text-sm font-medium text-gray-700"
          >
            Phone
          </label>
          <input
            required
            type="text"
            id="phone"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            className="mt-1 p-2 w-full border rounded-md"
          />
        </div>
        <div>
          <label
            htmlFor="email"
            className="block text-sm font-medium text-gray-700"
          >
            Email
          </label>
          <input
            required
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            className="mt-1 p-2 w-full border rounded-md"
          />
        </div>
        <div>
          <button
            required
            type="submit"
            className="w-full p-2 bg-primary-20/80 text-white rounded-md hover:bg-primary-20"
          >
            Add Information
          </button>
        </div>
      </form>
    </div>
  );
}

export default AddCommunicationInfo;
