import { CustomError } from './custom-error';

export class PaymentRequiredError extends CustomError {
  statusCode: number = 402;
  constructor() {
    super('paymnent required');

    Object.setPrototypeOf(this, PaymentRequiredError.prototype);
  }
  serializeErrors() {
    return [
      {
        message: 'paymnent required',
      },
    ];
  }
}
