export interface GrowthStep {
  number: string;
  title: string;
  content: string;
}

export interface TimelineCardData {
  id: string | number;
  timeframe: string;
  steps: GrowthStep[];
}