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
                url: "http://localhost:8000/api/v1/",
            },
        ],
    },
    apis: [`./src/docs/**/*.yml`],
};

module.exports = swaggerOpts;