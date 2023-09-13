import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../Layouts/MainLayout";
import Home from "../Pages/Home";

import Teachers from "../Pages/Teachers/Teachers";
import Introduction from "../Pages/InstituteIntroduction/Introduction";
import Employee from "../Pages/Employee/Employee";
import Notice from "../Pages/Notice/Notice";
import RoutineList from "../Pages/Routine/RoutineList";
import ErrorPage from "../Pages/ErrorPage";
import Signup from "../Pages/Shared/Form/Signup";
import Signin from "../Pages/Shared/Form/Signin";
import AdminDashboard from "../Dashboard/Admin/AdminDashboard";
import AddRoutine from "../Dashboard/Add-routine/AddRoutine";
import AddTeacher from "../Dashboard/Add-techer/AddTeacher";
import Sovapotirbani from "../Pages/Dashboard/Sovapotirbani";
import InstituteInfo from "../Pages/Dashboard/InstituteInfo";
import AddNotice from "../Dashboard/Add-notice/AddNotice";
import AllTeacher from "../Pages/Dashboard/AllTeacher";
import SovapotirbaniTable from "../Pages/Dashboard/SovabpotirbaniTable";
import RoutineTable from "../Pages/Dashboard/RoutineTable";
import NoticeTable from "../Pages/Dashboard/NoticeTable";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/শিক্ষকমণ্ডলী",
        element: <Teachers />,
      },
      {
        path: "/কর্মচারী",
        element: <Employee />,
      },
      {
        path: "/পরিচিতি",
        element: <Introduction />,
      },
      {
        path: "/নোটিশ",
        element: <Notice />,
      },
      {
        path: "/রুটিন",
        element: <RoutineList />,
      },
    ],
  },

  {
    path: "/dashboard",
    element: <AdminDashboard />,
    children: [
      {
        path: "/dashboard/add-routine",
        element: <AddRoutine />,
      },
      {
        path: "/dashboard/add-notice",
        element: <AddNotice />,
      },
      {
        path: "/dashboard/add-teacher",
        element: <AddTeacher />,
      },

      {
        path: "/dashboard/add-sovapotirbani",
        element: <Sovapotirbani />,
      },
      {
        path: "/dashboard/add-instituteinfo",
        element: <InstituteInfo />,
      },
      {
        path: "/dashboard/all-teacher",
        element: <AllTeacher />,
      },
      {
        path: "/dashboard/sovapotir-bani",
        element: <SovapotirbaniTable />,
      },
      {
        path: "/dashboard/all-routine",
        element: <RoutineTable />,
      },
      {
        path: "/dashboard/all-notice",
        element: <NoticeTable />,
      },
    ],
  },
  {
    path: "/signup",
    element: <Signup />,
  },
  {
    path: "/sign-in",
    element: <Signin />,
  },
]);

export default router;
