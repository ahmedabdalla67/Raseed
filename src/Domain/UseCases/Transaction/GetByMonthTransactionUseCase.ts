import { ITransactionRepository } from "../../Repos/ITransactionRepository";

export class GetByMonthTransactionUseCase {
    constructor(private transactionRepo: ITransactionRepository) { }

    async getByMonth(year: number, month: number) {
        return await this.transactionRepo.getMonth(year, month);
    }
}