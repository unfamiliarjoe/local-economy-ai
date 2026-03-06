import { MarketingHero } from "../components/marketing-hero";
import { SiteHeader } from "../components/layout/site-header";
import { SiteFooter } from "../components/layout/site-footer";
import { MarketingSections } from "../components/marketing/sections";

export default function HomePage() {
  return (
    <main>
      <SiteHeader />
      <MarketingHero />
      <MarketingSections />
      <SiteFooter />
    </main>
  );
}
