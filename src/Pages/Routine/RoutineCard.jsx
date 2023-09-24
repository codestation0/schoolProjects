import { BsFileEarmarkPdf } from "react-icons/bs";
const RoutineCard = ({ routine }) => {
  const { selectedClass, filename } = routine;

  return (
    <>
      <div className="flex justify-between items-center   bg-primary-30/60 py-2 px-1 border-b-2 border-primary-20 border-dotted mb-2">
        <div>
          <p className="text-lg flex items-center gap-1 text-primary-20 font-bold">
            <BsFileEarmarkPdf /> {selectedClass}
          </p>
        </div>
        <div className="flex flex-col gap-3">
          <button className="text-white bg-primary-20  transition py-1 px-2 rounded-md drop-shadow-md uppercase">
            <a href="" download={filename} className="md:text-xs">
              {" "}
              Download
            </a>
          </button>
        </div>
      </div>
    </>
  );
};

export default RoutineCard;
