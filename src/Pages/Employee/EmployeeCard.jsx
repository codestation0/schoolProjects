const EmployeeCard = ({ employee }) => {
  const { name, designation, img } = employee;
  return (
    <div className=" bg-gradient-to-r from-zinc-900 via-teal-900 to-zinc-500 rounded-lg shadow-lg overflow-hidden max-w-sm w-full mx-auto">
      <div className="pt-5 pb-3">
        <img src={img} alt="" className="max-h-44 object-contain mx-auto" />
      </div>
      <div className="text-center p-3 text-zinc-50">
        <h1 className="text-lg font-semibold">{name}</h1>
        <p>{designation}</p>
        <button className="mt-3 block py-1 px-4 w-full bg-primary-20/80 rounded-md text-white hover:bg-primary-20 transition">
          বিস্তারিত জানুন
        </button>
      </div>
    </div>
  );
};

export default EmployeeCard;
