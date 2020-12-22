import { TransactionStatus } from "src/app/enums/transaction-status.enum";
import { TransactionType } from "src/app/enums/transaction-type.enum";

export interface Transaction {
    status?: TransactionStatus;
    amount?: number;
    operationType?: TransactionType;
    date?: Date;
    fee?: number;
}