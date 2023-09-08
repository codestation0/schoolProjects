import RightSide from "../Components/RightSidebar/RightSide";
import Sidebar from "../Components/Sidebar/Sidebar";
import Container from "./Shared/Container";

const Home = () => {
  return (
    <Container>
      <div className="grid gap-4 md:grid-cols-[16rem_1fr]">
        <Sidebar />
        <RightSide />
      </div>
    </Container>
  );
};

export default Home;
