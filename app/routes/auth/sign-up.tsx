import { href, redirect } from "react-router";
import { getValidatedFormData } from "remix-hook-form";
import { SignUpComponent, type SignupUserPayload } from "~/features/auth";
import { sigupResolver } from "~/features/auth/components/sign-up";
import { authenticateUserWithEmailAndPassword } from "~/features/auth/services/auth/server";
import type { Route } from "./+types/sign-in";

export const action = async ({ request }: Route.ActionArgs) => {
  const {
    errors,
    data,
    receivedValues: defaultValues,
  } = await getValidatedFormData<SignupUserPayload>(request, sigupResolver);
  if (errors) {
    return { errors, defaultValues };
  }

  const { success, error } = await authenticateUserWithEmailAndPassword(data);
  if (success) {
    return redirect(href("/sign-in"));
  }

  return {
    errors: {
      custom: {
        message: error,
      },
    },
  };
};
export default function SignUpPage() {
  return <SignUpComponent />;
}
