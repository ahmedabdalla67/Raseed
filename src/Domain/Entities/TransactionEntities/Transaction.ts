export type TransactionType = "expense" | "income";

export interface Transaction {
  id: string;
  amount: number;
  type: TransactionType;
  categoryId: string;
  date: string;
  note: string;
  createdAt: string;
}
