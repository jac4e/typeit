export enum Roles {
    Unverified = 'unverified',
    User = 'user',
    Admin = 'admin'
}

// IAccountLean on server
export interface IAccount {
    username: string;
    firstName: string;
    lastName: string;
    email: string;
    role: Roles;
    balance: bigint;
    gid?: string;
    id: string;
}

export interface IAccountForm {
    username?: IAccount['username'];
    firstName?: IAccount['firstName'];
    lastName?: IAccount['lastName'];
    email?: IAccount['email'];
    role?: IAccount['role'];
    password?: string;
    gid?: IAccount['gid'];
}

export interface IAccountLogin {
    username: IAccount['username'];
    password: string;
}