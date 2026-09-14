import NextImage from "next/image";

export default function FooterContactInfo() {
  return (
    <div className="space-y-4">
      <h3 className="text-white font-bold text-base">Contact Info</h3>

      <div className="space-y-3 text-xs text-orange-100/90">
        <div className="flex items-center gap-3">
          <div className="w-8 h-8 rounded-lg bg-orange-700/60 border border-orange-400/20 flex items-center justify-center shrink-0">
            <NextImage
              src="/mail.png"
              alt="Email"
              width={16}
              height={16}
            />
          </div>
          <a
            href="mailto:info@smmsun.com"
            className="hover:text-white transition-colors"
          >
            info@smmsun.com
          </a>
        </div>

        <div className="flex items-center gap-3">
          <div className="w-8 h-8 rounded-lg bg-orange-700/60 border border-orange-400/20 flex items-center justify-center shrink-0">
            <NextImage
              src="/phone.png"
              alt="Phone"
              width={16}
              height={16}
            />
          </div>
          <a
            href="tel:+1833252278"
            className="hover:text-white transition-colors"
          >
            +1 833 252 278
          </a>
        </div>

        <div className="flex items-start gap-3">
          <div className="w-8 h-8 rounded-lg bg-orange-700/60 border border-orange-400/20 flex items-center justify-center shrink-0 mt-0.5">
            <NextImage
              src="/support.png"
              alt="Support"
              width={16}
              height={16}
            />
          </div>
          <div className="leading-tight">
            <p className="font-semibold text-white">
              Serving all of Bangladesh
            </p>
            <p className="text-[11px] text-orange-200/80">Support: 24/7</p>
          </div>
        </div>
      </div>
    </div>
  );
}
