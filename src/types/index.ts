import type { ComponentType } from "react";

export type { ISendOtp, IVerifyOtp, ILogin, IRegister } from "./auth.type";

export interface IUser {
  id: string;
  name: string;
  email: string;
  phone: string;
  role: "user" | "agent" | "admin";
  balance: number;
  isActive: boolean;
  createdAt: string;
}

export interface ITransaction {
  id: string;
  type: "deposit" | "withdraw" | "cash_in" | "cash_out";
  amount: number;
  fromUserId?: string;
  toUserId?: string;
  fromUser?: IUser;
  toUser?: IUser;
  description: string;
  status: "pending" | "completed" | "failed";
  createdAt: string;
}
export interface IResponse<T> {
  statusCode: number;
  success: boolean;
  message: string;
  data: T;
}

export interface IDeposit {
  amount: number;
  agentId: string;
  description?: string;
}

export interface IWithdraw {
  amount: number;
  agentId: string;
  description?: string;
}

export interface ITransfer {
  amount: number;
  toUserEmail: string;
  description?: string;
}

export interface ICashIn {
  userId: string;
  amount: number;
  description?: string;
}

export interface ICashOut {
  userId: string;
  amount: number;
  description?: string;
}

export interface ISidebarItem {
  title: string;
  items: {
    title: string;
    url: string;
    component: ComponentType;
  }[];
}

export type TRole = "SUPER_ADMIN" | "ADMIN" | "USER";
