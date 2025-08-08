import { HomePageHeader, Hero} from "~/features/landing";

export default function LandingPage() {
  return (
    <main className="max-w-7xl mx-auto border-x relative">
      <div className="block w-px h-full border-1 border-border absolute top-0 left-6 z-10" />
      <div className="block w-px h-full border-r border-border absolute top-0 right-6 z-10"></div>
      <HomePageHeader />

      <section className="flex flex-col items-center justify-center divide-y divide-border min-h-screen w-full">
        <Hero />
      </section>
    </main>
  );
}
