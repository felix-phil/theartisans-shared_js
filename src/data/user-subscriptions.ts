import { SubscriptionValueType } from '../types/user-subscriptions';

export const Subscriptions: { [key: string]: SubscriptionValueType } = {
  basic: { name: 'basic', benefits: ['Get 10 customes', '', ''], price: 0 },
  pro: { name: 'pro', benefits: ['Get 50 customers', '', ''], price: 50 },
  premium: {
    name: 'premium',
    benefits: ['Get 100 custormers', '', ''],
    price: 100,
  },
};
