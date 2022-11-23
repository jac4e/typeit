import { Document } from 'mongoose';
import { keys } from 'ts-transformer-keys';
import TSON from 'typescript-json';

export enum Roles {
    Unverified = 'unverified', // Unverified account created through registration form
    Member = 'member', // Verified club member account
    NonMember = 'nonmember', // Verified club member account
    Admin = 'admin' // Admin account
}

export interface IAccountDocument extends Document {
    username: IAccount['username'];
    firstName: IAccount['firstName'];
    lastName: IAccount['lastName'];
    email: IAccount['email'];
    role: IAccount['role'];
    balance: bigint;
    gid?: IAccount['gid'];
    hash: string;
    sessionid: string;
    notify: IAccount['notify'];
}

export interface IAccountForm {
    username?: IAccount['username'];
    firstName?: IAccount['firstName'];
    lastName?: IAccount['lastName'];
    email?: IAccount['email'];
    role?: IAccount['role'];
    password?: string;
    gid?: IAccount['gid'];
    notify?: IAccount['notify'];
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

export function isIAccount(account: any): account is IAccount {
    return TSON.equals<IAccount>(account);   
}

export function isIAccountForm(account: any): account is IAccountForm {
    return TSON.equals<IAccountForm>(account);   
}

export function isICredentials(credentials: any): credentials is ICredentials {
    return TSON.equals<ICredentials>(credentials);   
}

export const keysIAccount = keys<IAccount>();
