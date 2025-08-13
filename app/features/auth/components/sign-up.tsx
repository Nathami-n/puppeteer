import { Form, href, Link } from "react-router";
import { Logo } from "~/components/custom/logo";
import { Button } from "~/components/ui/button";
import RandomUsers from "./random-users";
import { Separator } from "~/components/ui/separator";
import { Input, InputError, InputField } from "~/components/ui/input";

export const SignUpComponent = () => {
  return (
    <Form>
      <div className="relative z-10 w-full max-w-sm rounded-3xl  shadow-2xl p-8 flex flex-col items-center">
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
          <div className="w-full flex flex-col gap-3">
            <div>
              <InputField className="relative">
                <Input />
              </InputField>
              <InputError>error</InputError>
            </div>
          </div>
          <Separator />
          <div className="space-y-2">
            <Button
              type="submit"
              className="w-full bg-primary hover:bg-primary/90 text-white cursor-pointer"
            >
              Sign up
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
    </Form>
  );
};
