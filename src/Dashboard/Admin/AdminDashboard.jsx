import { useState } from "react";
import { MdClose } from "react-icons/md";
import { RiMenu2Fill } from "react-icons/ri";
import { NavLink, Outlet, useNavigate } from "react-router-dom";
const AdminDashboard = () => {
  const [isShow, setIsShow] = useState(true);
  const [showChild, setShowChild] = useState(false);
  const toggleShowChild = () => {
    setShowChild(false);
  };

  const navigate = useNavigate();
  const email = localStorage.getItem("email");

  const handleLogout = () => {
    localStorage.removeItem("email");
    navigate("/");
  };
  return (
    <div className="">
      <div
        className={`min-h-screen w-full  grid  overflow-hidden transition ${
          isShow ? "grid-cols-[15rem,_1fr]" : "grid-cols-[0rem,_1fr]"
        }`}
      >
        <div className="bg-zinc-300 w-full h-full p-2 shadow-md space-y-4">
          <div className="bg-zinc-400 rounded-md p-2 ">
            <h1 className="text-center text-lg font-semibold text-white mb-3">
              Create your content
            </h1>
            <ul className="text-white  flex flex-col gap-2 text-center">
              <NavLink
                to={"/"}
                className={
                  "py-1 rounded-md block w-full bg-zinc-500 shadow-sm hover:bg-zinc-600 transition "
                }
              >
                <li className="">Home</li>
              </NavLink>

              <div
                className="active pending"
                // className={({ isActive }) => (isActive ? "active" : "pending")}
              >
                <li
                  onClick={() => setShowChild(true)}
                  className="cursor-pointer"
                >
                  Add Teacher
                </li>
                <ul className={`${!showChild && "h-0 overflow-hidden"}`}>
                  <NavLink
                    to={"/dashboard/add-teacher"}
                    className={({ isActive }) =>
                      isActive ? "active" : "pending"
                    }
                  >
                    <li className="">Teacher</li>
                  </NavLink>
                  <NavLink
                    to={"/dashboard/add-headmaster"}
                    className={({ isActive }) =>
                      isActive ? "active" : "pending"
                    }
                  >
                    <li>Headmaster</li>
                  </NavLink>
                </ul>
              </div>

              <NavLink
                to={"/dashboard/add-stuff"}
                className={({ isActive }) => (isActive ? "active" : "pending")}
              >
                <li onClick={toggleShowChild} className="">
                  Add Stuff
                </li>
              </NavLink>

              <NavLink
                to={"/dashboard/add-routine"}
                className={({ isActive }) => (isActive ? "active" : "pending")}
              >
                <li onClick={toggleShowChild} className="">
                  Add Routine
                </li>
              </NavLink>

              <NavLink
                to={"/dashboard/add-notice"}
                className={({ isActive }) => (isActive ? "active" : "pending")}
              >
                <li onClick={toggleShowChild} className="">
                  Add Notice
                </li>
              </NavLink>

              <NavLink
                to={"/dashboard/add-porishod"}
                className={({ isActive }) => (isActive ? "active" : "pending")}
              >
                <li onClick={toggleShowChild} className="">
                  Add Porishod Porsho
                </li>
              </NavLink>
              <NavLink
                to={"/dashboard/add-sovapotirbani"}
                className={({ isActive }) => (isActive ? "active" : "pending")}
              >
                <li onClick={toggleShowChild} className="">
                  Add Sovapotir Bani
                </li>
              </NavLink>

              <NavLink
                to={"/dashboard/add-instituteinfo"}
                className={({ isActive }) => (isActive ? "active" : "pending")}
              >
                <li onClick={toggleShowChild} className="">
                  Add Institute Info
                </li>
              </NavLink>

              <NavLink
                to={"/dashboard/add-schoolinfo"}
                className={({ isActive }) => (isActive ? "active" : "pending")}
              >
                <li onClick={toggleShowChild} className="">
                  Add School Info
                </li>
              </NavLink>
            </ul>
          </div>

          <div className="bg-zinc-400 rounded-md p-2">
            <h1 className="text-center text-lg text-white mb-3 font-semibold">
              Update or Delete
            </h1>
            <ul className="text-white text-center flex flex-col gap-2">
              <NavLink
                to={"/dashboard/headmasterInfo"}
                className={({ isActive }) => (isActive ? "active" : "pending")}
              >
                <li onClick={toggleShowChild} className="">
                  HEADMASTER INFORMATION
                </li>
              </NavLink>
              <NavLink
                to={"/dashboard/all-teacher"}
                className={({ isActive }) => (isActive ? "active" : "pending")}
              >
                <li onClick={toggleShowChild} className="">
                  All Teacher
                </li>
              </NavLink>

              <NavLink
                to={"/dashboard/all-stuff"}
                className={({ isActive }) => (isActive ? "active" : "pending")}
              >
                <li onClick={toggleShowChild} className="">
                  All Stuff
                </li>
              </NavLink>
              <NavLink
                to={"/dashboard/all-porishod"}
                className={({ isActive }) => (isActive ? "active" : "pending")}
              >
                <li onClick={toggleShowChild} className="">
                  Porishod Porshod
                </li>
              </NavLink>

              <NavLink
                to={"/dashboard/sovapotir-bani"}
                className={({ isActive }) => (isActive ? "active" : "pending")}
              >
                <li onClick={toggleShowChild} className="">
                  Sovapotir Bani
                </li>
              </NavLink>

              <NavLink
                to={"/dashboard/all-routine"}
                className={({ isActive }) => (isActive ? "active" : "pending")}
              >
                <li onClick={toggleShowChild} className="">
                  All Routine
                </li>
              </NavLink>

              <NavLink
                to={"/dashboard/all-notice"}
                className={({ isActive }) => (isActive ? "active" : "pending")}
              >
                <li onClick={toggleShowChild} className="">
                  All Notice
                </li>
              </NavLink>
              <NavLink
                to={"/dashboard/all-school-information"}
                className={({ isActive }) => (isActive ? "active" : "pending")}
              >
                <li onClick={toggleShowChild} className="">
                  All School Information
                </li>
              </NavLink>
            </ul>
          </div>
        </div>

        <div className="w-full min-h-screen bg-zinc-100 overflow-x-auto">
          <nav
            className=" py-3 px-4 bg-zinc-400 text-white mb-3 drop-shadow-md flex justify-between
        "
          >
            {isShow ? (
              <MdClose
                className="cursor-pointer"
                size={25}
                onClick={() => setIsShow((prev) => !prev)}
              />
            ) : (
              <RiMenu2Fill
                className="cursor-pointer"
                size={25}
                onClick={() => setIsShow((prev) => !prev)}
              />
            )}

            {email && (
              <p onClick={handleLogout} className="cursor-pointer">
                Logout
              </p>
            )}
          </nav>

          {<Outlet />}
        </div>
      </div>
    </div>
  );
};

export default AdminDashboard;
