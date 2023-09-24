import RightSide from "../Components/RightSidebar/RightSide";
import Sidebar from "../Components/Sidebar/Sidebar";
import Container from "./Shared/Container";

const Home = () => {
  return (
    <Container>
<<<<<<< HEAD
      <div className=" grid gap-4 md:grid-cols-[23rem_1fr] overflow-hidden">
=======
      <div className=" grid gap-4 md:grid-cols-[20rem_1fr] lg:grid-cols-[22rem_1fr] overflow-hidden">
>>>>>>> 691dfebce376a02b08f0e668c045badee015bc1f
        <Sidebar />
        <RightSide />
      </div>
    </Container>
  );
};

export default Home;
