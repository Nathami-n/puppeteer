import { z } from "zod";
import { cleanEnv } from "./clean-env";


const serverEnvSchema = z.object({
    NODE_ENV: z
        .enum(["development", "production", "test"])
        .default("development"),
});

const serverEnv = serverEnvSchema.parse(cleanEnv(import.meta.env));

export const { NODE_ENV } = serverEnv;
