import { updateDomainNameservers } from "./index.js";
import dotenv from "dotenv";
dotenv.config();
const config = {
  endpoint: process.env.BASE_URL,
  username: process.env.EMAIL,
  apiSecret: process.env.API_SECRET,
};
// const domain = "example.com";
const params = { 
    domain: "example.com",
    nameservers: {
        ns1: "ns1.example.com",
        ns2: "ns2.example.com",
        ns3: "ns3.example.com",
        ns4: "ns4.example.com"
    }
};

(async () => {
  try {
    const result =  await updateDomainNameservers(config, params.nameservers, params.domain);
    console.log("Domain Nameservers Update Result:", result);
    } catch (error) {
    console.error("Error updating domain nameservers:", error);
  }
})();
