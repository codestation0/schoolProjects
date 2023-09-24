import RightSide from "../Components/RightSidebar/RightSide";
import Sidebar from "../Components/Sidebar/Sidebar";
import Container from "./Shared/Container";

const Home = () => {
  return (
    <Container>
      <div className=" grid gap-4 md:grid-cols-[20rem_1fr] lg:grid-cols-[22rem_1fr] overflow-hidden">
        <Sidebar />
        <RightSide />
      </div>
    </Container>
  );
};

export default Home;
