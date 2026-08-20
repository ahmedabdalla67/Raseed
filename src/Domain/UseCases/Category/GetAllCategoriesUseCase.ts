import { ICategoryRepo } from "../../Repos/ICategoryRepo";

export class CategoryUseCase {
    constructor(private categoryRepo: ICategoryRepo) { }

    async getAll() {
        return await this.categoryRepo.getAll();
    }
}