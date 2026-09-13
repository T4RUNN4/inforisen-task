export interface ServiceBullet {
  id: string;
  number: string;
  title: string;
  description: string;
}

export interface PlatformService {
  id: string;
  name: string;
  iconSrc: string;
  title: string;
  description: string;
  heroImage: string;
  ctaText: string;
  features: ServiceBullet[];
}