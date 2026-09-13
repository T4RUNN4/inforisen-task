interface PrimaryButtonProps {
  label: string;
}

export default function PrimaryButton({
  label
}: PrimaryButtonProps) {
  return (
    <button
      className="bg-linear-to-r from-[#FF9243] to-[#983200] text-white font-semibold py-2 px-4 rounded-lg hover:scale-105 transition-transform duration-300"
    >
      {label}
    </button>
  );
}
