import UserDropdown from "~/components/custom/user-dropdown";
import {
  Bento,
  Company,
  Faqs,
  FooterSection,
  Hero,
  HomePageHeader,
  PricingSection,
  Quote,
  Testimonials,
} from "~/features/landing";

export default function LandingPage() {
  return (

    <main className="max-w-7xl mx-auto border-x border-border relative">
      <UserDropdown />
      <div className="block w-px h-full  border-border border-l absolute top-0 left-2 z-10" />
      <div className="block w-px h-full  border-border border-r  absolute top-0 right-2 z-10"></div>
      <HomePageHeader />
      <section className="flex flex-col items-center justify-center divide-y divide-border min-h-screen w-full">
        <Hero />
        <Company />
        <Bento />
        <Quote />
        {/* <CombinedFeaturedSection /> */}
        <PricingSection />
        <Testimonials />

        <Faqs />
        <FooterSection />
      </section>
    </main>
  );
}
