import { Outlet } from "react-router-dom";

const Home = () => {
  return (
    <>
      <p>Navbar</p>
      <Outlet />
      <p>Footer</p>
    </>
  );
};

export default Home;
