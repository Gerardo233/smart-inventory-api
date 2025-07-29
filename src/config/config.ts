import dotenv from "dotenv";

dotenv.config();

interface Config {
  port: number;
  databaseUrl: string;
  nodeEnv: string;
}

const config: Config = {
  port: Number(process.env.PORT) || 3000,
  databaseUrl: process.env.DATABASE_URL || "mongodb://localhost:27017/myapp",
  nodeEnv: process.env.NODE_ENV || "development",
};

export default config;
