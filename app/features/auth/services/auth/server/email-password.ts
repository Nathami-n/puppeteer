import { href } from "react-router";
import type { SignupUserPayload } from "~/features/auth/zod";
import { auth } from "~/lib/auth.server";

export function generateRandomUserName(email: string) {
	const randomIndex = Math.floor(Math.random() * email.length);

	return email.slice(0, randomIndex);
}
export async function authenticateUserWithEmailAndPassword(
	data: SignupUserPayload,
) {
	return await auth.api.signUpEmail({
		body: {
			email: data.email,
			password: data.password,
			name: generateRandomUserName(data.email),
			callbackURL: href("/sign-in"),
            
		},
		asResponse: true
	});
}
