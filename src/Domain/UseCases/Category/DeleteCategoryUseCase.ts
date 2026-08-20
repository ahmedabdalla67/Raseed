import { Category } from "../../Entities/CategoryEntities/Category";
import { ICategoryRepo } from "../../Repos/ICategoryRepo";

export class CategoryUseCase {
  constructor(private categoryRepo: ICategoryRepo) { }
  
  async getAll() {
    return await this.categoryRepo.getAll();
  }

  async save(category: Category) {
    return await this.categoryRepo.save(category);
  }

  async update(id: string, category: Category) {
    return await this.categoryRepo.update(id, category);
  }

  async delete(id: string) {
    return await this.categoryRepo.delete(id);
  }
}
