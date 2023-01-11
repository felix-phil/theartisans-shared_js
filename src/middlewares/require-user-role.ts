import { NextFunction, Request, Response } from 'express';
import { NotAuthorizedError } from '../errors/not-authorized-error';
import { UserRoles } from '../types/user-roles';

export const requireUserRole = (rolesAllowed: UserRoles[]) => {
  return (req: Request, res: Response, next: NextFunction) => {
    if (!req.currentUser) {
      throw new NotAuthorizedError();
    }
    const userCanAccess = rolesAllowed.filter((role) =>
      req.currentUser?.roles.includes(role)
    );
    if (userCanAccess.length === 0) {
      throw new NotAuthorizedError();
    }
    next();
  };
};
