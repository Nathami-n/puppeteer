import z from "zod";
import { cleanEnv } from "./clean-env";


const serverEnvSchema = z.object({
    NODE_ENV: z.enum(["development", "test", "production"]).default("development"),


})

const { NODE_ENV } = serverEnvSchema.parse(cleanEnv(process.env));

export {
    NODE_ENV
}