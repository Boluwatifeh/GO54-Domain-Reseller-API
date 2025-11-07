import { getContactDetails } from "./index.js";
import dotenv from "dotenv";
dotenv.config();

const config = {
  endpoint: process.env.BASE_URL,
  username: process.env.EMAIL,
  apiSecret: process.env.API_SECRET,
};
const domain = "example.com";
const params = {
    domain: "example.com",
};
(async () => { 
    try { 
        const result = await getContactDetails( config, params, domain);
        console.log("Contact Details Result:", result);
    } catch (error) {
        console.error("Error retrieving contact details:", error);
    }
})();