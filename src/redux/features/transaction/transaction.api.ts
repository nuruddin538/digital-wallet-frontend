import { baseApi } from "@/redux/baseApi";
import type {
  ICashIn,
  ICashOut,
  IDeposit,
  IResponse,
  ITransaction,
  IWithdraw,
} from "@/types";

const transactionApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    getTransactions: builder.query<
      IResponse<ITransaction[]>,
      { page?: number; limit?: number; type?: string }
    >({
      query: (params) => ({
        url: "/transactions",
        method: "GET",
        params,
      }),
      // providesTags: ['Transactions']
    }),
    deposit: builder.mutation<IResponse<ITransaction>, IDeposit>({
      query: (data) => ({
        url: "/transactions/deposit",
        method: "POST",
        data,
      }),
      //   invalidatesTags: ["Transactions", "User"],
    }),
    withdraw: builder.mutation<IResponse<ITransaction>, IWithdraw>({
      query: (data) => ({
        url: "/transactions/withdraw",
        method: "POST",
        data,
      }),
      //   invalidatesTags: ["Transactions", "User"],
    }),
    transfer: builder.mutation<IResponse<ITransaction>, ITransaction>({
      query: (data) => ({
        url: "/transactions/transfer",
        method: "POST",
        data,
      }),
      //   invalidatesTags: ["Transactions", "User"],
    }),
    cashIn: builder.mutation<IResponse<ITransaction>, ICashIn>({
      query: (data) => ({
        url: "/transactions/cash-in",
        method: "POST",
        data,
      }),
      //   invalidatesTags: ["Transactions", "User"],
    }),
    cashOut: builder.mutation<IResponse<ITransaction>, ICashOut>({
      query: (data) => ({
        url: "/transactions/cash-out",
        method: "POST",
        data,
      }),
      //   invalidatesTags: ["Transactions", "User"],
    }),
  }),
  //   tagTypes: ["Transactions"],
});

export const {
  useGetTransactionsQuery,
  useDepositMutation,
  useWithdrawMutation,
  useTransferMutation,
  useCashInMutation,
  useCashOutMutation,
} = transactionApi;
