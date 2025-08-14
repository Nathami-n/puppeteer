import { href } from "react-router";
import { signIn } from "~/lib/auth-client";

export async function authenticateUserWithGoogle() {
	return await signIn.social(
		{
			provider: "google",
			callbackURL: href("/dashboard"),
			newUserCallbackURL: href("/onboarding"),
		},
	);
}
