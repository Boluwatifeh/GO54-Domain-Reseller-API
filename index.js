import axios from "axios";
import crypto from "crypto";
import qs from "qs"; 

/**
 * Generate API token 
 * @param {string} username - your GO54 registered email
 * @param {string} apiSecret - your  domain reseller API key
 * @returns {string} base64 encoded token
 */
function generateToken(username, apiSecret) {
  const date = new Date();
  const gmtDate = new Date(date.toISOString());
  const formattedDate = gmtDate.toISOString().slice(2, 13).replace("T", " "); 

    const key = `${username}:${formattedDate}`;
    const message = apiSecret;
    
    const hmacHex = crypto.createHmac("sha256", key).update(message).digest("hex");
    const token = Buffer.from(hmacHex).toString("base64");

  return token;
}

/**
 * Register a new domain
 * @param {object} config - API credentials and endpoint
 * @param {object} data - Domain registration details
 */
export async function registerDomain(config, data) {
  const { endpoint, username, apiSecret } = config;
  const token = generateToken(username, apiSecret);

  try {
    const response = await axios.post(
      `${endpoint}/order/domains/register`,
      qs.stringify(data), 
      {
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
          username,
          token,
        },
      }
    );

    console.log("Domain Registered Successfully");
    return response.data;

  } catch (error) {
    console.error("Error registering domain:");
    console.error(error.response ? error.response.data : error.message);
    // throw error;
  }
}

export async function transferDomain(config, data) {
  const { endpoint, username, apiSecret } = config;
  const token = generateToken(username, apiSecret);

  try {
    const response = await axios.post(
      `${endpoint}/order/domains/transfer`,
      qs.stringify(data), 
      {
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
          username,
          token,
        },
      }
    );
    console.log("Domain Transfer Initiated Successfully");
    return response.data; 
  } catch (error) {
    console.error("Error initiating domain transfer:");
    console.error(error.response ? error.response.data : error.message);
    // throw error;
  };
}

export async function renewDomain(config, data) {
  const { endpoint, username, apiSecret } = config;
  const token = generateToken(username, apiSecret); 

  try {
    const response = await axios.post(
      `${endpoint}/order/domains/renew`,
      qs.stringify(data), 
      {
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
          username,
          token,
        },
      }
    );
    console.log("Domain Renewed Successfully");
    return response.data; 
  } catch (error) {
    console.error("Error renewing domain:");
    console.error(error.response ? error.response.data : error.message);
    // throw error;
  }
}

export async function getEppCode(config, data, domain) {
  const { endpoint, username, apiSecret } = config;
  const token = generateToken(username, apiSecret);
  try {
    const response = await axios.get(
      `${endpoint}/domains/${domain}/eppcode`,
      {
        params : data,
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
          username: username,
          token: token,
        },
      }
    );
    console.log("EPP Code Retrieved Successfully");
    return response.data; 
  } catch (error) {
    console.error("Error retrieving EPP code:");
    console.error(error.response ? error.response.data : error.message);
    // throw error;
  }
}

export async function getContactDetails(config, data, domain) {
  const { endpoint, username, apiSecret } = config;
  const token = generateToken(username, apiSecret); 
  try {
    const response = await axios.get(
      `${endpoint}/domains/${domain}/contact`,
      {
        params : data,
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
          username: username,
          token: token,
        },
      }
    );
    console.log("Contact Details Retrieved Successfully");
    return response.data; 
  } catch (error) {
    console.error("Error retrieving contact details:");
    console.error(error.response ? error.response.data : error.message);
    // throw error;
  } 
}

export async function transferSyncDomain(config, data, domain) {
  const { endpoint, username, apiSecret } = config;
  const token = generateToken(username, apiSecret);
  try {
    const response = await axios.post(
      `${endpoint}/domains/${domain}/transfersync`,
      qs.stringify(data), 
      {
        headers: { 
          "Content-Type": "application/x-www-form-urlencoded",
          username,
          token,
        },
      }
    );
    console.log("Domain Transfer Synchronized Successfully");
    return response.data; 
  } catch (error) {
    console.error("Error synchronizing domain transfer:");
    console.error(error.response ? error.response.data : error.message);
    // throw error;
  } 
}

export async function syncDomainDetails(config, data, domain) {
  const { endpoint, username, apiSecret } = config;
  const token = generateToken(username, apiSecret);
  try {
    const response = await axios.post(
      `${endpoint}/domains/${domain}/sync`,
      qs.stringify(data),
      {
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
          username,
          token,
        },
      }
    );
    console.log("Domain Details Synchronized Successfully");
    return response.data; 
  } catch (error) {
    console.error("Error synchronizing domain details:");
    console.error(error.response ? error.response.data : error.message);
    // throw error;
  }
}

export async function getRegistrarLockStatus(config, data, domain) {
  const { endpoint, username, apiSecret } = config;
  const token = generateToken(username, apiSecret);
  try {
    const response = await axios.get(
      `${endpoint}/domains/${domain}/lock`,
      {
        params : data,
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
          username: username,
          token: token,
        },
      }
    );
    console.log("Registrar Lock Status Retrieved Successfully");
    return response.data; 
  } catch (error) {
    console.error("Error retrieving registrar lock status:");
    console.error(error.response ? error.response.data : error.message);
    // throw error;
  }
}

export async function getDomainNameservers(config, data, domain) {
  const { endpoint, username, apiSecret } = config;
  const token = generateToken(username, apiSecret);
  try {
    const response = await axios.get(
      `${endpoint}/domains/${domain}/nameservers`,
      {
        params : data,
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
          username: username,
          token: token,
        },
      }
    );
    console.log("Domain Nameservers Retrieved Successfully");
    return response.data; 
  } catch (error) {
    console.error("Error retrieving domain nameservers:");
    console.error(error.response ? error.response.data : error.message);
    // throw error;
  } 
}
