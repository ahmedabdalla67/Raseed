import { Category } from "../Entities/CategoryEntities/Category";

export interface ICategoryRepo {
  getAll(): Promise<Category[]>;
  save(category: Category): Promise<void>;
  update(id: string, category: Category): Promise<void>;
  delete(id: string): Promise<void>;
}
