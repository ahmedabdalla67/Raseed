import { Category } from "../../Entities/CategoryEntities/Category";
import { ICategoryRepo } from "../../Repos/ICategoryRepo";

export class UpdateCategoryUseCase {
    constructor(private categoryRepo: ICategoryRepo) { }

    async update(id: string, category: Category) {
        return await this.categoryRepo.update(id, category);
    }
}