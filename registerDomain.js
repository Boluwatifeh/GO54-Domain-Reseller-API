import { registerDomain } from "./index.js";
import dotenv from "dotenv";
dotenv.config();

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

(async () => {
  const result = await registerDomain(config, whoisData);
  console.log(result);
})();
