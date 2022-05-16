import { Subjects } from '../subjects';

export interface BillingCreatedEvent {
  subject: Subjects.BillingCreated;
  data: {
    id: string;
    userId: string;
    email: string;
    firstName: string;
    lastName: string;
    cardNumber: string;
    cardExpiryMonth: string;
    cardExpiryYear: string;
    cardCvv: string;
    cardToken: string;
    version: number;
  };
}
