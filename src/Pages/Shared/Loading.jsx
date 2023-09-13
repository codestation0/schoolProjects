import { PiSpinnerGapBold } from "react-icons/pi";
const Loading = () => {
  return (
    <div className="w-full min-h-screen grid place-content-center fixed top-0 left-0 z-[100] bg-white">
      <PiSpinnerGapBold className="animate-spin" size={50} />
    </div>
  );
};

export default Loading;
