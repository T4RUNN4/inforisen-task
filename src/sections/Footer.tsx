import { quickLinks, serviceLinks } from "@/app/config/footer";
import FooterContactInfo from "@/components/FooterContactInfo";
import FooterSocialLinks from "@/components/FooterSocialLink";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="relative bg-linear-to-r from-orange-800 via-orange-600 to-orange-800 text-white overflow-hidden pt-12 pb-6 px-6">
      <div className="absolute inset-0 opacity-10 pointer-events-none bg-[radial-gradient(#ffffff_1px,transparent_1px)] bg-size-[16px_16px]" />

      <div className="max-w-7xl mx-auto relative z-10 space-y-10">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-12 gap-8 items-start">
          <div className="lg:col-span-4 space-y-4">
            <div className="bg-white rounded-xl px-6 py-2.5 w-fit shadow-xs">
              <span className="font-extrabold text-orange-500 text-base tracking-wider">
                LOGO
              </span>
            </div>

            <p className="text-xs leading-relaxed text-orange-100/90 max-w-sm">
              SMM is Bangladesh's most trusted SMM panel. We offer fast,
              affordable social media growth services for every platform, with
              full support for local payments like bKash and Nagad.
            </p>

            <FooterSocialLinks />
          </div>

          <div className="lg:col-span-2 space-y-4">
            <h3 className="text-white font-bold text-base">Quick Links</h3>
            <ul className="space-y-2 text-xs text-orange-100/90">
              {quickLinks.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="hover:text-white transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="lg:col-span-3 space-y-4">
            <h3 className="text-white font-bold text-base">Services Pages</h3>
            <ul className="space-y-2 text-xs text-orange-100/90">
              {serviceLinks.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="hover:text-white transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="lg:col-span-3">
            <FooterContactInfo />
          </div>
        </div>

        <div className="pt-4">
          <div className="bg-orange-950/60 backdrop-blur-xs rounded-xl py-3.5 px-4 text-center border border-orange-900/40">
            <p className="text-[11px] md:text-xs text-orange-200/90 tracking-wide font-medium">
              © 2026 SMM Limited. All Rights Reserved. | Operated under the
              Bangladesh ICT framework.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
