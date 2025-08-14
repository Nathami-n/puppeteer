import type { LoginUserPayload } from "~/features/auth/zod";
import { auth } from "~/lib/auth.server";

export const loginUserWithEmailAndPassword = async (data: LoginUserPayload) => {
	try {
		await auth.api.signInEmail({
			body: {
				email: data.email,
				password: data.password,
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
};
