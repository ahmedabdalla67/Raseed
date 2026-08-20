import { IBudgetRepo } from "../../Repos/IBudgetRepo";

export class GetBudgetByMonthUseCase {
    constructor(private budgetRepo: IBudgetRepo) { }

    async getByMonth(year: number, month: number) {
        return await this.budgetRepo.getByMonth(year, month);
    }
}