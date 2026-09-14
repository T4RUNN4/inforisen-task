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
    label: "Satisfied Clients",
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
    <section className="py-12 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8 justify-items-center">
        {kpiData.map((item) => (
          <KpiCard key={item.id} data={item} />
        ))}
      </div>
    </section>
  );
}
