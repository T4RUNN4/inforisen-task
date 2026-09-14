export interface FooterLink {
  label: string;
  href: string;
}

export const quickLinks: FooterLink[] = [
  { label: "Home", href: "/" },
  { label: "About Us", href: "/about" },
  { label: "Services", href: "/services" },
  { label: "Blog", href: "/blog" },
  { label: "Contact Us", href: "/contact" },
  { label: "Terms of Service", href: "/terms" },
  { label: "Privacy Policy", href: "/privacy" },
  { label: "Refund Policy", href: "/refund" },
];

export const serviceLinks: FooterLink[] = [
  { label: "Facebook SMM Panel", href: "/services/facebook" },
  { label: "Instagram SMM Panel", href: "/services/instagram" },
  { label: "YouTube SMM Panel", href: "/services/youtube" },
  { label: "TikTok SMM Panel", href: "/services/tiktok" },
  { label: "Telegram SMM Panel", href: "/services/telegram" },
  { label: "X-Twitter SMM Panel", href: "/services/twitter" },
];
