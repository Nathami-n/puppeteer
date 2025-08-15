import { Outlet } from "react-router";
import { AppSidebar } from "~/components/custom/app-sidebar";
import DashboardHeader from "~/components/custom/dashboard-header";
import { Separator } from "~/components/ui/separator";
import { SidebarInset, SidebarProvider } from "~/components/ui/sidebar";
import { getSession, sessionMiddleware } from "~/middleware/auth-check.server";

export const loader = async ({context}) => {
const session = getSession(context);

  return {
    ok: true,
  };
};
export default function DashboardLayout() {
  return (
    <SidebarProvider>
      <AppSidebar />
      <SidebarInset>
        <div>
          <DashboardHeader />
          <Separator />
          <Outlet />
        </div>
      </SidebarInset>
    </SidebarProvider>
  );
}

export const unstable_middleware = [sessionMiddleware];
