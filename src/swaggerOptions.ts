import * as dotenv from "dotenv";
dotenv.config()

const hostname = process.env.HOSTNAME || "http://localhost:3001/"


export const options = {
    definition: {
        openapi: "3.0.0",
        info: {
            title:'Product Microservice API',
            version: '1.0.0',
            description: 'Release 2.0 - Product Microservice'
        },
        servers: [
            {
                url: `${hostname}api/v1/`
            }
        ]
    },
    apis: ["./src/server/routes/index/*.ts", "./src/server/routes/product/*.ts"]
}