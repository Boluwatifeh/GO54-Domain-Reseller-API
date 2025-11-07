import { getDomainNameservers } from "./index.js";
import dotenv from "dotenv";
dotenv.config();

const config = {
  endpoint: process.env.BASE_URL,
  username: process.env.EMAIL,
  apiSecret: process.env.API_SECRET,
};
const params = {
  domain: "example.com",
};

(async () => {
  try {
    const result =  await getDomainNameservers(config, params, params.domain);
    console.log("Domain Nameservers Result:", result);
    } catch (error) {
    console.error("Error retrieving domain nameservers:", error);
  }
})(); 