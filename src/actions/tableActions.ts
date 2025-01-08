import axios from "axios";

export const getRecords = async () => {
  const res = await axios.get(
    `${import.meta.env.VITE_BASE_URL}/api/Record/GetRecords`
  );
  console.log(res.data);
  // console.log(res.data.Data);
};
export const saveRecords = () => {};
