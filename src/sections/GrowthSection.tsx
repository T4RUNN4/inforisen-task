
import GrowthCard from "@/components/GrowthCard";
import GrowthHeader from "@/components/GrowthHeader";
import { TimelineCardData } from "@/types/growth";

const timelineData: TimelineCardData[] = [
  {
    id: 1,
    timeframe: "Weeks 1-2",
    steps: [
      {
        number: "01",
        title: "What You Do",
        content: "Use SMM services to build initial followers and engagement",
      },
      {
        number: "02",
        title: "Why It Works",
        content: "Creates baseline credibility and improves first impression",
      },
      {
        number: "03",
        title: "Estimated Cost/ Time",
        content: "৳2,000–5,000",
      },
    ],
  },
  {
    id: 2,
    timeframe: "Weeks 3-4",
    steps: [
      {
        number: "01",
        title: "What You Do",
        content: "Start posting consistent, high-quality content",
      },
      {
        number: "02",
        title: "Why It Works",
        content: "Larger follower base increases organic engagement",
      },
      {
        number: "03",
        title: "Estimated Cost/ Time",
        content: "Mostly content effort",
      },
    ],
  },
  {
    id: 3,
    timeframe: "Months 2-3",
    steps: [
      {
        number: "01",
        title: "What You Do",
        content: "Continue content + light support if needed",
      },
      {
        number: "02",
        title: "Why It Works",
        content: "Faster reach, better algorithm response",
      },
      {
        number: "03",
        title: "Estimated Cost/ Time",
        content: "Reduced SMM usage",
      },
    ],
  },
  {
    id: 4,
    timeframe: "Months 3-6",
    steps: [
      {
        number: "01",
        title: "What You Do",
        content: "Focus mainly on organic growth",
      },
      {
        number: "02",
        title: "Why It Works",
        content: "Strong engagement pushes content naturally",
      },
      {
        number: "03",
        title: "Estimated Cost/ Time",
        content: "Minimal or no SMM needed",
      },
    ],
  },
];

export default function GrowthSection() {
  return (
    <section className="relative py-20 px-6 bg-linear-to-b from-white via-[#FFF9F6] to-white">
      <div className="max-w-7xl mx-auto space-y-12">
        <GrowthHeader />

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {timelineData.map((card) => (
            <GrowthCard key={card.id} data={card} />
          ))}
        </div>
      </div>
    </section>
  );
}