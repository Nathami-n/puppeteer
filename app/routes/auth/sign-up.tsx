import { getValidatedFormData } from "remix-hook-form";
import {
  resolver,
  SignUpComponent,
  type SignupUserPayload,
} from "~/features/auth";
import type { Route } from "./+types/sign-in";
import { authenticateUserWithEmailAndPassword } from "~/features/auth/services/auth/server";
import { href, redirect } from "react-router";

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

  return response;
};
export default function SignUpPage() {
  return <SignUpComponent />;
}
