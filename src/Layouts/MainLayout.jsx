import { Outlet } from "react-router-dom";
import Navbar from "../Components/Navbar/Navbar";
import Footer from "../Pages/Shared/Footer/Footer";
<<<<<<< HEAD

const MainLayout = () => {
  return (
    <div className="w-full min-h-screen flex flex-col ">
=======
import { Toaster } from "react-hot-toast";
const MainLayout = () => {
  return (
    <div className="w-full min-h-screen flex flex-col overflow-x-hidden">
>>>>>>> 691dfebce376a02b08f0e668c045badee015bc1f
      <div className="mb-4">
        <Navbar />
      </div>
      <Outlet />
      <div className="mt-auto">
        <Footer />
      </div>
<<<<<<< HEAD
=======
      <Toaster />
>>>>>>> 691dfebce376a02b08f0e668c045badee015bc1f
    </div>
  );
};

export default MainLayout;
