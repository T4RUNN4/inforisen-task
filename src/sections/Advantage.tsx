import AdvantageCard from "@/components/AdvantageCard";
import AdvantagesHeader from "@/components/AdvantageHeader";
import { AdvantageItem } from "@/types/advantage";

const advantagesData: AdvantageItem[] = [
  {
    id: 1,
    iconSrc: "/lock.png",
    title: "We Never Ask for Your Password",
    description:
      "You give us your username or profile link. That's it. We can't access your account. When you buy followers from us, we're accessing your public profile. The same profile millions of people can already see.",
    highlightText: "Zero security risk.",
  },
  {
    id: 2,
    iconSrc: "/bot.png",
    title: "We Use Real Users, Not Bots",
    description:
      "This is the difference between safe and unsafe SMM services. Unsafe services use bots, fake accounts, and empty profiles. Instagram, Facebook, and YouTube algorithms detect these instantly. That's when bans happen. ➔",
  },
  {
    id: 3,
    iconSrc: "/grow.png",
    title: "We Deliver Gradually",
    description:
      "Imagine gaining 5,000 followers overnight. That looks suspicious. Algorithms notice. They flag your account. We spread delivery over time. 5,000 followers arrive over 2-4 days, not 2 hours. This makes growth look natural. Social media algorithms see steady growth, not sudden spikes.",
  },
  {
    id: 4,
    iconSrc: "/trophy.png",
    title: "Our Track Record",
    description:
      "321,879 completed orders. Not a single customer has reported an account ban caused by our services. That's not luck. We follow platform guidelines. We understand how Instagram, Facebook, YouTube, and TikTok detect fake activity. We stay within those boundaries.",
  },
];

export default function Advantages() {
  return (
    <section className="relative py-24 px-6 bg-[#FAF6F2] overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-40 bg-linear-to-br from-orange-200/40 via-orange-100/20 to-transparent pointer-events-none rounded-b-[100px]" />

      <div className="absolute bottom-0 right-0 w-full h-40 bg-linear-to-tl from-orange-200/40 via-orange-100/20 to-transparent pointer-events-none rounded-t-[100px]" />

      <div className="max-w-6xl mx-auto space-y-12 relative z-10">
        <AdvantagesHeader />

        <div className="relative grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-10">
          {advantagesData.map((item) => (
            <AdvantageCard key={item.id} data={item} />
          ))}
        </div>
      </div>
    </section>
  );
}
