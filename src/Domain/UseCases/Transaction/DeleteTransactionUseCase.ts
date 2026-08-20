import { ITransactionRepository } from "../../Repos/ITransactionRepository";

export class DeleteTransactionUseCase {
    constructor(private transactionRepo: ITransactionRepository) { }

    async delete(id: string) {
        return await this.transactionRepo.delete(id);
    }
}