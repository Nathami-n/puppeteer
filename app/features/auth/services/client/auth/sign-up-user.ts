import { href, type useNavigate } from "react-router";
import { toast } from "sonner";
import { logger } from "~/config/logging/logger";
import { signUp } from "~/lib/auth-client";
import type { SignupUserPayload } from "../../../zod";

function generateRandomUserName(email: string) {
	const randomIndex = Math.floor(Math.random() * email.length);

	return email.slice(0, randomIndex);
}

export const signUpUserWithEmailAndPassword = async (
	data: SignupUserPayload,
	navigate: ReturnType<typeof useNavigate>,
) => {
	return await signUp.email(
		{
			email: data.email,
			password: data.password,
			name: generateRandomUserName(data.email),
		},
		{
			onSuccess: () => {
				toast.success("Sign up successful!");
				navigate(href("/sign-in"));
			},
			onError: (ctx) => {
				logger.error(ctx.error.message);
				toast.warning(ctx.error.message);
			},
		},
	);
};
