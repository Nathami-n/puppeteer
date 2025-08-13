import * as React from "react";
import { href, Link } from "react-router";
import { Logo } from "~/components/custom/logo";
import { Button } from "~/components/ui/button";
import { Input } from "~/components/ui/input";
import RandomUsers from "./random-users";

export const SignUpComponent = () => {
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");
  const [error, setError] = React.useState("");

  const validateEmail = (email: string) => {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  };

  const handleSignIn = () => {
    if (!email || !password) {
      setError("Please enter both email and password.");
      return;
    }
    if (!validateEmail(email)) {
      setError("Please enter a valid email address.");
      return;
    }
    setError("");
    alert("Sign in successful! (Demo)");
  };

  return (
    <div>
      <div className="relative z-10 w-full max-w-sm rounded-3xl  shadow-2xl p-8 flex flex-col items-center">
        <div className="mb-2">
          <Logo
            className="text-primary"
            containerClassName="flex flex-col items-center"
            text="CrawliQ"
          />
        </div>

        <div className="flex flex-col w-full gap-4">
          <div className="w-full flex flex-col gap-3">
            <Input />
            <Input />
          </div>
          <hr className="opacity-10" />
          <div className="space-y-2">
            <Button
              onClick={handleSignIn}
              className="w-full bg-primary hover:bg-primary/90 text-white cursor-pointer"
            >
              Sign in
            </Button>
          
            <Button className="w-full flex items-center justify-center gap-2 bg-gradient-to-b from-[#232526] to-[#2d2e30] rounded-full px-5 py-3 font-medium text-white shadow hover:brightness-110 transition mb-2 text-sm">
              <img
                src="https://www.svgrepo.com/show/475656/google-color.svg"
                alt="Google"
                className="w-5 h-5"
              />
              Continue with Google
            </Button>
            <div className="w-full text-center mt-2">
              <span className="text-xs text-muted-foreground">
                Already have an account?{" "}
                <Link to={href("/sign-up")} className="underline">
                  Sign in!
                </Link>
              </span>
            </div>
          </div>
        </div>
      </div>
      <div className="mt-12 ">
        <RandomUsers />
      </div>
    </div>
  );
};
