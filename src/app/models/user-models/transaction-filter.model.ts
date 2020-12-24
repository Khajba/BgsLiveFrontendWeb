import { TransactionStatus } from "src/app/enums/transaction-status.enum";
import { TransactionType } from "src/app/enums/transaction-type.enum";

export interface TransactionFilterModel {
    amountFrom?: number;
    amountTo?: number;
    transactionTypeId?: TransactionType;
    dateFrom?: Date;
    dateTo?: Date;
}