import NextImage from "next/image";
import Link from "next/link";

const socialIcons = [
  { name: "Facebook", icon: "/fb.png", href: "#" },
  { name: "Instagram", icon: "/insta.png", href: "#" },
  { name: "YouTube", icon: "/yt.png", href: "#" },
  { name: "X", icon: "/x.png", href: "#" },
  { name: "LinkedIn", icon: "/linkedin.png", href: "#" },
];

export default function FooterSocialLinks() {
  return (
    <div className="flex items-center gap-2 pt-2">
      {socialIcons.map((item) => (
        <Link
          key={item.name}
          href={item.href}
          className="w-9 h-9 rounded-lg bg-orange-700/60 hover:bg-orange-600/80 border border-orange-400/20 flex items-center justify-center transition-colors"
          aria-label={item.name}
        >
          <div className="w-4 h-4 relative">
            <NextImage
              src={item.icon}
              alt={item.name}
              fill
              className="object-contain"
            />
          </div>
        </Link>
      ))}
    </div>
  );
}
