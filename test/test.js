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
import { transferDomain } from "../src/actions/transferDomain.js"; 

const config = {
  endpoint: process.env.BASE_URL,  
  username: process.env.EMAIL,
  apiSecret: process.env.API_SECRET,
};


// const params = { domain: "example.com" };

const transferParams = {
  domain: "example.com",
  eppcode: "123GJE4",
  regperiod: "1",
  nameservers: [
    "nsa.whogohost.com",
    "nsb.whogohost.com"
  ],
  contacts: {
    registrant: {
      firstname: "example",
      lastname: "testing",
      fullname: "example testing",
      companyname: "textmachine",
      email: "exam@gmail.com",
      address1: "4 office",
      address2: "",
      city: "Lag",
      state: "Lagos",
      zipcode: "110001",
      country: "NG",
      phonenumber: "+234.812345678"
    },
    tech: {
      firstname: "example",
      lastname: "testing",
      fullname: "example testing",
      companyname: "textmachine",
      email: "exam@gmail.com",
      address1: "4 office",
      address2: "",
      city: "Lag",
      state: "Lagos",
      zipcode: "110001",
      country: "NG",
      phonenumber: "+234.87546898"
    },
    billing: {
      firstname: "example",
      lastname: "testing",
      fullname: "example testing",
      companyname: "textmachine",
      email: "exam@gmail.com",
      address1: "4 office",
      address2: "",
      city: "Lag",
      state: "Lagos",
      zipcode: "110001",
      country: "NG",
      phonenumber: "+234.812345678"
    },
    admin: {
      firstname: "example",
      lastname: "testing",
      fullname: "example testing",
      companyname: "textmachine",
      email: "exam@gmail.com",
      address1: "4 office",
      address2: "",
      city: "Lag",
      state: "Lagos",
      zipcode: "110001",
      country: "NG",
      phonenumber: "+234.812345678"
    }
  }
};

const response = await transferDomain(config, transferParams);
console.log(response);

