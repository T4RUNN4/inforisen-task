import Hero from "@/sections/Hero";
import KpiContainer from "@/sections/KPI";
import Services from "@/sections/Service";
import WorkingProcessSection from "@/sections/WorkingProcessSection";

export default function Home() {
  return (
    <>
      <Hero />
      <KpiContainer />
      <Services />
      <WorkingProcessSection />
    </>
  );
}
