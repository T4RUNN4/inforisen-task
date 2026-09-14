import GrowthSection from "@/sections/GrowthSection";
import Hero from "@/sections/Hero";
import KpiContainer from "@/sections/KPI";
import PaymentMethods from "@/sections/PaymentMethods";
import Services from "@/sections/Service";
import WorkingProcessSection from "@/sections/WorkingProcessSection";

export default function Home() {
  return (
    <>
      <Hero />
      <KpiContainer />
      <Services />
      <WorkingProcessSection />
      <PaymentMethods />
      <GrowthSection />
    </>
  );
}
