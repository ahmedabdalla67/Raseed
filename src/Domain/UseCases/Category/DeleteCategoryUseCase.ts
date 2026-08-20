import { IBudgetRepo } from "../../Repos/IBudgetRepo";
import { ICategoryRepo } from "../../Repos/ICategoryRepo";

export class DeleteCategoryUseCase {
  constructor(private categoryRepo: ICategoryRepo, private budgetRepo: IBudgetRepo) { }

  async delete(id: string) {
    await this.budgetRepo.delete(id);
    return await this.categoryRepo.delete(id);
  }
}
