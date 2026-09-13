"use client";

import { useState } from "react";
import { PlatformService } from "@/types/services";
import PlatformTab from "@/components/PlatformTab";
import ServiceDetailCard from "@/components/ServiceDetailCard";

const servicesData: PlatformService[] = [
  {
    id: "facebook",
    name: "Facebook",
    iconSrc: "/fb.png",
    title: "Facebook Marketing Services",
    description:
      "Boost your brand visibility, connect with your ideal audience, and drive more traffic, engagement, and sales through strategic Facebook marketing campaigns.",
    heroImage: "/growth.png",
    ctaText: "View Facebook Services",
    features: [
      {
        id: "fb-1",
        number: "01",
        title: "Facebook Post Likes",
        description: "Boost post engagement and credibility with real likes.",
      },
      {
        id: "fb-2",
        number: "02",
        title: "Facebook Likes",
        description: "Grow your page popularity with high-quality likes.",
      },
      {
        id: "fb-3",
        number: "03",
        title: "Facebook Comments",
        description: "Increase interaction with engaging comments.",
      },
      {
        id: "fb-4",
        number: "04",
        title: "Facebook Shares",
        description: "Expand your reach with powerful shares.",
      },
      {
        id: "fb-5",
        number: "05",
        title: "Facebook Video Views",
        description: "Get more visibility with high-retention video views.",
      },
      {
        id: "fb-6",
        number: "06",
        title: "Facebook Reactions",
        description: "Make your posts more engaging with diverse reactions..",
      },
    ],
  },
  {
    id: "instagram",
    name: "Instagram",
    iconSrc: "/insta.png",
    title: "Instagram Growth Services",
    description:
      "Elevate your visual presence, gain targeted followers, and boost overall post engagement instantly.",
    heroImage: "/growth.png",
    ctaText: "View Instagram Services",
    features: [
      {
        id: "ig-1",
        number: "01",
        title: "Instagram Followers",
        description: "Gain organic and active Instagram followers.",
      },
      {
        id: "ig-2",
        number: "02",
        title: "Instagram Likes",
        description: "Boost your posts instantly to hit the Explore page.",
      },
    ],
  },
  {
    id: "twitter",
    name: "X (Twitter)",
    iconSrc: "/icons/x.png",
    title: "X (Twitter) Marketing",
    description: "",
    heroImage: "/services/growth.png",
    ctaText: "View X Services",
    features: [],
  },
  {
    id: "youtube",
    name: "YouTube",
    iconSrc: "/yt.png",
    title: "YouTube Growth",
    description: "",
    heroImage: "/growth.png",
    ctaText: "View YouTube Services",
    features: [],
  },
  {
    id: "tiktok",
    name: "TikTok",
    iconSrc: "/tiktok.png",
    title: "TikTok Services",
    description: "",
    heroImage: "/growth.png",
    ctaText: "View TikTok Services",
    features: [],
  },
  {
    id: "linkedin",
    name: "LinkedIn",
    iconSrc: "/linkedin.png",
    title: "LinkedIn B2B Services",
    description: "",
    heroImage: "/growth.png",
    ctaText: "View LinkedIn Services",
    features: [],
  },
  {
    id: "telegram",
    name: "Telegram",
    iconSrc: "/tele.png",
    title: "Telegram Channel Growth",
    description: "",
    heroImage: "/growth.png",
    ctaText: "View Telegram Services",
    features: [],
  },
  {
    id: "discord",
    name: "Discord",
    iconSrc: "/dc.png",
    title: "Discord Server Members",
    description: "",
    heroImage: "/growth.png",
    ctaText: "View Discord Services",
    features: [],
  },
  {
    id: "spotify",
    name: "Spotify",
    iconSrc: "/spotify.png",
    title: "Spotify Streams & Plays",
    description: "",
    heroImage: "/growth.png",
    ctaText: "View Spotify Services",
    features: [],
  },
  {
    id: "soundcloud",
    name: "SoundCloud",
    iconSrc: "/soundcloud.png",
    title: "SoundCloud Growth",
    description: "",
    heroImage: "/growth.png",
    ctaText: "View SoundCloud Services",
    features: [],
  },
  {
    id: "snapchat",
    name: "Snapchat",
    iconSrc: "/snapchat.png",
    title: "Snapchat Views",
    description: "",
    heroImage: "/growth.png",
    ctaText: "View Snapchat Services",
    features: [],
  },
  {
    id: "website",
    name: "Website Traffic",
    iconSrc: "/globe.png",
    title: "Website Traffic Solutions",
    description: "",
    heroImage: "/growth.png",
    ctaText: "View Traffic Services",
    features: [],
  },
];

export default function Services() {
  const [activeTab, setActiveTab] = useState<string>("facebook");

  const currentService =
    servicesData.find((s) => s.id === activeTab) || servicesData[0];

  return (
    <section className="relative py-16 px-6 bg-linear-to-b from-white via-[#FFF9F6] to-white">
      <div className="max-w-7xl mx-auto space-y-10">
        <div className="text-center space-y-3 max-w-3xl mx-auto">
          <div className="inline-flex items-center justify-center">
            <span className="text-xs font-semibold tracking-wider text-orange-500 uppercase border-b-2 border-orange-500 pb-0.5">
              our services
            </span>
          </div>
          <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 tracking-tight">
            Powerful <span className="text-orange-500">SMM Services</span> for
            Fast Growth
          </h2>
          <p className="text-gray-500 text-xs md:text-sm leading-relaxed">
            Explore our comprehensive range of social media marketing services
            designed to help you grow your presence across all major platforms.
            From Facebook to TikTok, we've got you covered.
          </p>
        </div>

        <div className="flex flex-wrap items-center justify-center gap-3 max-w-6xl mx-auto">
          {servicesData.map((platform) => (
            <PlatformTab
              key={platform.id}
              name={platform.name}
              iconSrc={platform.iconSrc}
              isActive={activeTab === platform.id}
              onClick={() => setActiveTab(platform.id)}
            />
          ))}
        </div>

        <div className="pt-2 max-w-6xl mx-auto">
          <ServiceDetailCard service={currentService} />
        </div>
      </div>
    </section>
  );
}