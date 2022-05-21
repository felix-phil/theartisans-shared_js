import { Request, Response, NextFunction } from 'express';

import { NotAuthorizedError } from '../errors/not-authorized-error';

export const requireBilling = (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  if (!req.currentUser?.billingId) {
    throw new NotAuthorizedError();
  }
  next();
};
