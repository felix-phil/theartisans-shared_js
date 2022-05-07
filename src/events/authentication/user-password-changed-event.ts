import { Subjects } from '../subjects';

export interface UserPassworChangedEvent {
  subject: Subjects.UserPasswordChanged;
  data: {
    userId: string;
    email: string;
  };
}
