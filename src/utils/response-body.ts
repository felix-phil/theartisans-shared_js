import { PositiveResponseBody } from "../types/request-response";
export const createResponse = (
  data: any,
  statusCode: number,
  message = "Success"
): PositiveResponseBody => {
  return {
    data: data,
    statusCode: statusCode,
    message,
  };
};
