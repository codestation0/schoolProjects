import axios from "axios";
import { useState } from "react";
import FormTitle from "../../Pages/Shared/FormTitle";
function AddImportantLinks() {
  const [formData, setFormData] = useState({
    name: "",
    http: "",
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
      .post(`${import.meta.env.VITE_BASE_URL}/add-importantlinks`, formData)
      .then((res) => {
        if (res.data.insertedId) {
          alert("Data inserted successfully");
          setFormData({
            name: "",
            http: "",
          });
        }
      })
      .catch((err) => console.log(err.message));
  };

  return (
    <div className="max-w-lg mx-auto mt-8 ">
      <FormTitle title={"Add Important Link"} />
      <form
        onSubmit={handleSubmit}
        className="space-y-6 bg-white p-5 rounded-md shadow-md"
      >
        <div>
          <label
            htmlFor="name"
            className="block text-sm font-medium text-gray-700"
          >
            Link name
          </label>
          <input
            required
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            className="mt-1 p-2 w-full border rounded-md"
          />
        </div>
        <div>
          <label
            htmlFor="http"
            className="block text-sm font-medium text-gray-700"
          >
            Http
          </label>
          <input
            required
            type="text"
            id="http"
            name="http"
            value={formData.http}
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
            Add Link
          </button>
        </div>
      </form>
    </div>
  );
}

export default AddImportantLinks;
