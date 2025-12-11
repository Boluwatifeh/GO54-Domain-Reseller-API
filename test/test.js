import path from "path";
import { fileURLToPath } from "url";
import dotenv from "dotenv";

// Ensure dotenv loads from project root
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

dotenv.config({ path: path.resolve(__dirname, "../.env") });

// import { getEppCode } from "../src/actions/getEppCode.js";
// import { getRegistrarLockStatus } from "../src/actions/getRegistrarLock.js";
import { registerDomain } from "../src/actions/registerDomain.js"; 

const config = {
  endpoint: process.env.BASE_URL,  
  username: process.env.EMAIL,
  apiSecret: process.env.API_SECRET,
};

const whoisData = {
  domain: "example.com",
  regperiod: 1,
  nameservers: {
    ns1: "nsa.whogohost.com",
    ns2: "nsb.whogohost.com",
  },
  contacts: {
    registrant: {
      firstname: "example",
      lastname: "testing",
      fullname: "example testing",
      companyname: "textmachine",
      email: "exam@gmail.com",
      address1: "4 office",
      city: "Lag",
      state: "Lagos",
      zipcode: "110001",
      country: "NG",
      phonenumber: "+234.812345678",
    },
    admin: {
      firstname: "example",
      lastname: "testing",
      fullname: "example testing",
      companyname: "textmachine",
      email: "exam@gmail.com",
      address1: "4 office",
      city: "Lag",
      state: "Lagos",
      zipcode: "110001",
      country: "NG",
      phonenumber: "+234.812345678",
    },
    billing: {
      firstname: "example",
      lastname: "testing",
      fullname: "example testing",
      companyname: "textmachine",
      email: "exam@gmail.com",
      address1: "4 office",
      city: "Lag",
      state: "Lagos",
      zipcode: "110001",
      country: "NG",
      phonenumber: "+234.812345678",
    },
    tech: {
      firstname: "example",
      lastname: "testing",
      fullname: "example testing",
      companyname: "textmachine",
      email: "exam@gmail.com",
      address1: "4 office",
      city: "Lag",
      state: "Lagos",
      zipcode: "110001",
      country: "NG",
      phonenumber: "+234.87546898",
    },
  },
};
const params = { domain: "example.com" };

const response = await registerDomain(config, whoisData);
console.log(response);

