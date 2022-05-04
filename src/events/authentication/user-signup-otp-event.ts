import { Subjects } from '../subjects';

export interface UserSignupOTPEvent {
  subject: Subjects.UserSignupOTP;
  data: {
    userId: string;
    email: string;
    otp: string;
    expiresIn: number; // In Minutes
  };
}
