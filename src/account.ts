import { keys } from 'ts-transformer-keys';
import typia, { tags } from "typia";
import { Document } from 'mongoose';

export enum Roles {
    Unverified = 'unverified', // Unverified account created through registration form
    Member = 'member', // Verified club member account
    NonMember = 'nonmember', // Verified club member account
    Admin = 'admin' // Admin account
}

export interface IAccount {
    id: string;
    gid?: string;
    username: string;
    firstName: string;
    lastName: string;
    email: string;
    role: Roles;
    balance: bigint | string;
    notify: boolean;
}

export interface ICredentials {
    username: string;
    password: string;
}

export type IAccountDocument = Omit<IAccount, 'id' | 'balance'> & Document & {
    hash: string;
    sessionid: string;
};

export type IAccountForm = Omit<IAccount, 'id' | 'balance'>;

export const isIAccount = typia.createEquals<IAccount>();
export const isIAccountForm = typia.createEquals<IAccountForm>();
export const isICredentials = typia.createEquals<ICredentials>();

export const keysIAccount = keys<IAccount>();
