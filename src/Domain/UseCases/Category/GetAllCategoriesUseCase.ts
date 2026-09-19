import { ICategoryRepo } from "../../Repos/ICategoryRepo";

export class GetAllCategoriesUseCase {
  constructor(private categoryRepo: ICategoryRepo) {}

  async getAll() {
    return await this.categoryRepo.getAll();
  }
}
