import NextImage from "next/image";

export interface KpiItem {
  id: string | number;
  iconSrc: string;
  value: string;
  label: string;
}

interface KpiCardProps {
  data: KpiItem;
}

export default function KpiCard({ data }: KpiCardProps) {
  const { iconSrc, value, label } = data;

  return (
    <div className="bg-white rounded-2xl p-6 md:p-8 flex flex-col items-center justify-center border border-gray-100/80 shadow-[0_10px_30px_rgba(0,0,0,0.04)] transition-transform duration-300 hover:-translate-y-1">
      <div className="w-16 h-16 md:w-20 md:h-20 relative mb-4 flex items-center justify-center">
        <NextImage
          src={iconSrc}
          alt={label}
          width={80}
          height={80}
          className="object-contain w-full h-full"
        />
      </div>

      <h3 className="text-2xl md:text-3xl font-extrabold text-gray-900 tracking-tight">
        {value}
      </h3>

      <p className="text-xs md:text-sm font-medium text-orange-500 mt-1">
        {label}
      </p>
    </div>
  );
}