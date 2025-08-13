import z from "zod";
import { cleanEnv } from "./clean-env";


const serverEnvSchema = z.object({
    NODE_ENV: z.enum(["development", "test", "production"]).default("development"),
    GOOGLE_SECRET: z.string(),
    GOOGLE_CLIENT_ID: z.string(),


})

const { NODE_ENV, GOOGLE_CLIENT_ID, GOOGLE_SECRET} = serverEnvSchema.parse(cleanEnv(process.env));

export {
    NODE_ENV,
    GOOGLE_CLIENT_ID,
    GOOGLE_SECRET
}