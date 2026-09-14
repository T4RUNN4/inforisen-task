import { AdvantageItem } from "@/types/advantage";
import NextImage from "next/image";

interface AdvantageCardProps {
  data: AdvantageItem;
}

export default function AdvantageCard({ data }: AdvantageCardProps) {
  const { iconSrc, title, description, highlightText } = data;

  return (
    <div className="bg-white rounded-3xl p-8 border border-gray-100 shadow-[0_10px_30px_rgba(0,0,0,0.04)] hover:shadow-md transition-all duration-300 flex flex-col justify-between space-y-4">
      <div className="space-y-4">
        <div className="w-14 h-14 relative flex items-center justify-start">
          <NextImage
            src={iconSrc}
            alt={title}
            width={56}
            height={56}
            className="object-contain"
          />
        </div>

        <h3 className="text-lg font-bold text-gray-900 tracking-tight">
          {title}
        </h3>

        <p className="text-gray-500 text-xs md:text-sm leading-relaxed">
          {description}
        </p>
      </div>

      {highlightText && (
        <div className="pt-2">
          <span className="text-emerald-500 font-semibold text-xs md:text-sm inline-flex items-center gap-1">
            {highlightText}
          </span>
        </div>
      )}
    </div>
  );
}
