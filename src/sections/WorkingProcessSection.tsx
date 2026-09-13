import Image from "next/image";
import NextImage from "next/image";

interface Step {
  number: string;
  title: string;
  description: string;
}

const stepsData: Step[] = [
  {
    number: "01",
    title: "Create Account",
    description:
      "Sign up quickly using your email or social login and get instant access to all TrendEvo services. Manage and track your orders easily from a single dashboard.",
  },
  {
    number: "02",
    title: "Add Funds",
    description:
      "Deposit funds securely via credit/debit card, bank transfer, or cryptocurrency. Your wallet is credited instantly so you can start placing orders immediately.",
  },
  {
    number: "03",
    title: "Select Service",
    description:
      "Select from Instagram, TikTok, YouTube, or Facebook services with clear pricing, delivery times, and reliability stats. Pick the package that fits your growth goals perfectly.",
  },
  {
    number: "04",
    title: "Place your order",
    description:
      "Enter your account details, select the desired quantity, and submit your order. Real-time validation ensures everything is accurate and ready to process quickly.",
  },
];

export default function WorkingProcessSection() {
  return (
    <section className="relative py-20 px-6 bg-linear-to-br from-[#FFF5F0] via-[#FFF8F5] to-[#FFEFE8] overflow-hidden">
      <div className="max-w-6xl mx-auto space-y-16">
        <div className="text-center space-y-3 max-w-2xl mx-auto">
          <div className="inline-flex items-center justify-center">
            <span className="text-xs font-bold tracking-wider text-orange-500 uppercase border-b-2 border-orange-500 pb-0.5">
              WORKING PROCESS
            </span>
          </div>
          <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 tracking-tight">
            Grow Your <span className="text-orange-500">Socials</span> in 4
            Simple Steps
          </h2>
          <p className="text-gray-500 text-xs md:text-sm leading-relaxed">
            A simple and efficient process designed to deliver fast and reliable
            results. Just place your order, and our system will handle the rest
            to help grow your social media presence smoothly.
          </p>
        </div>

        <div className="relative grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
          <div className="hidden md:flex absolute inset-0 items-center justify-center pointer-events-none z-10">
            <div className="w-24 h-24 rounded-full bg-orange-100/60 p-2 flex items-center justify-center backdrop-blur-sm">
              <Image src="/process.png" alt="Process" width={200} height={200} />
            </div>
          </div>

          {stepsData.map((step) => (
            <div
              key={step.number}
              className="relative bg-white/70 backdrop-blur-md rounded-3xl p-8 border border-white/80 shadow-sm hover:shadow-md transition-shadow duration-300 flex flex-col justify-between overflow-hidden"
            >
              <div className="absolute top-0 left-0 w-16 h-16 opacity-15 pointer-events-none bg-[radial-gradient(#f97316_1px,transparent_1px)] bg-size-[8px_8px]" />

              <div className="space-y-4 relative z-10">
                <span className="text-4xl font-extrabold text-orange-500 block">
                  {step.number}
                </span>
                <h3 className="text-lg font-bold text-orange-500">
                  {step.title}
                </h3>
                <p className="text-gray-600 text-xs md:text-sm leading-relaxed">
                  {step.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
