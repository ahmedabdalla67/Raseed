import { ITransactionRepository } from "../../Repos/ITransactionRepository";

export class GetTransactionUseCase {
    constructor(private transactionRepo: ITransactionRepository) { }

    async getAll() {
        return await this.transactionRepo.get();
    }
}