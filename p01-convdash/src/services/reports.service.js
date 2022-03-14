import axios from "axios";

export const postReport = async (data) => {
  try {
    const response = await axios.post('http://localhost:3001/report', data)
    console.log(response)
  } catch (e) {
    console.log("error", e.message)
  }
}