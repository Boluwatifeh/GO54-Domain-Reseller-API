import { transferDomain } from "./index.js";  
import dotenv from "dotenv";
dotenv.config();

const config = {
  endpoint: process.env.BASE_URL,
  username: process.env.EMAIL,
  apiSecret: process.env.API_SECRET,
};


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

(async () => {
  try {
    const result = await transferDomain(config, transferParams);
    // console.log('Transfer initiated successfully:', result);
    console.log(result);
  } catch (error) {
    console.error('Error:', error.message);
  }
})();
