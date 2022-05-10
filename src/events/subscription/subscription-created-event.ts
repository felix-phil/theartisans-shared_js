import { SubscriptionType } from '../../types/subscription';
import { Subjects } from '../subjects';

export interface SubscriptionCreatedEvent {
  subject: Subjects.SubscriptionCreated;
  data: {
    id: string;
    userId: string;
    email: string;
    subscriptionType: SubscriptionType;
    expiryDate: string;
  };
}
