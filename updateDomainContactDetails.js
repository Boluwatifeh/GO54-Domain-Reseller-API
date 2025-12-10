import { updateDomainContacts } from "./index.js";
import dotenv from "dotenv";
dotenv.config();
const config = {
  endpoint: process.env.BASE_URL,
  username: process.env.EMAIL,
  apiSecret: process.env.API_SECRET,
};
const domain = "example.com";
const params = { 
    domain: "example.com",
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
  }
};

(async () => {
  try {
    const result =  await updateDomainContacts(config, params, domain);
    console.log("Update Domain Contacts Result:", result);
    } catch (error) {
    console.error("Error updating domain contacts:", error);
  }
})();
 


