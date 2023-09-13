import { NavLink, Outlet } from "react-router-dom";

const AdminDashboard = () => {
  return (
    <div className="min-h-screen w-full  grid grid-cols-[14rem,_1fr] overflow-hidden">
      <div className="bg-zinc-300 w-full h-full p-2 shadow-md space-y-4">
        <div className="bg-zinc-400 rounded-md p-2 ">
          <ul className="text-white text-center flex flex-col gap-2">
            <NavLink
              to={"/"}
              className={
                "py-1 rounded-md block w-full bg-zinc-500 shadow-sm hover:bg-zinc-600 transition "
              }
            >
              <li className="">Home</li>
            </NavLink>

            <NavLink
              to={"/dashboard/add-teacher"}
              className={
                "py-1 rounded-md block w-full bg-zinc-500 shadow-sm hover:bg-zinc-600 transition "
              }
            >
              <li className="">Add Teacher</li>
            </NavLink>

            <NavLink
              to={"/dashboard/add-routine"}
              className={
                "py-1 rounded-md block w-full bg-zinc-500 shadow-sm hover:bg-zinc-600 transition "
              }
            >
              <li className="">Add Routine</li>
            </NavLink>

            <NavLink
              to={"/dashboard/add-notice"}
              className={
                "py-1 rounded-md block w-full bg-zinc-500 shadow-sm hover:bg-zinc-600 transition "
              }
            >
              <li className="">Add Notice</li>
            </NavLink>

            <NavLink
              to={"/dashboard/add-sovapotirbani"}
              className={
                "py-1 rounded-md block w-full bg-zinc-500 shadow-sm hover:bg-zinc-600 transition "
              }
            >
              <li className="">Add Sovapotir Bani</li>
            </NavLink>

            <NavLink
              to={"/dashboard/add-instituteinfo"}
              className={
                "py-1 rounded-md block w-full bg-zinc-500 shadow-sm hover:bg-zinc-600 transition "
              }
            >
              <li className="">Add Institute Info</li>
            </NavLink>
          </ul>
        </div>

        <div className="bg-zinc-400 rounded-md p-2">
          <ul className="text-white text-center flex flex-col gap-2">
            <NavLink
              to={"/dashboard/all-teacher"}
              className={
                "py-1 rounded-md block w-full bg-zinc-500 shadow-sm hover:bg-zinc-600 transition "
              }
            >
              <li className="">All Teacher</li>
            </NavLink>

            <NavLink
              to={"/dashboard/sovapotir-bani"}
              className={
                "py-1 rounded-md block w-full bg-zinc-500 shadow-sm hover:bg-zinc-600 transition "
              }
            >
              <li className="">Sovapotir Bani</li>
            </NavLink>

            <NavLink
              to={"/dashboard/all-routine"}
              className={
                "py-1 rounded-md block w-full bg-zinc-500 shadow-sm hover:bg-zinc-600 transition "
              }
            >
              <li className="">All Routine</li>
            </NavLink>

            <NavLink
              to={"/dashboard/all-notice"}
              className={
                "py-1 rounded-md block w-full bg-zinc-500 shadow-sm hover:bg-zinc-600 transition "
              }
            >
              <li className="">All Notice</li>
            </NavLink>
            <NavLink
              to={"/dashboard/instituteinfo"}
              className={
                "py-1 rounded-md block w-full bg-zinc-500 shadow-sm hover:bg-zinc-600 transition "
              }
            >
              <li className="">Institute information</li>
            </NavLink>
          </ul>
        </div>
      </div>

      <div className="w-full min-h-screen bg-zinc-100 overflow-x-auto">
        {<Outlet />}
      </div>
    </div>
  );
};

export default AdminDashboard;
