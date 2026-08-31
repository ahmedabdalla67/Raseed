import { Transaction } from "@/src/Domain/Entities/TransactionEntities/Transaction";
import { ITransactionRepository } from "@/src/Domain/Repos/ITransactionRepository";
import { AsyncStorageDataSource } from "../DataSource/AsyncStorageDataSource";
import { StorageKeys } from "../DataSource/Constants/StorageKeys";

export class TransactionRepositoryImpl implements ITransactionRepository {
    constructor(private dataSource: AsyncStorageDataSource) { }
    // load → modify → save back
    async save(transaction: Transaction): Promise<void> {
        const storedTransaction = await this.dataSource.getItem(StorageKeys.transactions);
        const transactions: Transaction[] = storedTransaction ? JSON.parse(storedTransaction) : [];
        transactions.push(transaction);
        await this.dataSource.storeItem(StorageKeys.transactions, JSON.stringify(transactions));
    }

    //load → parse → return
    async get(): Promise<Transaction[]> {
        const storedTransactions = await this.dataSource.getItem(StorageKeys.transactions);
        const transactions: Transaction[] = storedTransactions ? JSON.parse(storedTransactions) : [];
        return transactions;
    }
    async getMonth(year: number, month: number): Promise<Transaction[]> {
        const storedTransactions = await this.dataSource.getItem(StorageKeys.transactions);
        const transctions: Transaction[] = storedTransactions ? JSON.parse(storedTransactions) : [];
        return transctions.filter((transaction) => {
            const extractedYearAndMonth = transaction.date.split("-", 2);
            return extractedYearAndMonth[0] === String(year) && extractedYearAndMonth[1] === String(month).padStart(2, "0");
        });
    }
    // load → filter out deleted item → save back
    async delete(id: string): Promise<void> {
        const storedTransactions = await this.dataSource.getItem(StorageKeys.transactions);
        const transactions: Transaction[] = storedTransactions ? JSON.parse(storedTransactions) : [];
        // find() returns one matching item — it does not remove anything
        // filter() returns a new array excluding the matched item
        const filtered = transactions.filter(transaction => transaction.id !== id);
        // ✗ Earlier mistake: you tried to use dataSource.removeItem(StorageKeys.transactions)
        //   That would delete the entire RASEED_TRANSACTIONS key — all transactions gone
        //   removeItem is only for wiping an entire key, not one item inside it
        //
        await this.dataSource.storeItem(StorageKeys.transactions, JSON.stringify(filtered));
    }

}