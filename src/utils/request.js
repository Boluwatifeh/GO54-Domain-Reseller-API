import { validateConfig } from "./validateConfig.js";
import { ConfigError } from "../errors/errors.js";
import { generateToken } from "./generateToken.js";
import { createAxiosClient } from "../config/axiosClient.js";
import { formatError } from "./formatError.js";

/**
 * Internal reusable request handler
 */
export async function request(actionName, config, method, url, options = {}) {
  // 1. Validate config once
  validateConfig(config);

  // 2. Generate token safely
  let token;
  try {
    token = generateToken(config.username, config.apiSecret);
  } catch (err) {
    throw new ConfigError("Failed to generate authentication token.");
  }

  // 3. Prepare axios client
  const client = createAxiosClient(config.endpoint);

  try {
    const response = await client.request({
      method,
      url,
      headers: {
        username: config.username,
        token,
        ...(options.headers || {}),
      },
      params: options.params,
      data: options.data,
    });

    return response.data;

  } catch (error) {
    throw formatError(error, actionName);
  }
}
