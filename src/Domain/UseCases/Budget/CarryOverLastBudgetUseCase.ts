import { IBudgetRepo } from "../../Repos/IBudgetRepo";

export class CarryOverLastBudgetUseCase { 
    constructor(private budgetRepo: IBudgetRepo) { }

    async carryOverLastBudget() {
        const now: Date = new Date();

        // Gets the 4-digit year (e.g., 2026)
        const currentYear: number = now.getFullYear();

        // Gets the month index (0 for January, 7 for August, 11 for December)
        const currentMonthIndex: number = now.getMonth();
        
        const budgets = await this.budgetRepo.getByMonth(currentYear, currentMonthIndex + 1); // +1 because getMonth() returns 0-based index
        if (budgets.length > 0) return;

        const lastMonth = currentMonthIndex === 0 ? 11 : currentMonthIndex - 1; // If current month is January, last month is December
        const lastYear = currentMonthIndex === 0 ? currentYear - 1 : currentYear; // If current month is January, last year is previous year
        
        const lastMonthBudgets = await this.budgetRepo.getByMonth(lastYear, lastMonth);
        if (lastMonthBudgets.length === 0) return;

        lastMonthBudgets.forEach(budget => {
            // Create a new budget for the current month based on last month's budget
            // Use padStart to ensure the month is always two digits (e.g., "01" for January)
            budget.month = ((currentYear) + "-" + (currentMonthIndex + 1).toString().padStart(2, '0')).toString(); // Set to current month (1-based)
            
        });
    }
}