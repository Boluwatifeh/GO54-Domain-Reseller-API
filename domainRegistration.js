import axios from "axios";
import crypto from "crypto";
import dotenv from "dotenv";  
dotenv.config();
// --- Configuration ---
const endpoint = process.env.BASE_URL;
const action = "/order/domains/register";
const username = process.env.EMAIL; // your GO54 registered email
const apiSecret = process.env.API_SECRET; // your  domain reseller API key

const date = new Date();
const gmtDate = new Date(date.toISOString()); 
const formattedDate = gmtDate.toISOString().slice(2, 13).replace("T", " ");

const key = `${username}:${formattedDate}`;
const message = apiSecret;

const hmacHex = crypto.createHmac("sha256", key).update(message).digest("hex");
const token = Buffer.from(hmacHex).toString("base64");

// console.log("Generated Token:", token);

// Convert params to form-urlencoded
const params = new URLSearchParams();

params.append("domain", "example.com");
params.append("regperiod", "1"); 

// Nameservers
params.append("nameservers[ns1]", "nsa.webhosting.com");
params.append("nameservers[ns2]", "nsb.webhosting.com");

// Contacts
const contactTypes = ["registrant", "admin", "tech", "billing"];
for (const type of contactTypes) {
  params.append(`contacts[${type}][firstname]`, "example");
  params.append(`contacts[${type}][lastname]`, "testing");
  params.append(`contacts[${type}][fullname]`, "example testing");
  params.append(`contacts[${type}][companyname]`, "textmachine");
  params.append(`contacts[${type}][email]`, "exam@gmail.com");
  params.append(`contacts[${type}][address1]`, "4 office");
  params.append(`contacts[${type}][address2]`, "");
  params.append(`contacts[${type}][city]`, "Lag");
  params.append(`contacts[${type}][state]`, "Lagos");
  params.append(`contacts[${type}][zipcode]`, "110001");
  params.append(`contacts[${type}][country]`, "NG");
  params.append(`contacts[${type}][phonenumber]`, "+234.812345678");
}

try {
  const response = await axios.post(`${endpoint}${action}`, params, {
    headers: {
      "username": username,
      "token": token,
      "Content-Type": "application/x-www-form-urlencoded"
    }
  });

  console.log("Response:", response.data);

} catch (error) {
  console.error("Error:", error.response ? error.response.data : error.message);
}
