import axios from "axios";
import { useState } from "react";
import Container from "../../Pages/Shared/Container";
import FormTitle from "../../Pages/Shared/FormTitle";

const AddNotice = () => {
  const [selectedFile, setSelectedFile] = useState(null);
  const [noticeName, setNoticeName] = useState("");
  const [pdfName, setPdfName] = useState("UPLOAD PDF");

  const handleClassChange = (e) => {
    setNoticeName(e.target.value);
  };
  const handleFileChange = (e) => {
    setSelectedFile(e.target.files[0]);
    setPdfName(e.target.files[0]?.name);
  };

  const handleUpload = async () => {
    try {
      const formData = new FormData();
      formData.append("pdf", selectedFile);
      formData.append("noticeName", noticeName);

      await axios.post(
        `${import.meta.env.VITE_BASE_URL}/upload-notice`,
        formData,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      );

      alert("File uploaded successfully!");
      setPdfName("UPLOAD PDF");
      setNoticeName("");
    } catch (error) {
      console.error("Error uploading file", error);
      alert("Error uploading file");
    }
  };

  return (
    <Container>
      <FormTitle title={"Add Notice"} />
      <div className="min-h-screen max-w-screen-md w-full mx-auto bg-white p-4 rounded-md shadow-lg m-3">
        <div className="grid gap-3 md:grid-cols-2">
          <div className="mb-4">
            <label
              htmlFor="noticename"
              className="block text-primary-20/90 font-bold"
            >
              Write your notice name
            </label>
            <input
              onChange={handleClassChange}
              type="text"
              value={noticeName}
              className="w-full mt-1 p-2 border border-primary-20/30 rounded focus:outline-none focus:border-primary-20/70"
            />
          </div>
          <div className="bg-zinc-400 p-4 rounded-md text-white">
            <label
              htmlFor="pdf"
              className=" text-2xl text-center font-bold cursor-pointer block border-2 border-dashed p-2"
            >
              {pdfName}
              <input
                required
                type="file"
                hidden
                id="pdf"
                accept=".pdf"
                onChange={handleFileChange}
              />
            </label>
          </div>
        </div>
        <button
          onClick={handleUpload}
          className="bg-primary-20 py-3 px-4 rounded-md
         text-white mt-6 w-full sm:max font-semibold
         text-lg"
        >
          Add Notice
        </button>
      </div>
    </Container>
  );
};

export default AddNotice;
