import NextImage from "next/image";
import Link from "next/link";

export default function CtaBanner() {
  return (
    <section className="py-12 px-6 bg-white">
      <div className="max-w-6xl mx-auto">
        <div className="relative rounded-3xl bg-linear-to-r from-[#FFF4ED] via-[#FFEFE5] to-[#FFF4ED] border border-orange-100/60 p-8 md:p-12 overflow-hidden shadow-sm grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          
          <div className="absolute inset-0 z-0 opacity-25 pointer-events-none">
            <NextImage
              src="/cta-map-bg.png"
              alt="World map overlay"
              fill
              className="object-cover object-center"
            />
          </div>

          <div className="lg:col-span-7 relative z-10 space-y-6">
            <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 leading-tight">
              Ready to Grow Your Social <br className="hidden sm:inline" />
              Media <span className="text-orange-500">in Bangladesh?</span>
            </h2>

            <p className="text-gray-600 text-xs md:text-sm leading-relaxed max-w-lg">
              Join over 68,000 users who are already using SMM to grow faster on
              Facebook, Instagram, YouTube, TikTok, and more. Getting started is
              free and takes less than 60 seconds.
            </p>

            <div className="flex flex-wrap gap-4 pt-2">
              <Link
                href="/services"
                className="btn bg-white hover:bg-orange-50 text-orange-500 border border-orange-200 rounded-xl px-6 h-11 text-xs md:text-sm font-semibold shadow-xs"
              >
                See All Services
              </Link>
              <Link
                href="/register"
                className="btn bg-linear-to-r from-orange-500 to-orange-700 text-white border-none hover:opacity-90 rounded-xl px-6 h-11 text-xs md:text-sm font-semibold shadow-md"
              >
                Create Free Account
              </Link>
            </div>
          </div>

          <div className="lg:col-span-5 relative z-10 flex justify-center lg:justify-end">
            <div className="relative w-full max-w-[320px] aspect-4/5">
              <NextImage
                src="/cta-person.png"
                alt="Growth specialist"
                fill
                className="object-contain object-bottom"
                priority
              />
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}