import Container from "../Shared/Container";

function RoutineList() {
  const routineData = [
    {
      day: "Monday",
      time: "9:00 AM - 10:30 AM",
      className: "Mathematics",
      location: "Room 101",
    },
    {
      day: "Tuesday",
      time: "11:00 AM - 12:30 PM",
      className: "History",
      location: "Room 102",
    },
    {
      day: "Wednesday",
      time: "2:00 PM - 3:30 PM",
      className: "Science",
      location: "Room 103",
    },
    // Add more class entries here
  ];

  return (
    <Container>
      <div className="container mx-auto mb-8 bg-primary-10/50 p-6 rounded-md border border-primary-20 text-white">
        <h1 className="text-2xl font-semibold mb-4 bg-primary-20 p-3 text-center rounded-md">
          Class Routine
        </h1>
        <ul className=" grid gap-5 sm:grid-cols-2 items-center">
          {routineData.map((item, index) => (
            <li
              key={index}
              className="bg-gray-200 rounded-lg p-4 shadow-md bg-primary-20"
            >
              <div className="font-semibold">{item.day}</div>
              <div className="text-sm">{item.time}</div>
              <div className="text-lg">{item.className}</div>
              <div className="text-sm">Location: {item.location}</div>
            </li>
          ))}
        </ul>
      </div>
    </Container>
  );
}

export default RoutineList;
