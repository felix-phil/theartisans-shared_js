import { Subjects } from '../subjects';

export interface UserSigninOTPEvent {
  subject: Subjects.UserSigninOTP;
  data: {
    userId: string;
    email: string;
    otp: string;
    expiresIn: number; // In Minutes
  };
}
