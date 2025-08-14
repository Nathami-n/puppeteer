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
	try {
		await auth.api.signUpEmail({
			body: {
				email: data.email,
				password: data.password,
				name: generateRandomUserName(data.email),
				callbackURL: href("/sign-in"),
			},
		});

		return {
			success: true,
			error: null,
		};
	} catch (error) {
		return {
			success: false,
			error:
				error instanceof Error
					? error.message
					: "Something went wrong please try again later",
		};
	}
}
