import { href } from "react-router";
import { toast } from "sonner";
import { signIn } from "~/lib/auth-client";

export const authenticateUserWithGoogle = async () => {
	return await signIn.social(
		{
			provider: "google",
			callbackURL: href("/dashboard"),
			newUserCallbackURL: href("/onboarding"),
		},
		{
			onSuccess: () => {
				toast.success("Sign in successful!");
			},
		},
	);
};
