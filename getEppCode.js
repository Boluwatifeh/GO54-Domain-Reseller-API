import { getEppCode } from "./index.js ";
import dotenv from "dotenv";
dotenv.config();

const config = {
  endpoint: process.env.BASE_URL,
  username: process.env.EMAIL,
  apiSecret: process.env.API_SECRET,
};

const domain = "tife.com.ng";
const eppParams = {
    domain: "tife.com.ng",
};
(async () => {
  try {
    const result =  await getEppCode(config, eppParams, domain);
    console.log("EPP Code Result:", result);
    } catch (error) {
    console.error("Error retrieving EPP code:", error);
  }
})();
