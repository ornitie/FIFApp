const dotenv = require("dotenv");

dotenv.config();

module.exports = {
  FUTBIN_URL: process.env.FUTBIN_URL,
  COOKIE: process.env.COOKIE,
  SEC_FETCH_DEST: process.env.SEC_FETCH_DEST,
  SEC_FETCH_MODE: process.env.SEC_FETCH_MODE,
  SEC_FETCH_SITE: process.env.SEC_FETCH_SITE,
  SEC_FETCH_USER: process.env.SEC_FETCH_USER,
  UPGRADE_INSECURE_REQUESTS: process.env.UPGRADE_INSECURE_REQUESTS,
  SEC_CH_UA_MOBILE: process.env.SEC_CH_UA_MOBILE,
  SEC_CH_UA_PLATFORM: process.env.SEC_CH_UA_PLATFORM,
  SEC_CH_UA: process.env.SEC_CH_UA,
  ACCEPT: process.env.ACCEPT,
  CACHE_CONTROL: process.env.CACHE_CONTROL,
  ACCEPT_LANGUAGE: process.env.ACCEPT_LANGUAGE,
  REFERRER_POLICY: process.env.REFERRER_POLICY,
};
