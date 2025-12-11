# GO54 Domain Reseller API SDK

A JavaScript SDK for interacting with the GO54 Domain Reseller API.  
Provides easy methods to register, transfer, renew domains, and manage domain details programmatically.

---

## Features

- Generate API tokens automatically  
- Register, transfer, and renew domains  
- Get domain EPP codes and contact details  
- Update domain contacts, nameservers, and registrar locks  
- Fetch domain nameservers and synchronize domain details  
- Built-in configuration validation and standardized error handling  

---

## Installation

```bash
npm install go54-domain-reseller-sdk
```


## Getting started

1. Setup Environment Variables

Create a .env file in your project root:

BASE_URL=https://whogohost.com/host/modules/addons/DomainsReseller/api/index.php
EMAIL=your-reseller-email@example.com
API_SECRET=your-reseller-api-key

2. Import and Configure the SDK

import {
  registerDomain,
  transferDomain,
  renewDomain,
  getDomainNameservers,
  getEppCode,
  getRegistrarLock,
  getContactDetails,
  updateDomainContactDetails,
  updateDomainNameservers,
  updateDomainRegistrarLock,
  syncDomainDetails,
  transferSyncDomain,
} from "go54-domain-reseller-sdk";

const config = {
  endpoint: process.env.BASE_URL,
  username: process.env.EMAIL,
  apiSecret: process.env.API_SECRET,
};

