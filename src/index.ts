import { keys } from 'ts-transformer-keys';
import { IAccount, isIAccount, keysIAccount } from './account.js';
import { IProduct, isIProduct, keysIProduct } from './product.js';
import { isITransaction, ITransaction, keysITransaction } from './transaction.js';

export * from './account.js';
export * from './cart.js';
export * from './log.js';
export * from './product.js';
export * from './transaction.js';


// Returns an array of the objects keys
export function getKeys(obj: IAccount | ITransaction | IProduct) {
    if (isIAccount(obj)) {
        return keysIAccount;
    } else if (isITransaction(obj)) {
        return keysITransaction;
    } else if (isIProduct(obj)) {
        return keysIProduct;
    } else {
        return [];
    }
}

// returns an array of the objects values
export function getValues(obj: IAccount | ITransaction | IProduct) {
    if (isIAccount(obj)) {
        return [
            obj.id,
            obj.gid,
            obj.username,
            obj.firstName,
            obj.lastName,
            obj.email,
            obj.role,
            obj.balance
        ];
    } else if (isITransaction(obj)) {
        return [
            obj.date,
            obj.id,
            obj.accountid,
            obj.type,
            obj.reason,
            JSON.stringify(obj.products),
            obj.total
        ];
    } else if (isIProduct(obj)) {
        return [
            obj.id,
            obj.name,
            obj.description,
            obj.image,
            obj.price,
            obj.stock
        ];
    } else {
        return [];
    }
}

// Hijack bigint for json serialization because the spec writers hate me
(BigInt.prototype as any).toJSON = function () {
    return this.toString();
};