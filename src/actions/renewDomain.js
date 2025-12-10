import { renewDomain } from "../../index.js";
import dotenv from "dotenv";
dotenv.config();

const config = {
  endpoint: process.env.BASE_URL,
  username: process.env.EMAIL,
  apiSecret: process.env.API_SECRET,
};

const renewParams = {
    domain: "example.com",
    regperiod: "1",
    addons: {
        idprotection: "1",
        dnsmanagement: "0",
        emailforwarding: "1",
    }
};

(async () => {
  try {
    const result =  await renewDomain(config, renewParams);
    // console.log("Renew Domain Result:", result);
  } catch (error) {
    console.error("Error renewing domain:", error);
  } 
})();