import { Outlet } from "react-router";

export default function AuthLayout() {
  return (
    <div className="flex items-center min-h-screen w-full justify-center relative">
      <div className="absolute inset-0">
        <div className="absolute inset-0 -z-10 h-full w-full bg-white bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:14px_24px] [&>div]:absolute [&>div]:left-0 [&>div]:right-0 [&>div]:top-0 [&>div]:-z-10 [&>div]:m-auto [&>div]:h-[310px] [&>div]:w-[310px] [&>div]:rounded-full [&>div]:bg-fuchsia-400 [&>div]:opacity-20 [&>div]:blur-[100px]">
          <div></div>
        </div>
      </div>
      <Outlet />
    </div>
  );
}
