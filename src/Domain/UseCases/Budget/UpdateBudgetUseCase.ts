import { CategoryBudgetLimit } from "../../Entities/CategoryEntities/CategoryBudgetLimit";
import { IBudgetRepo } from "../../Repos/IBudgetRepo";

export class UpdateBudgetUseCase {
    constructor(private budgetRepo: IBudgetRepo) { }

    async update(id: string, budgetLimit: CategoryBudgetLimit) {
        return await this.budgetRepo.update(id, budgetLimit);
    }
}