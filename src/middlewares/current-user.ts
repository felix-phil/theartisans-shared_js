import { Request, Response, NextFunction } from "express";
import jwt from "jsonwebtoken";
import { SubscriptionType } from "../types/subscription";
import { UserRoles } from "../types/user-roles";

interface UserPayload {
  id: string;
  email: string;
  roles: UserRoles[];
  firstName?: string;
  lastName?: string;
  active: boolean;
  banned: boolean;
  subscription: {
    id: string;
    subscriptionType: SubscriptionType;
    expiryDate: Date;
  } | null;
  billingId?: string;
  mobileNumber?: string;
  loginCount: number;
  lastLogin: Date;
  profileImageUrl?: string;
}

declare global {
  namespace Express {
    interface Request {
      currentUser?: UserPayload;
    }
  }
}

export const currentUser = (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  if (!req.session?.jwt) {
    return next();
  }
  try {
    const payload = jwt.verify(
      req.session.jwt,
      process.env.JWT_KEY!
    ) as UserPayload;
    req.currentUser = payload;
  } catch (err) {}
  next();
};
