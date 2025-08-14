import { href, redirect } from "react-router";
import { getValidatedFormData } from "remix-hook-form";
import {
  resolver,
  SignInComponent,
  type LoginUserPayload,
} from "~/features/auth";
import { loginUserWithEmailAndPassword } from "~/features/auth/services/auth/server";
import type { Route } from "./+types/sign-in";

export const action = async ({ request }: Route.ActionArgs) => {
  const {
    errors,
    data,
    receivedValues: defaultValues,
  } = await getValidatedFormData<LoginUserPayload>(request, resolver);
  if (errors) {
    return { errors, defaultValues };
  }

  const response = await loginUserWithEmailAndPassword(data);
  if (response.ok) {
    return redirect(href("/dashboard"));
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
export default function SignInPage() {
  return <SignInComponent />;
}
