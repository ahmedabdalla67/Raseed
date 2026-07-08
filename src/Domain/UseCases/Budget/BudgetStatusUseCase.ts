import { BudgetStatus } from "../../Entities/CategoryEntities/BudgetStatus";
import { IBudgetRepo } from "../../Repos/IBudgetRepo";
import { ICategoryRepo } from "../../Repos/ICategoryRepo";
import { ITransactionRepository } from "../../Repos/ITransactionRepository";

export class BudgetStatusUseCase {
  constructor(
    private budgetRepo: IBudgetRepo,
    private categoryRepo: ICategoryRepo,
    private transactionRepo: ITransactionRepository,
  ) {}

  async execute(year: number, month: number): Promise<BudgetStatus[]> {
    // Get all categories
    const categories = await this.categoryRepo.getAll();

    // Get all budget limit for this month
    const budgets = await this.budgetRepo.getByMonth(year, month);

    //Get all transactions for this month
    const transactions = await this.transactionRepo.getMonth(year, month);

    return categories.map((category) => {
      const budget = budgets.find((b) => b.categoryId === category.id);
      const limitAmount = budget?.limitAmount ?? 0;
      const spentAmount = transactions
        .filter((t) => t.categoryId === category.id && t.type === "expense")
        .reduce((sum, t) => sum + t.amount, 0);
      const remainingAmount = limitAmount - spentAmount;
      const percentage =
        limitAmount > 0 ? (spentAmount / limitAmount) * 100 : 0;

      const status =
        percentage >= 100 ? "over" : percentage >= 75 ? "warning" : "over";

      return {
        category,
        budget,
        limitAmount,
        spentAmount,
        remainingAmount,
        percentage,
        status,
      };
    });
  }
}
