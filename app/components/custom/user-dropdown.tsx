import { Icon } from "@iconify/react";
import { Avatar, AvatarFallback, AvatarImage } from "~/components/ui/avatar";
import { Badge } from "~/components/ui/badge";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuPortal,
  DropdownMenuRadioGroup,
  DropdownMenuRadioItem,
  DropdownMenuSeparator,
  DropdownMenuSub,
  DropdownMenuSubContent,
  DropdownMenuSubTrigger,
  DropdownMenuTrigger,
} from "~/components/ui/dropdown-menu";
import { cn } from "~/lib/utils";
import { CustomAvatar } from "./custom-avatar";
import {
  Bell,
  Download,
  Gift,
  Help,
  LetterUnread,
  Logout2,
  Settings,
  SquareTopDown,
  Star,
  Star2,
  StarAngle,
  Sun,
  User,
  UserBlockRounded,
  UserCheck,
  UserCircle,
  UserHeart,
} from "@solar-icons/react/ssr";

const MENU_ITEMS = {
  status: [
    {
      value: "focus",
      icon: "solar:emoji-funny-circle-line-duotone",
      label: "Focus",
    },
    {
      value: "offline",
      icon: "solar:moon-sleep-line-duotone",
      label: "Appear Offline",
    },
  ],
  profile: [
    {
      icon: UserCircle,
      label: "Your profile",
      action: "profile",
    },
    {
      icon: Sun,
      label: "Appearance",
      action: "appearance",
    },
    {
      icon: Settings,
      label: "Settings",
      action: "settings",
    },
    {
      icon: Bell,
      label: "Notifications",
      action: "notifications",
    },
  ],
  premium: [
    {
      icon: Star,
      label: "Upgrade to Pro",
      action: "upgrade",
      iconClass: "text-amber-500",
      variant: "BoldDuotone",
      badge: {
        text: "20% off",
        className: "bg-amber-600 text-white text-[11px]",
      },
    },
    {
      icon: Gift,
      label: "Referrals",
      action: "referrals",
    },
  ],
  support: [
    {
      icon: Download,
      label: "Download app",
      action: "download",
    },
    {
      icon: LetterUnread,
      label: "What's new?",
      action: "whats-new",
      rightIcon: SquareTopDown,
    },
    {
      icon: Help,
      label: "Get help?",
      action: "help",
      rightIcon: SquareTopDown,
    },
  ],
  account: [{ icon: Logout2, label: "Log out", action: "logout" }],
};

export const UserDropdown = ({
  user = {
    name: "Nathan George",
    username: "@nate-03",
    avatar: "https://avatars.githubusercontent.com/u/126724835?v=4",
    initials: "AE",
    status: "online",
  },
  onAction = () => {},
  onStatusChange = () => {},
  selectedStatus = "online",
  promoDiscount = "20% off",
  accounts = [],
}) => {
  const renderMenuItem = (item, index) => (
    <DropdownMenuItem
      key={index}
      className={cn(
        item.badge || item.showAvatar || item.rightIcon
          ? "justify-between"
          : "",
        "p-2 rounded-lg cursor-pointer"
      )}
      onClick={() => onAction(item.action)}
    >
      <span className="flex items-center gap-1.5 font-medium">
        <item.icon
          className={`size-5 ${item.iconClass || "text-muted-foreground"}`}
          weight={item.variant || "LineDuotone"}
        />
        {item.label}
      </span>
      {item.badge && (
        <Badge className={item.badge.className}>
          {promoDiscount || item.badge.text}
        </Badge>
      )}
      {item.rightIcon && (
        <item.rightIcon className="size-4 text-muted-foreground" />
      )}
      {item.showAvatar && (
        <CustomAvatar
          icon={UserCheck}
          avatarClassName="border flex items-center justify-center cursor-pointer"
          iconClassName="size-5 text-primary"
        />
      )}
    </DropdownMenuItem>
  );

  const getStatusColor = (status) => {
    const colors = {
      online:
        "text-green-600 bg-green-100 border-green-300 dark:text-green-400 dark:bg-green-900/30 dark:border-green-500/50",
      offline:
        "text-gray-600 bg-gray-100 border-gray-300 dark:text-gray-400 dark:bg-gray-800 dark:border-gray-600",
      busy: "text-red-600 bg-red-100 border-red-300 dark:text-red-400 dark:bg-red-900/30 dark:border-red-500/50",
    };
    return colors[status.toLowerCase()] || colors.online;
  };

  return (
    <DropdownMenu>
      <DropdownMenuTrigger>
        <CustomAvatar
          icon={UserCheck}
          avatarClassName="border flex items-center justify-center cursor-pointer"
          iconClassName="size-5 text-primary"
        />
      </DropdownMenuTrigger>

      <DropdownMenuContent
        className="no-scrollbar w-[310px] rounded-2xl bg-gray-50 dark:bg-black/90 p-0"
        align="end"
      >
        <section className="bg-white dark:bg-gray-100/10 backdrop-blur-lg rounded-2xl p-1 shadow border border-gray-200 dark:border-gray-700/20">
          <div className="flex items-center p-2">
            <div className="flex-1 flex items-center gap-2">
              <CustomAvatar
                icon={UserCheck}
                avatarClassName="border flex items-center justify-center cursor-pointer"
                iconClassName="size-5 text-primary"
              />
              <div>
                <h3 className="font-semibold text-sm text-gray-900 dark:text-gray-100">
                  {user.name}
                </h3>
                <p className="text-muted-foreground text-xs">{user.username}</p>
              </div>
            </div>
            <Badge
              className={`${getStatusColor(user.status)} border-[0.5px] text-[11px] rounded-sm capitalize`}
            >
              {user.status}
            </Badge>
          </div>

          <DropdownMenuSeparator />
          <DropdownMenuGroup>
            {MENU_ITEMS.profile.map(renderMenuItem)}
          </DropdownMenuGroup>

          <DropdownMenuSeparator />
          <DropdownMenuGroup>
            {MENU_ITEMS.premium.map(renderMenuItem)}
          </DropdownMenuGroup>

          <DropdownMenuSeparator />
          <DropdownMenuGroup>
            {MENU_ITEMS.support.map(renderMenuItem)}
          </DropdownMenuGroup>
        </section>

        <section className="mt-1 p-1 rounded-2xl">
          <DropdownMenuGroup>
            {MENU_ITEMS.account.map(renderMenuItem)}
          </DropdownMenuGroup>
        </section>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default UserDropdown;
