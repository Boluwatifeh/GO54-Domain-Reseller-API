import { transferSyncDomain }  from "./index.js";
import dotenv from "dotenv";
dotenv.config();

const config = {
  endpoint: process.env.BASE_URL,
  username: process.env.EMAIL,
  apiSecret: process.env.API_SECRET,
};

const params = {
  domain: "example.com"
};

(async () => {
  try {
    const result = await transferSyncDomain(config, params, params.domain);
    // console.log("Transfer Sync Domain Result:", result);
  } catch (error) {
    console.error("Error synchronizing domain transfer:", error);
  } 
})(); 
