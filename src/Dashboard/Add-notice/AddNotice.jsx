import Container from "../../Pages/Shared/Container";
import { useState } from "react";
import { postNotice } from "../../utils/utils";
import toast from "react-hot-toast";

const AddNotice = () => {
  const [selectedMonth, setSelectedMonth] = useState("");
  const [selectedDate, setSelectedDate] = useState("");
  const [textareaValue, setTextareaValue] = useState("");
  const months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];

  const handleMonthChange = (e) => {
    setSelectedMonth(e.target.value);
  };

  const handleDateChange = (e) => {
    setSelectedDate(e.target.value);
  };

  const handleTextareaChange = (e) => {
    setTextareaValue(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here
    const notice = {
      month: selectedMonth,
      date: selectedDate,
      description: textareaValue,
    };

    // TODO: CREATE NOTICE FUNC
    postNotice(notice)
      .then((res) => {
        if (res.insertedId) {
          toast.success("Successfully Notice created");
        }
      })
      .catch((err) => {
        toast.error(err.message);
      });
  };

  return (
    <div className="py-6">
      <Container>
        <form
          onSubmit={handleSubmit}
          className="border-2 border-r-primary-20 p-4 rounded-md "
        >
          <div className="grid gap-2 md:grid-cols-2">
            <div className="mb-4">
              <label
                htmlFor="monthSelect"
                className="block text-primary-20/90 font-bold"
              >
                Select a Month:
              </label>
              <select
                required
                id="monthSelect"
                className="w-full mt-1 p-2 border border-primary-20/30 rounded focus:outline-none focus:border-primary-20/70"
                value={selectedMonth}
                onChange={handleMonthChange}
              >
                <option value="">Select Month</option>
                {months.map((month, index) => (
                  <option key={index} value={month}>
                    {month}
                  </option>
                ))}
              </select>
            </div>

            <div className="mb-4">
              <label
                htmlFor="dateInput"
                className="block text-primary-20/90 font-bold"
              >
                Enter a Date:
              </label>
              <input
                required
                type="date"
                id="dateInput"
                className="w-full mt-1 p-2 border border-primary-20/30 rounded focus:outline-none focus:border-primary-20/70"
                value={selectedDate}
                onChange={handleDateChange}
              />
            </div>
          </div>

          <div className="mb-4">
            <label
              htmlFor="textareaInput"
              className="block text-primary-20/90 font-bold"
            >
              Enter Some Text:
            </label>
            <textarea
              required
              id="textareaInput"
              className="w-full mt-1 p-2 border border-primary-20/30 rounded focus:outline-none focus:border-primary-20/70"
              value={textareaValue}
              onChange={handleTextareaChange}
            />
          </div>

          <button
            type="submit"
            className="bg-primary-20 hover:bg-primary-20/90 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline w-full sm:w-1/2"
          >
            Add Notice
          </button>
        </form>
      </Container>
    </div>
  );
};

export default AddNotice;
