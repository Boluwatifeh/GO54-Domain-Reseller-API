import { toggleRegistrarLock } from "../../index.js";
import dotenv from "dotenv";
dotenv.config();
const config = {
  endpoint: process.env.BASE_URL,
  username: process.env.EMAIL,
    apiSecret: process.env.API_SECRET,
};

const params = { 
    domain: "example.com",
    lockstatus: true  // Set to true to enable lock, false to disable
};

(async () => {
  try {
    const result =  await toggleRegistrarLock(config, { lockstatus: params.lockstatus }, params.domain);
    console.log("Domain Registrar Lock Update Result:", result);
    } catch (error) {
    console.error("Error updating domain registrar lock:", error);
  }
})(); 