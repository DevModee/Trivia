import axios from "axios";
import { config } from "../utils/apiConfig";

export const adminLogin = async (username, password) => {
  try {
    const response = await axios.post(`${config.adminAPI}/login`, {
      username,
      password
    });

    return response
  } catch (error) {
    console.error("Error on login admin: ", error);
  }
} 
