import { Link } from "react-router";

const navLinks = [
  { name: "Home", href: "#hero", active: true },
  { name: "How it Works", href: "#bento" },
  { name: "Features", href: "#features" },
  { name: "Pricing", href: "#pricing" },
];
export function HomePageHeader() {
  return (
    <header className="sticky z-50 flex justify-center transition-all duration-300 md:mx-0 top-4 mx-0">
      <div
        style={{
          width: "70rem",
        }}
      >
        <div className="mx-auto max-w-7xl rounded-2xl transition-all duration-300 xl:p-0 shadow-none px-7">
          <div className="flex h-[56px] items-center justify-between p-4">
            <a className="flex items-center gap-3">
              <svg
                width="42"
                height="24"
                viewBox="0 0 42 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="fill-[var(--primary)] size-7 md:size-10"
              >
                <g clip-path="url(#clip0_322_9172)">
                  <path
                    d="M22.3546 0.96832C22.9097 0.390834 23.6636 0.0664062 24.4487 0.0664062C27.9806 0.0664062 31.3091 0.066408 34.587 0.0664146C41.1797 0.0664284 44.481 8.35854 39.8193 13.2082L29.6649 23.7718C29.1987 24.2568 28.4016 23.9133 28.4016 23.2274V13.9234L29.5751 12.7025C30.5075 11.7326 29.8472 10.0742 28.5286 10.0742H13.6016L22.3546 0.96832Z"
                    fill="current"
                  ></path>
                  <path
                    d="M19.6469 23.0305C19.0919 23.608 18.338 23.9324 17.5529 23.9324C14.021 23.9324 10.6925 23.9324 7.41462 23.9324C0.821896 23.9324 -2.47942 15.6403 2.18232 10.7906L12.3367 0.227022C12.8029 -0.257945 13.6 0.0855283 13.6 0.771372L13.6 10.0754L12.4265 11.2963C11.4941 12.2662 12.1544 13.9246 13.473 13.9246L28.4001 13.9246L19.6469 23.0305Z"
                    fill="current"
                  ></path>
                </g>
                <defs>
                  <clipPath id="clip0_322_9172">
                    <rect width="42" height="24" fill="white"></rect>
                  </clipPath>
                </defs>
              </svg>
              <p className="text-lg font-semibold text-primary">SkyAgent</p>
            </a>
            <div className="w-full hidden md:block">
              <ul className="relative mx-auto flex w-fit rounded-full h-11 px-2 items-center justify-center">
                {navLinks.map((link) => (
                  <li className="z-10 cursor-pointer h-full flex items-center justify-center px-4 py-2 text-sm font-medium transition-colors duration-200 text-muted-foreground tracking-tight">
                    <Link to={link.href}>{link.name}</Link>
                  </li>
                ))}
                <li
                  className="absolute inset-0 my-1.5 rounded-full bg-accent/60 border border-border"
                  style={{ left: "8px", width: "68.8594px" }}
                ></li>
              </ul>
            </div>
            <div className="flex flex-row items-center gap-1 md:gap-3 shrink-0"></div>
          </div>
        </div>
      </div>
    </header>
  );
}
