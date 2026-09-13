interface SecondaryButtonProps {
  label: string;
}

export default function SecondaryButton({
  label
}: SecondaryButtonProps) {
  return (
    <button
      className="btn bg-white text-[#FF6B00] border-2 border-[#FF6B00] font-semibold py-2 px-4 rounded-lg hover:scale-105 hover:cursor-pointer transition-transform duration-300"
    >
      {label}
    </button>
  );
}
