import { Subjects } from '../subjects';

export interface BillingCreatedEvent {
  subject: Subjects.BillingCreated;
  data: {
    id: string;
    userId: string;
    email: string;
    fullName: string;
    cardNumber: string;
    cardExpiryMonth: string;
    cardExpiryYear: string;
    cardToken: string;
  };
}
