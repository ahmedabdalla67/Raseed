import { CategoryBudgetLimit } from "../Entities/CategoryEntities/CategoryBudgetLimit";

export interface IBudgetRepo {
  getByMonth(year: number, month: number): Promise<CategoryBudgetLimit[]>;
}
