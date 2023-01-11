import { Subjects } from '../subjects';

export interface BillingDeletedEvent {
  subject: Subjects.BillingDeleted;
  data: {
    id: string;
    userId: string;
    email: string;
  };
}
