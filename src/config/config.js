const { config } = require("dotenv");

config({ path: `.env.${process.env.NODE_ENV || "development"}.local` });

const {
    API_VERSION,
    NODE_ENV,
    ORIGIN,
    DB_USER,
    DB_PASSWORD,
    GITHUB_CLIENT_ID,
    GITHUB_CLIENT_SECRET,
    ROLES,
    SECRET_JWT,
    EMAIL,
    EMAIL_PSW,
    SMS_ACC_SID,
    SMS_AUTH_TOKEN,
    SMS_PHONE,
} = process.env;

module.exports = {
    API_VERSION,
    NODE_ENV,
    ORIGIN,
    DB_USER,
    DB_PASSWORD,
    GITHUB_CLIENT_ID,
    GITHUB_CLIENT_SECRET,
    ROLES,
    SECRET_JWT,
    EMAIL,
    EMAIL_PSW,
    SMS_ACC_SID,
    SMS_AUTH_TOKEN,
    SMS_PHONE,
};