import { href } from "react-router";
import type { LoginUserPayload } from "~/features/auth/zod";
import { auth } from "~/lib/auth.server";

export const loginUserWithEmailAndPassword = async (data: LoginUserPayload) => {
	try {
		const res = await auth.api.signInEmail({
			body: {
				email: data.email,
				password: data.password,
				callbackURL: href("/dashboard"),
			},
			asResponse: true,
		});

		return {
			success: true,
			error: null,
			res,
		};
	} catch (error) {
		return {
			success: false,
			error:
				error instanceof Error
					? error.message
					: "Something went wrong please try again later",
			res: null,
		};
	}
};
