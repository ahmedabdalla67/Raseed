import { CategoryBudgetLimit } from "../../Entities/CategoryEntities/CategoryBudgetLimit";
import { IBudgetRepo } from "../../Repos/IBudgetRepo";

export class CategoryBudgetLimitUseCase {
  constructor(private budgetRepo: IBudgetRepo) {}

  async getByMonth(year: number, month: number) {
    return await this.budgetRepo.getByMonth(year, month);
  }

  async save(budgetLimit: CategoryBudgetLimit) {
    return await this.budgetRepo.save(budgetLimit);
  }

  async update(id: string, budgetLimit: CategoryBudgetLimit) {
    return await this.budgetRepo.update(id, budgetLimit);
  }

  async delete(id: string) {
    return await this.budgetRepo.delete(id);
  }
}