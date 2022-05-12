export interface SubscriptionValueType {
  name: string;
  price: number; // price in US Dollars
  benefits: string[];
}

export enum SubscriptionType {
  BASIC = 'BASIC',
  PRO = 'PRO',
  PREMIUM = 'PREMIUM',
}
