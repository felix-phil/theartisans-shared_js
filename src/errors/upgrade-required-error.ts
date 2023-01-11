import { CustomError } from './custom-error';

export class UpgradeRequiredError extends CustomError {
  statusCode: number = 426;
  constructor() {
    super('upgrade required');

    Object.setPrototypeOf(this, UpgradeRequiredError.prototype);
  }
  serializeErrors() {
    return [
      {
        message: 'upgrade required',
      },
    ];
  }
}
