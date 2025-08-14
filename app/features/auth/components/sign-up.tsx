import { zodResolver } from "@hookform/resolvers/zod";
import { Eye, EyeClosed, Star2 } from "@solar-icons/react/ssr";
import { useState } from "react";
import { Form, href, Link, useNavigation } from "react-router";
import { useRemixForm } from "remix-hook-form";
import { Logo } from "~/components/custom/logo";
import { Button } from "~/components/ui/button";
import { Input, InputError, InputField } from "~/components/ui/input";
import { Separator } from "~/components/ui/separator";
import { signUpSchema } from "../zod";
import RandomUsers from "./random-users";
import { toast } from "sonner";
import { authenticateUserWithGoogle } from "../services/auth/client";

export const resolver = zodResolver(signUpSchema);

export const SignUpComponent = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [googleLoading, setGoogleLoading] = useState(false);
  const { state } = useNavigation();

  const isLoading = state !== "idle";

  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useRemixForm({
    resolver,
    defaultValues: {
      email: "",
      password: "",
      confirmPassword: "",
    },
    mode: "onSubmit",
  });

  const handleGoogle = async () => {
    setGoogleLoading(true);
    try {
      await authenticateUserWithGoogle();
    } catch (error) {
      console.error(error);
      toast.error("Something went wrong");
    } finally {
      setGoogleLoading(false);
    }
  };

  return (
    <div className="flex flex-col">
      <div className="relative z-10 bg-white w-full max-w-sm rounded-3xl  shadow-2xl p-8 flex flex-col items-center">
        <div>
          <Logo
            className="text-primary"
            containerClassName="flex flex-col items-center"
            text="CrawliQ"
          />
        </div>
        <h1 className="text-3xl md:text-4xl  font-medium tracking-tighter text-center mb-2">
          Let's set you up!
        </h1>

        <div className="flex flex-col w-full gap-4">
          <Form onSubmit={handleSubmit} method="POST">
            <div className="w-full flex flex-col gap-3">
              <div>
                <InputField className="relative">
                  <Input placeholder="Email" {...register("email")} />
                </InputField>
                {errors.email && (
                  <InputError>{errors.email.message}</InputError>
                )}
              </div>
              <div>
                <InputField className="relative">
                  <Input
                    placeholder="Password"
                    {...register("password")}
                    type={showPassword ? "text" : "password"}
                  />
                  {showPassword ? (
                    <EyeClosed
                      weight="LineDuotone"
                      className="absolute right-3 top-1/2 -translate-y-1/2 cursor-pointer"
                      onClick={() => setShowPassword(!showPassword)}
                    />
                  ) : (
                    <Eye
                      className="absolute right-3 top-1/2 -translate-y-1/2 cursor-pointer"
                      onClick={() => setShowPassword(!showPassword)}
                      weight="LineDuotone"
                    />
                  )}
                </InputField>
                {errors.password && (
                  <InputError>{errors.password.message}</InputError>
                )}
              </div>
              <div>
                <InputField className="relative">
                  <Input
                    placeholder="Confirm password"
                    {...register("confirmPassword")}
                    type={showConfirmPassword ? "text" : "password"}
                  />
                  {showConfirmPassword ? (
                    <EyeClosed
                      weight="LineDuotone"
                      className="absolute right-3 top-1/2 -translate-y-1/2 cursor-pointer"
                      onClick={() =>
                        setShowConfirmPassword(!showConfirmPassword)
                      }
                    />
                  ) : (
                    <Eye
                      weight="LineDuotone"
                      className="absolute right-3 top-1/2 -translate-y-1/2 cursor-pointer"
                      onClick={() =>
                        setShowConfirmPassword(!showConfirmPassword)
                      }
                    />
                  )}
                </InputField>
                {errors.confirmPassword && (
                  <InputError>{errors.confirmPassword.message}</InputError>
                )}
              </div>
            </div>
            <Separator className="my-2" />
            <Button
              disabled={isLoading}
              type="submit"
              className="w-full bg-primary hover:bg-primary/90 text-white cursor-pointer"
            >
              {isLoading ? (
                <Star2 className="animate-spin size-6" weight="LineDuotone" />
              ) : (
                "Sign up"
              )}
            </Button>
          </Form>
          <Button
            type="button"
            onClick={handleGoogle}
            disabled={isLoading || googleLoading}
            className="gap-2 bg-gradient-to-b cursor-pointer from-[#232526] to-[#2d2e30] font-medium text-white shadow hover:brightness-110 transition text-sm"
          >
            <img
              src="/icons/google-color.svg"
              alt="Google"
              className="size-5"
            />
            Continue with Google
          </Button>
          <div className="w-full text-center mt-2">
            <span className="text-xs text-muted-foreground">
              Already have an account?{" "}
              <Link to={href("/sign-in")} className="underline">
                Sign in!
              </Link>
            </span>
          </div>
        </div>
      </div>
      <div className="mt-12 ">
        <RandomUsers />
      </div>
    </div>
  );
};
