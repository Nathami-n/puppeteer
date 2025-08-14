import { getValidatedFormData } from "remix-hook-form";
import {
  resolver,
  SignUpComponent,
  type SignupUserPayload,
} from "~/features/auth";
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
  console.log(data)
  return data;
};
export default function SignUpPage() {
  return <SignUpComponent />;
}
