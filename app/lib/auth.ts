import { betterAuth } from "better-auth";
import { prismaAdapter } from "better-auth/adapters/prisma";
import { db } from "~/config/db/singleton";
import { GOOGLE_CLIENT_ID, GOOGLE_SECRET } from "~/config/env/env.server";

export const auth = betterAuth({
    database: prismaAdapter(db, {
        provider: "postgresql"
    }),
    emailAndPassword: {
        enabled: true,
    },
    socialProviders: {
        google: {
            clientId: GOOGLE_CLIENT_ID,
            clientSecret: GOOGLE_SECRET,
        }
    }

})