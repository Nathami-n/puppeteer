import {
  AudioWaveform,
  Command,
  Frame,
  GalleryVerticalEnd,
  Map,
} from "lucide-react";
import type * as React from "react";

import { NavMain } from "~/components/custom/nav-main";
import { NavProjects } from "~/components/custom/nav-projects";
import { NavUser } from "~/components/custom/nav-user";
import { TeamSwitcher } from "~/components/custom/team-switcher";
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
  SidebarRail,
  SidebarSeparator,
} from "~/components/ui/sidebar";

import {
  Book2,
  Chart2,
  CpuBolt,
  Mailbox,
  PieChart,
  SettingsMinimalistic,
  TransferHorizontal,
  VolumeLoud,
} from "@solar-icons/react/ssr";

const data = {
  user: {
    name: "shadcn",
    email: "m@example.com",
    avatar: "/avatars/shadcn.jpg",
  },
  teams: [
    { name: "Acme Inc", logo: GalleryVerticalEnd, plan: "Enterprise" },
    { name: "Acme Corp.", logo: AudioWaveform, plan: "Startup" },
    { name: "Evil Corp.", logo: Command, plan: "Free" },
  ],
  navMain: [
    {
      title: "Overview",
      url: "#",
      icon: Chart2,
      isActive: true,
      items: [
        { title: "History", url: "#" },
        { title: "Settings", url: "#" },
      ],
    },
    {
      title: "Agents",
      url: "#",
      icon: CpuBolt,
      items: [
        { title: "My Agents", url: "#" },
        { title: "Create Agent", url: "#" },
      ],
    },
    {
      title: "Contacts",
      url: "#",
      icon: Book2,
      items: [
        { title: "Contact List", url: "#" },
        { title: "Import Contacts", url: "#" },
      ],
    },
    {
      title: "Campaigns",
      url: "#",
      icon: VolumeLoud,
      items: [
        { title: "Email Campaigns", url: "#" },
        { title: "Templates", url: "#" },
      ],
    },
    {
      title: "Monitoring",
      icon: Mailbox,
      items: [
        { title: "Inbox", url: "#" },
        { title: "Alerts", url: "#" },
      ],
    },
    {
      title: "Integrations",
      url: "#",
      icon: TransferHorizontal,
      items: [{ title: "All Integrations", url: "#" }],
    },
    {
      title: "Settings",
      url: "#",
      icon: SettingsMinimalistic,
      items: [
        { title: "General", url: "#" },
        { title: "Billing", url: "#" },
      ],
    },
  ],
  projects: [
    { name: "Design Engineering", url: "#", icon: Frame },
    { name: "Sales & Marketing", url: "#", icon: PieChart },
    { name: "Travel", url: "#", icon: Map },
  ],
};

export function AppSidebar({ ...props }: React.ComponentProps<typeof Sidebar>) {
  return (
    <Sidebar collapsible="icon" {...props}>
      <SidebarHeader>
        <TeamSwitcher teams={data.teams} />
      </SidebarHeader>
      <SidebarSeparator className="mx-auto" />
      <SidebarContent>
        <NavMain items={data.navMain} />
        <NavProjects projects={data.projects} />
      </SidebarContent>
      <SidebarSeparator className="mx-auto" />
      <SidebarFooter>
        <NavUser user={data.user} />
      </SidebarFooter>
      <SidebarRail />
    </Sidebar>
  );
}
