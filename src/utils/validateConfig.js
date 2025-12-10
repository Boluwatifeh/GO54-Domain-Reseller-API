import { ConfigError } from "../errors/errors.js";

export function validateConfig(config) {
  if (!config || typeof config !== "object") {
    throw new ConfigError("Config must be an object.");
  }

  const { endpoint, username, apiSecret } = config;

  if (!endpoint) throw new ConfigError("Missing endpoint in config.");
  if (!username) throw new ConfigError("Missing username in config.");
  if (!apiSecret) throw new ConfigError("Missing apiSecret in config.");

  // enforce URL formatting
  if (!endpoint.startsWith("http")) {
    throw new ConfigError("Endpoint must be a valid URL.");
  }
}
