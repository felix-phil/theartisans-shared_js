import {
  TransactionStatusTypes,
  TransactionTypes,
} from "../../types/transaction";
import { Subjects } from "../subjects";

export interface TransactionCreatedEvent {
  subject: Subjects.TransactionCreated;
  data: {
    userId: string;
    email: string;
    gatewayId: string;
    amount: number;
    narration: string;
    status: TransactionStatusTypes;
    transactionType: TransactionTypes;
    dateCreated: string;
  };
}
