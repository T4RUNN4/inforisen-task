import KpiCard, { KpiItem } from "@/components/KPICard";

const kpiData: KpiItem[] = [
  {
    id: 1,
    iconSrc: "/kpi-box.png",
    value: "321,879",
    label: "Order Processed",
  },
  {
    id: 2,
    iconSrc: "/kpi-cloud.png",
    value: "6,245",
    label: "Available Services",
  },
  {
    id: 3,
    iconSrc: "/kpi-users.png",
    value: "8,552",
    label: "Registered User",
  },
  {
    id: 4,
    iconSrc: "/kpi-trophy.png",
    value: "#1",
    label: "Regional Rank",
  },
];

export default function KpiContainer() {
  return (
    <section className="w-full bg-[#FAFAFA] py-12 px-56">
      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
        {kpiData.map((item) => (
          <KpiCard key={item.id} data={item} />
        ))}
      </div>
    </section>
  );
}