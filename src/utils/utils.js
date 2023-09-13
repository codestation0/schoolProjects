import axios from "axios";
// TODO: ADD NOTICE FUNC
export const postNotice = async (notice) => {
  const res = await axios.post(
    `${import.meta.env.VITE_BASE_URL}/create-notice`,
    { notice }
  );

  const data = res.data;
  console.log(data);
  return data;
};

// TODO:DELETE ROUTE FUNC
export const deleteNotice = async (id) => {
  const res = await axios.delete(
    `${import.meta.env.VITE_BASE_URL}/delete-routine/${id}`
  );

  const data = res.data;
  return data;
};
