import { useEffect, useState } from "react";
import { OrbitingCircles } from "../../../components/custom/orbiting-circles";
import { AnimatedNotificationList } from "./animated-list-demo";
import { ChatInteraction } from "./chat-interaction";
import IntegrationCards from "./integration-cards";
import { Globe } from "~/components/custom/globle";

export function Bento() {
  return (
    <section className="flex flex-col items-center justify-center w-full relative px-5 md:px-10">
      <div className="border-x border-border mx-5 md:mx-10 relative">
        <div className="absolute top-0 -left-4 md:-left-14 h-full w-4 md:w-14 text-primary/5 bg-[size:10px_10px] [background-image:repeating-linear-gradient(315deg,currentColor_0_1px,#0000_0_50%)]"></div>
        <div className="absolute top-0 -right-4 md:-right-14 h-full w-4 md:w-14 text-primary/5 bg-[size:10px_10px] [background-image:repeating-linear-gradient(315deg,currentColor_0_1px,#0000_0_50%)]"></div>

        <div className="border-b border-border w-full h-full p-10 md:p-14">
          <div className="max-w-xl mx-auto flex flex-col items-center justify-center gap-2">
            <h2 className="text-3xl md:text-4xl font-medium tracking-tighter text-center text-balance pb-1">
              Empower Your Workflow with AI
            </h2>
            <p className="text-muted-foreground text-center text-balance font-medium">
              Ask your AI Agent for real-time collaboration, seamless
              integrations, and actionable insights to streamline your
              operations.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 overflow-hidden">
          <ChatInteraction />

          {/* Seamless Integrations Card */}
          <div className="flex flex-col items-start justify-end min-h-[600px] md:min-h-[500px] p-0.5 relative before:absolute before:-left-0.5 before:top-0 before:z-10 before:h-screen before:w-px before:bg-border before:content-[''] after:absolute after:-top-0.5 after:left-0 after:z-10 after:h-px after:w-screen after:bg-border after:content-[''] group cursor-pointer max-h-[400px]">
            <div className="relative flex size-full items-center justify-center h-full overflow-hidden">
              <IntegrationCards />
            </div>
            <div className="flex-1 flex-col gap-2 p-6">
              <h3 className="text-lg tracking-tighter font-semibold">
                Seamless Integrations
              </h3>
              <p className="text-muted-foreground">
                Unite your favorite tools for effortless connectivity. Boost
                productivity through interconnected workflows.
              </p>
            </div>
          </div>

          <div className="flex flex-col items-start justify-end min-h-[600px] md:min-h-[500px] p-0.5 relative before:absolute before:-left-0.5 before:top-0 before:z-10 before:h-screen before:w-px before:bg-border before:content-[''] after:absolute after:-top-0.5 after:left-0 after:z-10 after:h-px after:w-screen after:bg-border after:content-[''] group cursor-pointer max-h-[400px]">
            <div className="relative flex size-full items-center justify-center h-full overflow-hidden">
              <AnimatedNotificationList />
            </div>
            <div className="flex-1 flex-col gap-2 p-6">
              <h3 className="text-lg tracking-tighter font-semibold">
                Instant Insight Reporting
              </h3>
              <p className="text-muted-foreground">
                Transform raw data into clear insights in seconds. Empower
                smarter decisions with real-time, always-learning intelligence.
              </p>
            </div>
          </div>

          
          <div className="flex flex-col items-start justify-end min-h-[600px] md:min-h-[500px] p-0.5 relative before:absolute before:-left-0.5 before:top-0 before:z-10 before:h-screen before:w-px before:bg-border before:content-[''] after:absolute after:-top-0.5 after:left-0 after:z-10 after:h-px after:w-screen after:bg-border after:content-[''] group cursor-pointer max-h-[400px]">
            <div className="relative flex size-full items-center justify-center h-full overflow-hidden">
              <Globe />
            </div>
            <div className="flex-1 flex-col gap-2 p-6">
              <h3 className="text-lg tracking-tighter font-semibold">
                Smart Automation
              </h3>
              <p className="text-muted-foreground">
                Set it, forget it. Your AI Agent tackles repetitive tasks so you
                can focus on strategy, innovation, and growth.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
