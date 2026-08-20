import { Category } from "../../Entities/CategoryEntities/Category";
import { ICategoryRepo } from "../../Repos/ICategoryRepo";

export class SaveCategoryUseCase {
    constructor(private categoryRepo: ICategoryRepo) { }

    async save(category: Category) {
        return await this.categoryRepo.save(category);
    }
}