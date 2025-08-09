import { AlignJustify, Moon } from "lucide-react";
import { useEffect, useState } from "react";
import { Link } from "react-router";
import { Logo } from "~/components/custom/logo";
import { Button } from "~/components/ui/button";
import { cn } from "~/lib/utils";
import SmoothDrawerHeader from "./mobile-header";

export const navLinks = [
  { name: "Home", href: "#hero", active: true },
  { name: "How it Works", href: "#bento" },
  { name: "Features", href: "#features" },
  { name: "Pricing", href: "#pricing" },
];
export function HomePageHeader() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    function onScroll() {
      setScrolled(window.scrollY > 50);
    }
    window.addEventListener("scroll", onScroll);
    return () => {
      window.removeEventListener("scroll", onScroll);
    };
  }, []);

  return (
    <>
      <SmoothDrawerHeader open={open} setOpen={setOpen} links={navLinks} />
      <header
        className={cn(
          "sticky z-50 flex justify-center transition-all duration-300 md:mx-0 top-4 mx-0 ",
          {
            "top-6": scrolled,
          }
        )}
      >
        <div
          className={cn(
            "transition-all duration-500 ease-in-out",
            "mx-auto",
            scrolled ? "w-[800px]" : "w-[1120px]"
          )}
        >
          <div
            className={cn(
              "mx-auto max-w-7xl rounded-2xl transition-all duration-300 xl:p-0 shadow-none px-7",
              {
                " border-border backdrop-blur-lg bg-background/75": scrolled,
              }
            )}
          >
            <div className="flex h-[56px] items-center justify-between p-4">
              <Logo
                className="text-primary size-8"
                containerClassName="flex  gap-1 items-center"
                text="CrawliQ"
              />
              <div className="w-full hidden md:block">
                <ul className="relative mx-auto flex w-fit rounded-full h-11 px-2 items-center justify-center">
                  {navLinks.map((link) => (
                    <li className="z-10 cursor-pointer h-full flex items-center justify-center px-4 py-2 text-sm font-medium transition-colors duration-200 text-muted-foreground tracking-tight">
                      <Link to={link.href}>{link.name}</Link>
                    </li>
                  ))}
                  <li
                    className="absolute inset-0 my-1.5 rounded-full bg-accent/60 border-border"
                    style={{ left: "8px", width: "68.8594px" }}
                  ></li>
                </ul>
              </div>
              <div className="flex flex-row items-center gap-1 md:gap-3 shrink-0">
                <div className="flex items-center space-x-6">
                  <Link
                    className="bg-primary h-8 hidden md:flex items-center justify-center text-sm font-normal tracking-wide rounded-full text-primary-foreground  w-fit px-4 shadow-[inset_0_1px_2px_rgba(255,255,255,0.25),0_3px_3px_-1.5px_rgba(16,24,40,0.06),0_1px_1px_rgba(16,24,40,0.08)] border border-white/[0.12]"
                    to="#"
                  >
                    Try for free
                  </Link>
                </div>
                <Button
                  data-slot="button"
                  className="inline-flex items-center justify-center gap-2 whitespace-nowrap text-sm font-medium transition-[color,box-shadow] disabled:pointer-events-none disabled:opacity-50 [&amp;_svg]:pointer-events-none [&amp;_svg:not([class*='size-'])]:size-4 shrink-0 [&amp;_svg]:shrink-0 outline-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive border border-input bg-background shadow-xs hover:bg-accent hover:text-accent-foreground size-9 cursor-pointer rounded-full h-8 w-8"
                >
                  <Moon className="stroke-primary" />

                  <span className="sr-only">Toggle theme</span>
                </Button>
                <button className="md:hidden border border-border size-8 rounded-md cursor-pointer flex items-center justify-center">
                  <AlignJustify className="size-5" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </header>
    </>
  );
}
