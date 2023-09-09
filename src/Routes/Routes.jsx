import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../Layouts/MainLayout";
import Home from "../Pages/Home";

import Teachers from "../Pages/Teachers/Teachers";
import Introduction from "../Pages/InstituteIntroduction/Introduction";
import Employee from "../Pages/Employee/Employee";
import Notice from "../Pages/Notice/Notice";
import RoutineList from "../Pages/Routine/RoutineList";
import ErrorPage from "../Pages/ErrorPage";

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
]);

export default router;
