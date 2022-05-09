import { SubscriptionType } from '../../types/subscription';
import { Subjects } from '../subjects';

export interface SubscriptionPaymentCreatedEvent {
  subject: Subjects.SubscriptionPaymentCreated;
  data: {
    userId: string;
    email: string;
    subscriptionType: SubscriptionType;
    amount: number;
    date: string;
  };
}
