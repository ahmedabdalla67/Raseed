import { Transaction } from "../Entities/TransactionEntities/Transaction";

export interface ITransactionRepository {
  save(transaction: Transaction): Promise<void>;
  get(): Promise<Transaction[]>;
  getMonth(year: number, month: number): Promise<Transaction[]>;
  delete(id: string): Promise<void>;
}
