import { Subjects } from '../subjects';

export interface UserResetPasswordEvent {
  subject: Subjects.UserResetPassword;
  data: {
    userId: string;
    email: string;
    otp: string;
    resetToken: string;
    expiresIn: number; // In minutes
  };
}
