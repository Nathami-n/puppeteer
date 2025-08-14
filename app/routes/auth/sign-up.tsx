import { href, redirect } from "react-router";
import { getValidatedFormData } from "remix-hook-form";
import { SignUpComponent, type SignupUserPayload } from "~/features/auth";
import { resolver } from "~/features/auth/components/sign-up";
import { authenticateUserWithEmailAndPassword } from "~/features/auth/services/auth/server";
import type { Route } from "./+types/sign-in";

export const action = async ({ request }: Route.ActionArgs) => {
  const {
    errors,
    data,
    receivedValues: defaultValues,
  } = await getValidatedFormData<SignupUserPayload>(request, resolver);
  if (errors) {
    return { errors, defaultValues };
  }

  const response = await authenticateUserWithEmailAndPassword(data);
  if (response.ok) {
    return redirect(href("/sign-in"));
  }

  const error = await response.json();
  return {
    errors: {
      custom: {
        message: error.message,
      },
    },
  };
};
export default function SignUpPage() {
  return <SignUpComponent />;
}
