import { Category } from "@/src/Domain/Entities/CategoryEntities/Category";
import { ICategoryRepo } from "@/src/Domain/Repos/ICategoryRepo";
import { AsyncStorageDataSource } from "../DataSource/AsyncStorageDataSource";
import { StorageKeys } from "../DataSource/Constants/StorageKeys";

export class CategoryRepositoryImpl implements ICategoryRepo {
    constructor (private dataSource: AsyncStorageDataSource){}
    async getAll(): Promise<Category[]> {
        const storedCategories = await this.dataSource.getItem(StorageKeys.categories);
        const categories: Category[] = storedCategories ? JSON.parse(storedCategories) : [];
        return categories;
    }
    async save(category: Category): Promise<void> {
        const storedCategories = await this.dataSource.getItem(StorageKeys.categories);
        const categories: Category[] = storedCategories ? JSON.parse(storedCategories) : [];
        categories.push(category);
        return await this.dataSource.storeItem(StorageKeys.categories, JSON.stringify(categories));
    }
    async update(id: string, category: Category): Promise<void> {
        const storedCategories = await this.dataSource.getItem(StorageKeys.categories);
        const categories: Category[] = storedCategories ? JSON.parse(storedCategories) : [];
        categories.filter((c) => {
            if (c.id === id) {
                categories.push(category);
            }
        });
        return await this.dataSource.storeItem(StorageKeys.categories, JSON.stringify(categories));
    }
    async delete(id: string): Promise<void> {
        const storedCategories = await this.dataSource.getItem(StorageKeys.categories);
        const categories: Category[] = storedCategories ? JSON.parse(storedCategories) : [];
        const filtered = categories.filter(c => c.id !== id); 
        return await this.dataSource.storeItem(StorageKeys.categories, JSON.stringify(filtered));
    }

}