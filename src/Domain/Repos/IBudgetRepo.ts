import { CategoryBudgetLimit } from "../Entities/CategoryEntities/CategoryBudgetLimit";

export interface IBudgetRepo {
  getByMonth(year: number, month: number): Promise<CategoryBudgetLimit[]>;
  save(budgetLimit: CategoryBudgetLimit): Promise<void>;
  update(id: string, budgetLimit: CategoryBudgetLimit): Promise<void>;
  delete(categoryId: string): Promise<void>;
}
