import { SubscriptionType } from '../../types/subscription';
import { Subjects } from '../subjects';

export interface SubscriptionUpdatedEvent {
  subject: Subjects.SubscriptionUpdated;
  data: {
    userId: string;
    email: string;
    subscriptionType: SubscriptionType;
    expiryDate: string;
  };
}
