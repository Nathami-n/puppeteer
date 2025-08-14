import { Outlet } from "react-router";
import { AppSidebar } from "~/components/custom/app-sidebar";
import DashboardHeader from "~/components/custom/dashboard-header";
import { Separator } from "~/components/ui/separator";
import {
  SidebarInset,
  SidebarProvider
} from "~/components/ui/sidebar";

export const loader = async () => {
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
