import { CategoryBudgetLimit } from "../../Entities/CategoryEntities/CategoryBudgetLimit";
import { IBudgetRepo } from "../../Repos/IBudgetRepo";

export class SaveBudgetUseCase {
    constructor(private budgetRepo: IBudgetRepo) { }

    async save(budgetLimit: CategoryBudgetLimit) {
        return await this.budgetRepo.save(budgetLimit);
    }
}