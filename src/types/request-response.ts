export interface PositiveResponseBody<T = any> {
  message: string;
  statusCode: number;
  data: T;
}
