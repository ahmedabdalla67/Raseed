import { Category } from "./Category";

export type BudgetHealthStatus = "safe" | "warning" | "over";
export interface BudgetStatus {
  category: Category;
  limitAmount: number;
  spentAmount: number; // calculated from transactions
  remainingAmount: number; // limitAmount - spentAmount
  percentage: number; // spentAmount / limitAmount * 100
  status: BudgetHealthStatus;
}
