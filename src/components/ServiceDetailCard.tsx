import NextImage from "next/image";
import Link from "next/link";
import { PlatformService } from "@/types/services";
import PrimaryButton from "./PrimaryButton";

interface ServiceDetailCardProps {
  service: PlatformService;
}

export default function ServiceDetailCard({ service }: ServiceDetailCardProps) {
  return (
    <div className="relative border border-orange-200/80 rounded-3xl p-6 md:p-8 bg-white/60 backdrop-blur-sm grid grid-cols-1 lg:grid-cols-12 gap-8 items-center shadow-sm">
      <div className="lg:col-span-5 relative rounded-2xl overflow-hidden aspect-4/3 w-full bg-orange-50 flex items-center justify-center">
        <NextImage
          src={service.heroImage}
          alt={service.title}
          fill
          className="object-cover"
          sizes="(max-width: 1024px) 100vw, 40vw"
          priority
        />
      </div>

      <div className="lg:col-span-7 space-y-5">
        <h3 className="text-2xl md:text-3xl font-extrabold text-orange-500">
          {service.title}
        </h3>

        <p className="text-gray-600 text-xs md:text-sm leading-relaxed">
          {service.description}
        </p>

        <div className="space-y-3.5 pt-1">
          {service.features.map((feature) => (
            <div key={feature.id} className="flex items-start space-x-3 text-xs md:text-sm">
              <span className="shrink-0 w-6 h-6 rounded-md bg-linear-to-r from-orange-500 to-orange-600 text-white font-bold text-xs flex items-center justify-center mt-0.5">
                {feature.number}
              </span>
              <p className="text-gray-700 leading-snug">
                <span className="font-bold text-orange-500 mr-1">
                  {feature.title}-
                </span>
                <span className="text-gray-600">{feature.description}</span>
              </p>
            </div>
          ))}
        </div>

        <div className="pt-3">
          <PrimaryButton label={service.ctaText} />
        </div>
      </div>
    </div>
  );
}