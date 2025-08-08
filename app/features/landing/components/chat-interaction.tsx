import { useEffect, useState } from "react";

export function ChatInteraction() {
  const fullResponse =
    "Based on your scraping schedule and target websites, I recommend running your data extraction jobs at 3am UTC. This timing reduces server load and avoids rate limits, ensuring smoother data collection.";

  const [showTypingDots, setShowTypingDots] = useState(true);
  const [displayedText, setDisplayedText] = useState("");

  useEffect(() => {
    const typingTimeout = setTimeout(() => {
      setShowTypingDots(false);
    }, 1500);

    return () => clearTimeout(typingTimeout);
  }, []);

  useEffect(() => {
    if (showTypingDots) return;

    let currentIndex = 0;
    const typingInterval = setInterval(() => {
      currentIndex++;
      setDisplayedText(fullResponse.slice(0, currentIndex));
      if (currentIndex === fullResponse.length) {
        clearInterval(typingInterval);
      }
    }, 30);

    return () => clearInterval(typingInterval);
  }, [showTypingDots, fullResponse]);

  return (
    <div
      className="flex flex-col items-start justify-between min-h-[600px] md:min-h-[500px] p-0.5 relative
        before:absolute before:-left-0.5 before:top-0 before:z-10 before:h-screen before:w-px before:bg-border before:content-['']
        after:absolute after:-top-0.5 after:left-0 after:z-10 after:h-px after:w-screen after:bg-border after:content-['']
        group cursor-pointer max-h-[400px]"
    >
      <div className="relative flex flex-col w-full max-w-xl mx-auto p-4 gap-6 overflow-hidden">
        {/* Question */}
        <div className="flex items-end justify-end gap-3 max-w-md ml-auto">
          <div className="bg-primary text-white p-4 rounded-2xl shadow-[0_0_10px_rgba(0,0,0,0.05)] max-w-[280px]">
            <p>
              What is the best time to schedule my web scraping jobs to avoid
              server rate limits and downtime?
            </p>
          </div>
          <div className="flex items-center bg-background rounded-full w-fit border border-border flex-shrink-0">
            <img
              src="https://randomuser.me/api/portraits/men/79.jpg"
              alt="User Avatar"
              className="size-8 rounded-full flex-shrink-0"
            />
          </div>
        </div>

 
        {showTypingDots ? (
          <div
            className="flex items-center space-x-2 max-w-[300px] p-4 bg-white border border-border rounded-xl shadow-[0_0_10px_rgba(0,0,0,0.05)]"
            aria-label="AI is typing"
          >
            <div className="w-3 h-3 bg-muted-foreground rounded-full animate-bounce delay-75"></div>
            <div className="w-3 h-3 bg-muted-foreground rounded-full animate-bounce delay-150"></div>
            <div className="w-3 h-3 bg-muted-foreground rounded-full animate-bounce delay-300"></div>
          </div>
        ) : (
          <div
            className="max-w-[300px] p-4 bg-white border border-border rounded-xl shadow-[0_0_10px_rgba(0,0,0,0.05)]
              transition-opacity duration-300 ease-in-out opacity-100 whitespace-pre-wrap"
          >
            <p className="text-muted-foreground prose prose-sm dark:prose-invert text-sm">
              {displayedText}
              {displayedText.length < fullResponse.length && (
                <span className="animate-pulse">|</span>
              )}
            </p>
          </div>
        )}
      </div>

      <div className="flex-1 flex flex-col gap-2 p-6 max-w-xl mx-auto">
        <h3 className="text-lg tracking-tighter font-semibold">
          Real-time AI Collaboration
        </h3>
        <p className="text-muted-foreground">
          Experience real-time assistance. Ask your AI Agent to coordinate
          scraping jobs, troubleshoot data extraction issues, and optimize your
          workflows.
        </p>
      </div>
    </div>
  );
}
