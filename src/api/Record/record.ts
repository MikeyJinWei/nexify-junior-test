import { EmployeesToSave } from "@/types";
import axios from "axios";

const BASE_URL = import.meta.env.VITE_BASE_URL;
export const GET_RECORDS_URL = `${BASE_URL}/api/Record/GetRecords`;
export const SAVE_RECORDS_URL = `${BASE_URL}/api/Record/SaveRecords`;

const axiosInstance = axios.create({
  baseURL: BASE_URL,
});

export const getRecords = async () => {
  return axiosInstance.get(GET_RECORDS_URL);
};

export const saveRecords = async (data: EmployeesToSave[]) => {
  return axiosInstance.post(SAVE_RECORDS_URL, data);
};
