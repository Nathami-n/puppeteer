import { cn } from "~/lib/utils";
import { AnimatedList } from "~/components/custom/animated-list";

interface Item {
  name: string;
  description: string;
  icon: string;
  color: string;
  time: string;
}

let notifications = [
  {
    name: "Scraping task completed",
    description: "Data extracted successfully",
    time: "15m ago",
    icon: "🤖",
    color: "#00C9A7",
  },
  {
    name: "New scraper added",
    description: "Your AI scraper is ready",
    time: "10m ago",
    icon: "🕸️",
    color: "#FFB800",
  },
  {
    name: "Data anomaly detected",
    description: "Check your scraping rules",
    time: "5m ago",
    icon: "⚠️",
    color: "#FF3D71",
  },
  {
    name: "API quota updated",
    description: "You have 5000 requests left",
    time: "2m ago",
    icon: "📊",
    color: "#1E86FF",
  },
];

notifications = Array.from({ length: 10 }, () => notifications).flat();

const Notification = ({ name, description, icon, color, time }: Item) => {
  return (
    <figure
      className={cn(
        "relative mx-auto min-h-fit w-full max-w-[400px] cursor-pointer overflow-hidden rounded-2xl p-4",

        "transition-all duration-200 ease-in-out hover:scale-[103%]",

        "bg-white [box-shadow:0_0_0_1px_rgba(0,0,0,.03),0_2px_4px_rgba(0,0,0,.05),0_12px_24px_rgba(0,0,0,.05)]"

        // "transform-gpu dark:bg-transparent dark:backdrop-blur-md dark:[border:1px_solid_rgba(255,255,255,.1)] dark:[box-shadow:0_-20px_80px_-20px_#ffffff1f_inset]"
      )}
    >
      <div className="flex flex-row items-center gap-3">
        <div
          className="flex size-10 items-center justify-center rounded-2xl"
          style={{
            backgroundColor: color,
          }}
        >
          <span className="text-lg">{icon}</span>
        </div>
        <div className="flex flex-col overflow-hidden">
          <figcaption className="flex flex-row items-center whitespace-pre text-lg font-medium">
            <span className="text-sm sm:text-sm">{name}</span>
            <span className="mx-1">·</span>
            <span className="text-xs text-muted-foreground">{time}</span>
          </figcaption>
          <p className="text-xs font-normal ">{description}</p>
        </div>
      </div>
    </figure>
  );
};

export function AnimatedNotificationList({
  className,
}: {
  className?: string;
}) {
  return (
    <div
      className={cn(
        "relative flex h-[500px] w-full flex-col overflow-hidden p-2",
        className
      )}
    >
      <AnimatedList>
        {notifications.map((item, idx) => (
          <Notification {...item} key={idx} />
        ))}
      </AnimatedList>

      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-1/4 bg-gradient-to-t from-background"></div>
    </div>
  );
}
