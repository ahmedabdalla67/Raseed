import { AsyncStorageDataSource } from "../Data/DataSource/AsyncStorageDataSource";
import { BudgetRepositoryImpl } from "../Data/RepositoryImpl/BudgetRepositoryImpl";
import { CategoryRepositoryImpl } from "../Data/RepositoryImpl/CategoryRepositoryImpl";
import { TransactionRepositoryImpl } from "../Data/RepositoryImpl/TransactionRepositoryImpl";
import { BudgetStatusUseCase } from "../Domain/UseCases/Budget/BudgetStatusUseCase";
import { CarryOverLastBudgetUseCase } from "../Domain/UseCases/Budget/CarryOverLastBudgetUseCase";
import { DeleteBudgetLimitUseCase } from "../Domain/UseCases/Budget/DeleteBudgetLimitUseCase";
import { GetBudgetByMonthUseCase } from "../Domain/UseCases/Budget/GetBudgetByMonthUseCase";
import { SaveBudgetUseCase } from "../Domain/UseCases/Budget/SaveBudgetUseCase";
import { UpdateBudgetUseCase } from "../Domain/UseCases/Budget/UpdateBudgetUseCase";
import { DeleteCategoryUseCase } from "../Domain/UseCases/Category/DeleteCategoryUseCase";
import { GetAllCategoriesUseCase } from "../Domain/UseCases/Category/GetAllCategoriesUseCase";
import { SaveCategoryUseCase } from "../Domain/UseCases/Category/SaveCategoryUseCase";
import { UpdateCategoryUseCase } from "../Domain/UseCases/Category/UpdateCategoryUseCase";
import { DeleteTransactionUseCase } from "../Domain/UseCases/Transaction/DeleteTransactionUseCase";
import { GetByMonthTransactionUseCase } from "../Domain/UseCases/Transaction/GetByMonthTransactionUseCase";
import { GetTransactionUseCase } from "../Domain/UseCases/Transaction/GetTransactionUseCase";
import { SaveTransactionUseCase } from "../Domain/UseCases/Transaction/SaveTransactionUseCase";

const dataSource = new AsyncStorageDataSource();

const transactionRepo = new TransactionRepositoryImpl(dataSource);
const categoryRepo = new CategoryRepositoryImpl(dataSource);
const budgetRepo = new BudgetRepositoryImpl(dataSource);

export const saveTransactionUseCase = new SaveTransactionUseCase(
  transactionRepo,
);
export const getTransactionUseCase = new GetTransactionUseCase(transactionRepo);
export const getByMonthTransactionUseCase = new GetByMonthTransactionUseCase(
  transactionRepo,
);
export const deleteTransactionUseCase = new DeleteTransactionUseCase(
  transactionRepo,
);

export const saveCategoryUseCase = new SaveCategoryUseCase(categoryRepo);
export const getAllCategoriesUseCase = new GetAllCategoriesUseCase(
  categoryRepo,
);
export const updateCategoryUseCase = new UpdateCategoryUseCase(categoryRepo);
export const deleteCategoryUseCase = new DeleteCategoryUseCase(
  categoryRepo,
  budgetRepo,
);

export const saveBudgetUseCase = new SaveBudgetUseCase(budgetRepo);
export const getBudgetByMonthUseCase = new GetBudgetByMonthUseCase(budgetRepo);
export const updateBudgetUseCase = new UpdateBudgetUseCase(budgetRepo);
export const deleteBudgetLimitUseCase = new DeleteBudgetLimitUseCase(
  budgetRepo,
);
export const carryOverLastBudgetUseCase = new CarryOverLastBudgetUseCase(
  budgetRepo,
);
export const budgetStatusUseCase = new BudgetStatusUseCase(
  budgetRepo,
  categoryRepo,
  transactionRepo,
);
