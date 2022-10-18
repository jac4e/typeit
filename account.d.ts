import { Document } from 'mongoose';

export enum Roles {
    Unverified = 'unverified',
    User = 'user',
    Admin = 'admin'
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
}

export interface IAccountForm {
    username: IAccount['username'];
    firstName: IAccount['firstName'];
    lastName: IAccount['lastName'];
    email: IAccount['email'];
    role: IAccount['role'];
    password: string;
    gid?: IAccount['gid'];
}

export interface IAccount {
    username: string;
    firstName: string;
    lastName: string;
    email: string;
    role: Roles;
    balance: bigint | string;
    gid?: string;
    id: string;
}

export interface ICredentials {
    username: string;
    password: string;
}