import axios from "axios";

export const fetchUser = async () => {
  const response = await axios.get("http://localhost:3000/user");
  return response.data;
};
