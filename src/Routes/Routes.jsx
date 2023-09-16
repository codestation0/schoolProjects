import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../Layouts/MainLayout";
import Home from "../Pages/Home";

import AddNotice from "../Dashboard/Add-notice/AddNotice";
import AddRoutine from "../Dashboard/Add-routine/AddRoutine";
import AddTeacher from "../Dashboard/Add-techer/AddTeacher";
import AddHeadmaster from "../Dashboard/AddHeadmaster/AddHeadmaster";
import AddPorshodPorishod from "../Dashboard/AddPorshodPorishod/AddPorshodPorishod";
import AddStuff from "../Dashboard/AddStuff/AddStuff";
import AdminDashboard from "../Dashboard/Admin/AdminDashboard";
import AllTeacher from "../Pages/Dashboard/AllTeacher";
import HeadmasterInfo from "../Pages/Dashboard/HeadmasterInfo";
import InstituteInfo from "../Pages/Dashboard/InstituteInfo";
import NoticeTable from "../Pages/Dashboard/NoticeTable";
import PorishodTable from "../Pages/Dashboard/PorishodTable";
import RoutineTable from "../Pages/Dashboard/RoutineTable";
import SovapotirbaniTable from "../Pages/Dashboard/SovabpotirbaniTable";
import Sovapotirbani from "../Pages/Dashboard/Sovapotirbani";
import StuffTable from "../Pages/Dashboard/StuffTable";
import Employee from "../Pages/Employee/Employee";
import ErrorPage from "../Pages/ErrorPage";
import Introduction from "../Pages/InstituteIntroduction/Introduction";
import Notice from "../Pages/Notice/Notice";
import Routine from "../Pages/Routine/Routine";
import Signin from "../Pages/Shared/Form/Signin";
import Signup from "../Pages/Shared/Form/Signup";
import Teachers from "../Pages/Teachers/Teachers";

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
        element: <Routine />,
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
        path: "/dashboard/add-headmaster",
        element: <AddHeadmaster />,
      },

      {
        path: "/dashboard/headmasterInfo",
        element: <HeadmasterInfo />,
      },

      {
        path: "/dashboard/add-sovapotirbani",
        element: <Sovapotirbani />,
      },
      {
        path: "/dashboard/add-stuff",
        element: <AddStuff />,
      },
      {
        path: "/dashboard/add-porishod",
        element: <AddPorshodPorishod />,
      },
      {
        path: "/dashboard/all-stuff",
        element: <StuffTable />,
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
      {
        path: "/dashboard/all-porishod",
        element: <PorishodTable />,
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
