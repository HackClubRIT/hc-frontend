import axiosInstance from "../../store/axios";

const getApplications = async () => {
  try {
    const res = await axiosInstance.get("/application");
    return res.data;
  } catch (error) {
    return error.response;
  }
};

export default getApplications;
