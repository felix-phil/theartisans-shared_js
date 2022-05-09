import { SubscriptionValueType } from '../types/subscription';

export const Subscriptions: { [key: string]: SubscriptionValueType } = {
  BASIC: { name: 'basic', benefits: ['Get 10 customes', '', ''], price: 0 },
  PRO: { name: 'pro', benefits: ['Get 50 customers', '', ''], price: 50 },
  PREMIUM: {
    name: 'premium',
    benefits: ['Get 100 custormers', '', ''],
    price: 100,
  },
};
