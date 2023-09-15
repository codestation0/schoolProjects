import { BsFileEarmarkPdf } from "react-icons/bs";
const RoutineCard = ({ routine }) => {
  const { selectedClass, filename } = routine;

  return (
    <>
      <div className="flex justify-between items-center   bg-primary-30 py-2 px-1 border-b-2 border-blue-700 border-dotted mb-2">
        <div>
          <p className="text-xl font-bold">{selectedClass}</p>
          <p className="text-lg flex items-center gap-1 text-red-500">
            <BsFileEarmarkPdf color="red" /> {filename}
          </p>
        </div>
        <div className="flex flex-col gap-3">
          <button className="text-white bg-primary-20  transition py-1 px-2 rounded-md drop-shadow-md uppercase">
            <a href="" download={filename}>
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
