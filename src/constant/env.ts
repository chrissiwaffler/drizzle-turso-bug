import dotenv from "dotenv";
dotenv.config();

export const DATABASE_URL: string = process.env.DATABASE_URL!;
export const DATABASE_AUTH_TOKEN: string = process.env.DATABASE_AUTH_TOKEN!;
