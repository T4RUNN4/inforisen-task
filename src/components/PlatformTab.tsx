import NextImage from "next/image";

interface PlatformTabProps {
  name: string;
  iconSrc: string;
  isActive: boolean;
  onClick: () => void;
}

export default function PlatformTab({
  name,
  iconSrc,
  isActive,
  onClick,
}: PlatformTabProps) {
  return (
    <button
      onClick={onClick}
      className={`flex items-center space-x-2.5 px-5 py-3 rounded-xl border text-sm font-semibold hover:scale-105 transition-all duration-200 cursor-pointer ${
        isActive
          ? "bg-linear-to-r from-orange-500 to-orange-700 text-white border-transparent shadow-md"
          : "bg-[#FFF8F5] hover:bg-orange-50 text-gray-700 border-orange-100/60"
      }`}
    >
      <div className="w-5 h-5 relative shrink-0">
        <NextImage
          src={iconSrc}
          alt={name}
          width={20}
          height={20}
          className="object-contain w-full h-full"
        />
      </div>
      <span>{name}</span>
    </button>
  );
}