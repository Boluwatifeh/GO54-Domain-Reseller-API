import path from "path";
import { fileURLToPath } from "url";
import dotenv from "dotenv";

// Ensure dotenv loads from project root
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

dotenv.config({ path: path.resolve(__dirname, "../.env") });

// import { getEppCode } from "../src/actions/getEppCode.js";
// import { getRegistrarLockStatus } from "../src/actions/getRegistrarLock.js";
// import { registerDomain } from "../src/actions/registerDomain.js"; 
// import { renewDomain } from "../src/actions/renewDomain.js";
// import { syncDomainDetails } from "../src/actions/syncDomainDetails.js";
// import { transferDomain } from "../src/actions/transferDomain.js"; 
import { transferSyncDomain } from "../src/actions/transferSyncDomain.js";

const config = {
  endpoint: process.env.BASE_URL,  
  username: process.env.EMAIL,
  apiSecret: process.env.API_SECRET,
};


const params = { domain: "example.com" };

const response = await transferSyncDomain(config, params, params.domain);
console.log(response);

