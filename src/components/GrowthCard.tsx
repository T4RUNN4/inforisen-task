import { TimelineCardData } from "@/types/growth";

interface GrowthCardProps {
  data: TimelineCardData;
}

export default function GrowthCard({ data }: GrowthCardProps) {
  const { timeframe, steps } = data;

  return (
    <div className="bg-white rounded-3xl border border-orange-200/80 p-5 shadow-sm flex flex-col space-y-4 relative">
      <div className="w-full bg-linear-to-r from-orange-400 via-orange-500 to-orange-700 text-white font-bold text-center py-2.5 rounded-xl text-sm tracking-wide shadow-sm">
        {timeframe}
      </div>

      <div className="relative space-y-3 flex-1 flex flex-col justify-between">
        <div className="absolute left-9 top-6 bottom-6 w-px border-l border-dashed border-orange-300 z-0 pointer-events-none" />

        {steps.map((step) => (
          <div
            key={step.number}
            className="bg-[#F8F9FA] rounded-2xl p-4 relative z-10 space-y-2 border border-gray-100/80"
          >
            <div className="flex items-center space-x-2.5">
              <span className="w-6 h-6 rounded-full border border-orange-400 bg-white text-orange-500 font-bold text-[11px] flex items-center justify-center shrink-0 shadow-xs">
                {step.number}
              </span>
              <h4 className="font-bold text-orange-500 text-xs md:text-sm">
                {step.title}
              </h4>
            </div>

            <div className="pl-8">
              <p className="text-gray-600 text-xs leading-relaxed">
                {step.content}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
