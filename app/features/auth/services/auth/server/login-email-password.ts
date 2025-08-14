import type { LoginUserPayload } from "~/features/auth/zod";
import { auth } from "~/lib/auth.server";
import { generateRandomUserName } from "./email-password";

export const loginUserWithEmailAndPassword = async (data: LoginUserPayload) => {
	return await auth.api.signInEmail({
		body: {
			email: data.email,
			password: data.password,
			name: generateRandomUserName(data.email),
		},
		asResponse: true,
	});
};
