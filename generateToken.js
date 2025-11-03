import crypto from "crypto";
import dotenv from "dotenv";
dotenv.config();

const username = process.env.EMAIL; // your GO54 registered email
const apiSecret = process.env.API_SECRET; // your GO54 domain reseller API key

const date = new Date();
const gmtDate = new Date(date.toISOString()); 
const formattedDate = gmtDate.toISOString().slice(2, 13).replace("T", " "); 

// Create token 
const key = `${username}:${formattedDate}`;
const message = apiSecret;
const hmacHex = crypto.createHmac("sha256", key).update(message).digest("hex");
const token = Buffer.from(hmacHex).toString("base64");

console.log("Generated Token:", token);