import path from "path";
import { fileURLToPath } from "url";
import dotenv from "dotenv";

// Ensure dotenv loads from project root
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

dotenv.config({ path: path.resolve(__dirname, "../.env") });

// import { getEppCode } from "../src/actions/getEppCode.js";
import { getRegistrarLockStatus } from "../src/actions/getRegistrarLock.js";

const config = {
  endpoint: process.env.BASE_URL,  
  username: process.env.EMAIL,
  apiSecret: process.env.API_SECRET,
};

const params = { domain: "example.com" };

const response = await getRegistrarLockStatus(config, params.domain);
console.log(response);

