import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../Layouts/MainLayout";
import Home from "../Pages/Home";

import AddNotice from "../Dashboard/Add-notice/AddNotice";
import AddRoutine from "../Dashboard/Add-routine/AddRoutine";
import AddTeacher from "../Dashboard/Add-techer/AddTeacher";
import AddAchievement from "../Dashboard/AddAchivement/AddAchievement";
import AddClassInfo from "../Dashboard/AddClassInfo/AddClassInfo";
import AddCommitteeOtherMember from "../Dashboard/AddCommitteeOtherMember/AddCommitteeOtherMember";
import AddCommitteePresident from "../Dashboard/AddCommitteePresident/AddCommitteePresident";
import AddCommunicationInfo from "../Dashboard/AddComunicationInformaion/AddCommunicationInfo";
import AddHeadmaster from "../Dashboard/AddHeadmaster/AddHeadmaster";
import AddHeadmasterBani from "../Dashboard/AddHeadmaster/AddHeadmasterBani";
import AddImportantLinks from "../Dashboard/AddImportantLinks/AddImportantLinks";
import AddInstituteImages from "../Dashboard/AddInstituteImages/AddInstituteImages";
import AddPorshodPorishod from "../Dashboard/AddPorshodPorishod/AddPorshodPorishod";
import AddSchoolInformation from "../Dashboard/AddSchoolInformation/AddSchoolInformation";
import AddStuff from "../Dashboard/AddStuff/AddStuff";
import AdminDashboard from "../Dashboard/Admin/AdminDashboard";
import ClassInfo from "../Pages/ClassInfo/ClassInfo";
import AchievementTable from "../Pages/Dashboard/AchievementTable";
import AllSchoolInformationTable from "../Pages/Dashboard/AllSchoolInformationTable";
import AllTeacher from "../Pages/Dashboard/AllTeacher";
import ClassInfoTable from "../Pages/Dashboard/ClassInfoTable";
import CommitteeTable from "../Pages/Dashboard/CommitteeTable";
import CommunicationTable from "../Pages/Dashboard/CommunicationTable";
import HeadmasterBaniTable from "../Pages/Dashboard/HeadmasterBaniTable";
import HeadmasterInfo from "../Pages/Dashboard/HeadmasterInfo";
import ImportantLinkTable from "../Pages/Dashboard/ImportantLinkTable";
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
import WelcomePage from "../Pages/WelcomePage";

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
      {
        path: "/শাখার তথ্য",
        element: <ClassInfo />,
      },
    ],
  },
  // ************************don't do this url private***********
  // (
  //   <PrivetRoute>
  //     <AdminDashboard />
  //   </PrivetRoute>
  // ),
  // ************************don't do this url private***********
  {
    path: "/dashboard",
    element: <AdminDashboard />,
    children: [
      {
        path: "/dashboard",
        element: <WelcomePage />,
      },
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
        path: "/dashboard/add-president",
        element: <AddCommitteePresident />,
      },
      {
        path: "/dashboard/add-othermember",
        element: <AddCommitteeOtherMember />,
      },
      {
        path: "/dashboard/add-headmasterbai",
        element: <AddHeadmasterBani />,
      },
      {
        path: "/dashboard/add-schoolinfo",
        element: <AddSchoolInformation />,
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
        path: "/dashboard/add-classinfo",
        element: <AddClassInfo />,
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
        path: "/dashboard/add-instituteimages",
        element: <AddInstituteImages />,
      },
      {
        path: "/dashboard/add-communicationinfo",
        element: <AddCommunicationInfo />,
      },
      {
        path: "/dashboard/add-importantlinks",
        element: <AddImportantLinks />,
      },
      {
        path: "/dashboard/add-achievement",
        element: <AddAchievement />,
      },

      // UPDATE & DELETE ROUTES
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
      {
        path: "/dashboard/all-members",
        element: <CommitteeTable />,
      },
      {
        path: "/dashboard/headmasterbani",
        element: <HeadmasterBaniTable />,
      },
      {
        path: "/dashboard/all-school-information",
        element: <AllSchoolInformationTable />,
      },
      {
        path: "/dashboard/all-class-information",
        element: <ClassInfoTable />,
      },
      {
        path: "/dashboard/all-communication-information",
        element: <CommunicationTable />,
      },
      {
        path: "/dashboard/all-important-link",
        element: <ImportantLinkTable />,
      },
      {
        path: "/dashboard/all-achievement",
        element: <AchievementTable />,
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
