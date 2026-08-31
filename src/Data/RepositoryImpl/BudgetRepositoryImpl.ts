import { CategoryBudgetLimit } from "@/src/Domain/Entities/CategoryEntities/CategoryBudgetLimit";
import { IBudgetRepo } from "@/src/Domain/Repos/IBudgetRepo";
import { AsyncStorageDataSource } from "../DataSource/AsyncStorageDataSource";
import { StorageKeys } from "../DataSource/Constants/StorageKeys";

export class BudgetRepositoryImpl implements IBudgetRepo {
    constructor(private dataSource: AsyncStorageDataSource) { }
    
    async getByMonth(year: number, month: number): Promise<CategoryBudgetLimit[]> {
        const storedBudgets = await this.dataSource.getItem(StorageKeys.budgets);
        const budgets: CategoryBudgetLimit[] = storedBudgets ? JSON.parse(storedBudgets) : [];
        return budgets.filter((budget) => {
            const extractedYearAndMonth = budget.month.split("-", 2);
            return extractedYearAndMonth[0] === String(year) && extractedYearAndMonth[1] === String(month).padStart(2, "0");
        })
    }
    async save(budgetLimit: CategoryBudgetLimit): Promise<void> {
        const storedBudgets = await this.dataSource.getItem(StorageKeys.budgets);
        const budgets: CategoryBudgetLimit[] = storedBudgets ? JSON.parse(storedBudgets) : [];
        budgets.push(budgetLimit);
        return await this.dataSource.storeItem(StorageKeys.budgets, JSON.stringify(budgets));
    }
    async update(id: string, budgetLimit: CategoryBudgetLimit): Promise<void> {
        const storedBudgets = await this.dataSource.getItem(StorageKeys.budgets);
        const budgets: CategoryBudgetLimit[] = storedBudgets ? JSON.parse(storedBudgets) : [];
        const index = budgets.findIndex(budget => budget.id === id);
        if (index === -1) return;
        budgets[index] == budgetLimit;
        return await this.dataSource.storeItem(StorageKeys.budgets, JSON.stringify(budgets));
    }
    async delete(categoryId: string): Promise<void> {
        const storedBudgets = await this.dataSource.getItem(StorageKeys.budgets);
        const budgets: CategoryBudgetLimit[] = storedBudgets ? JSON.parse(storedBudgets) : [];
        const filtered = budgets.filter(budget => budget.categoryId !== categoryId);
        await this.dataSource.storeItem(StorageKeys.budgets, JSON.stringify(filtered));
    }
}