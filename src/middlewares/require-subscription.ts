import { NextFunction, Request, Response } from 'express';
import { NotAuthorizedError } from '../errors/not-authorized-error';
import { SubscriptionType } from '../types/subscription';

export const requireSubscription = (subscriptionType?: SubscriptionType[]) => {
  return (req: Request, res: Response, next: NextFunction) => {
    if (!req.currentUser) {
      throw new NotAuthorizedError();
    }
    if (!req.currentUser.subscription) {
      throw new NotAuthorizedError();
    }
    if (
      subscriptionType &&
      !subscriptionType.includes(req.currentUser.subscription.subscriptionType)
    ) {
      throw new NotAuthorizedError();
    }
    next();
  };
};
