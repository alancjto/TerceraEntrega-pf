const {NODE_ENV, DEV_URL, PROD_URL} = require("../config/config");

const swaggerOpts = {
    swaggerDefinition: {
        openapi: '3.0.0',
        info: {
            title: "Backend Project",
            version: "1.0.0",
            description: "OAS 3.0",
            contact: {
                name: "Alan Da Cruz",
            },
        },
        servers: [
            {
                url: `https://coderhousebackend-${NODE_ENV}-${PROD_URL}.up.railway.app/api/v1`,
            },
        ],
    },
    apis: [`./src/docs/**/*.yml`],
};

module.exports = swaggerOpts;