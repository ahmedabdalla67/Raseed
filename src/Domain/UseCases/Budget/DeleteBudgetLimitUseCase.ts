import { IBudgetRepo } from "../../Repos/IBudgetRepo";

export class DeleteBudgetLimitUseCase {
  constructor(private budgetRepo: IBudgetRepo) {}

  async delete(id: string) {
    return await this.budgetRepo.delete(id);
  }
}