import { Transaction } from "../../Entities/TransactionEntities/Transaction";
import { ITransactionRepository } from "../../Repos/ITransactionRepository";

export class SaveTransactionUseCase {
    constructor(private transactionRepo: ITransactionRepository) { }

    async save(transaction: Transaction) {
        return await this.transactionRepo.save(transaction);
    }
}