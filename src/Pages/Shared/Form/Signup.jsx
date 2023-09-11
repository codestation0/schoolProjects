import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const Signup = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const userInfo = {
      email: formData.email,
    };
    // -------- JWT TOKEN GENERATE AND SET LOCALSTORAGE -------
    const response = await fetch(`${import.meta.env.VITE_BASE_URL}/jwt`, {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(userInfo),
    });
    const data = await response.json();
    localStorage.setItem("token", data.token);

    // ----------- DATA SEND TO DATABASE ---------------
    const res = await fetch(`${import.meta.env.VITE_BASE_URL}/create-user`, {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify({ ...formData, role: "user", isLogin: true }),
    });
    const userData = await res.json();
    if (userData.insertedId) {
      navigate("/sign-in");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="bg-white p-8 rounded shadow-md w-96">
        <h2 className="text-2xl font-bold mb-4 text-primary-20">
          রেজিস্ট্রেশন{" "}
        </h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label
              htmlFor="name"
              className="block text-sm font-medium text-gray-700"
            >
              নাম
            </label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              className="mt-1 p-2 block w-full border rounded-md shadow-sm border-primary-20/40 focus:outline-primary-20/80"
              required
            />
          </div>

          <div className="mb-4">
            <label
              htmlFor="email"
              className="block text-sm font-medium text-gray-700"
            >
              ইমেইল
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="mt-1 p-2 block w-full border rounded-md shadow-sm border-primary-20/40 focus:outline-primary-20/80"
              required
            />
          </div>
          <div className="mb-4">
            <label
              htmlFor="password"
              className="block text-sm font-medium text-gray-700"
            >
              পাসওয়ার্ড
            </label>
            <input
              type="password"
              id="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              className="mt-1 p-2 block w-full border rounded-md shadow-sm border-primary-20/40 focus:outline-primary-20/80"
              required
            />
          </div>
          <div className="mt-4">
            <button
              type="submit"
              className="w-full bg-primary-20/90 text-white p-2 rounded-md hover:bg-primary-20 focus:outline-none"
            >
              Register
            </button>
          </div>
          <p className="text-[14px] mt-3">
            Already have an account?{" "}
            <Link to={"/sign-in"} className="text-primary-20 font-semibold">
              Signin
            </Link>
          </p>
        </form>
      </div>
    </div>
  );
};

export default Signup;
