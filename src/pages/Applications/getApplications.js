import * as api from "../../store/fetch";

const getApplications = async () => {
  try {
    const res = await api.get("application");
    return res.json;
  } catch (error) {
    return error.response;
  }
};

export default getApplications;
