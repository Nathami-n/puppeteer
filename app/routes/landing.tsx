import { HomePageHeader } from "~/features/landing";

export default function LandingPage() {
  return (
    <main className="max-w-7xl mx-auto border-x relative">
      <div className="block w-px h-full border-1 border-border absolute top-0 left-6 z-10" />
      <div className="block w-px h-full border-r border-border absolute top-0 right-6 z-10"></div>
      <HomePageHeader />

      <div className="flex flex-col">
        {Array.from({ length: 10 }).map((_, index) => (
          <div key={index} className="w-full h-[400px] bg-red-400/20" />
        ))}
      </div>
    </main>
  );
}
