import PrimaryButton from "@/components/PrimaryButton";
import SecondaryButton from "@/components/SecondaryButton";
import Image from "next/image";

export default function Hero() {
    return (
      <main className="max-w-7xl mx-auto px-8 md:px-28 py-12 md:py-20 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
        <div className="lg:col-span-6 space-y-6">
          <div className="flex items-center space-x-2 text-sm text-gray-700">
            <span className="text-emerald-500 text-lg">★</span>
            <div className="flex space-x-1">
              {[...Array(5)].map((_, i) => (
                <div
                  key={i}
                  className="w-4 h-4 bg-orange-500 text-white flex items-center justify-center text-[10px] rounded-xs"
                >
                  ★
                </div>
              ))}
            </div>
            <span className="font-semibold text-gray-800 ml-1">
              Excellent{" "}
              <span className="font-normal text-gray-600">4.8 out of 5</span>
            </span>
          </div>

          <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900 leading-tight">
            <span className="text-orange-500 block">Best SMM Panel</span>
            in Bangladesh –{" "}
            <span className="text-orange-500">Fast ,Safe & Growth</span> in
            Social Media.
          </h1>

          <p className="text-gray-600 text-sm md:text-base leading-relaxed max-w-xl">
            SMM is Bangladesh's most reliable & cheap SMM panel for real social
            media growth. We built this platform for Bangladeshi businesses,
            creators, and agencies. You get fast delivery, safe methods, and
            followers that actually stay. No fake bots. No account risks. Just
            real results. Most panels chase big numbers. We focus on keeping
            those numbers. You get retention guarantees, delivery control, and
            long-term credibility.
          </p>

          <div className="flex flex-wrap gap-4 pt-2">
            <SecondaryButton label="View Services" />
            <PrimaryButton label="Create an Account" />
          </div>
        </div>

        <div className="lg:col-span-6 relative flex justify-center items-center mt-8 lg:mt-0">
          <div className="w-[320px] h-80 sm:w-105 sm:h-105 bg-linear-to-tr from-orange-400 to-orange-600 rounded-full absolute z-0 translate-y-4 shadow-xl"></div>

          <div className="relative z-10 w-full max-w-125">
            <Image
              src="/hero.png"
              alt="SMM Panel Growth Illustration"
              width={600}
              height={600}
              className="w-full h-auto object-contain drop-shadow-xl"
            />
          </div>
        </div>
      </main>
    );
}