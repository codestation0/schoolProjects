import { useState } from "react";
import { AiOutlineEyeInvisible, AiOutlineEye } from "react-icons/ai";
import { Link, useNavigate } from "react-router-dom";
const Signin = () => {
  const navigate = useNavigate();
  const [isShowPass, setIsShowPass] = useState(false);
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const [error, setError] = useState("");
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleForm = async (e) => {
    e.preventDefault();

    setError("");
    const userInfo = {
      email: formData.email,
      password: formData.password,
    };

    const response = await fetch("https://school-projects-server.vercel.app/login", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(userInfo),
    });

    const data = await response.json();
    if (!data.error) {
      navigate("/");
    }
    setError(data.error);
    localStorage.setItem("email", formData.email);
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="max-w-md w-full p-6 bg-white rounded-lg shadow-md">
        <h2 className="text-2xl font-semibold mb-4 text-primary-20">লগিন</h2>
        <form onSubmit={handleForm}>
          <div className="mb-4">
            <label htmlFor="email" className="block text-sm font-medium">
              ইমেইল
            </label>
            <input
              type="text"
              id="email"
              name="email"
              className="mt-1 p-2 w-full border rounded-md border-primary-20/40 focus:outline-primary-20/80"
              placeholder="Enter your email"
              onChange={handleChange}
            />
          </div>
          <div className="mb-4 relative">
            <label htmlFor="password" className="block text-sm font-medium">
              পাসওয়ার্ড
            </label>
            <input
              type={isShowPass ? "text" : "password"}
              id="password"
              name="password"
              className="mt-1 p-2 w-full border border-primary-20/40 focus:outline-primary-20/80 rounded-md"
              placeholder="Enter your password"
              onChange={handleChange}
            />
            <span
              className="absolute right-3 top-9 cursor-pointer text-gray-500"
              onClick={() => setIsShowPass((prev) => !prev)}
            >
              {isShowPass ? <AiOutlineEyeInvisible /> : <AiOutlineEye />}
            </span>
          </div>
          <button
            type="submit"
            className="w-full bg-primary-20/90 text-white py-2 rounded-md hover:bg-primary-20"
          >
            Log In
          </button>
          <small className="text-rose-500 mb-2 mt-1 block">{error}</small>
          <p className="text-[14px]">
            Don't have an account?{" "}
            <Link to={"/signup"} className="text-primary-20 font-semibold">
              Signup
            </Link>
          </p>
        </form>
      </div>
    </div>
  );
};

export default Signin;
