import axios from "axios";

const BASE_URL = "https://run.mocky.io/v3/9118e647-e131-43c7-8668-d99af1abb5a6";

export const getUsers = async () => {
  try {
    const response = await axios.get(BASE_URL);
    return response.data.team;
  } catch (error) {
    throw error;
  }
};
