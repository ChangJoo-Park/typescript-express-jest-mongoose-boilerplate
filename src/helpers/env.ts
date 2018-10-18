import dotenv from "dotenv";

dotenv.config();

interface IEnvironment {
    dbHost: string;
    dbPort: string;
    dbName: string;
    port: string;
}

const getEnv = (nodeEnv: string = "develop"): IEnvironment => {
    const procesENV = process.env;
    const upperCasedEnv: string = nodeEnv.toUpperCase() || "DEVELOP";

    return {
        dbHost: procesENV[`${upperCasedEnv}_DB_HOST`] || "mongodb:localhost",
        dbName: procesENV[`${upperCasedEnv}_DB_NAME`] || "myapp_dev",
        dbPort: procesENV[`${upperCasedEnv}_DB_PORT`] || "27017",
        port: procesENV[`${upperCasedEnv}_PORT`] || "8000",
    };
};

export default {
    env: getEnv(process.env.NODE_ENV),
};
