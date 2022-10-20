import { keys } from 'ts-transformer-keys';
import { IAccount, isIAccount, keysIAccount } from './account.js';
import { IProduct, isIProduct, keysIProduct } from './product.js';
import { isITransaction, ITransaction, keysITransaction } from './transaction.js';

export * from './account.js';
export * from './cart.js';
export * from './log.js';
export * from './product.js';
export * from './transaction.js';


// Useful functions to ensure order of keys/values for interfaces match their interface definition

// Returns an array of the objects keys
export function getKeys<Type>(obj: Type) {
    if (isIAccount(obj)) {
        return keysIAccount as (keyof Type)[];
    } else if (isITransaction(obj)) {
        return keysITransaction as (keyof Type)[];
    } else if (isIProduct(obj)) {
        return keysIProduct as (keyof Type)[];
    } else {
        return [];
    }
}

// returns an array of the objects values
export function getValues<Type>(obj: Type) {
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
        ] as (Type[keyof Type])[];
    } else if (isITransaction(obj)) {
        return [
            obj.date,
            obj.id,
            obj.accountid,
            obj.type,
            obj.reason,
            JSON.stringify(obj.products),
            obj.total
        ] as (Type[keyof Type])[];
    } else if (isIProduct(obj)) {
        return [
            obj.id,
            obj.name,
            obj.description,
            obj.image,
            obj.price,
            obj.stock
        ] as (Type[keyof Type])[];
    } else {
        return [];
    }
}

export function getObject<Type>(item: Type): {key: keyof Type; value: Type[keyof Type]}[] {
    const returnArray = [] as {key: keyof Type; value: Type[keyof Type]}[];
    const keys = getKeys(item);
    const values = getValues(item);

    for (let index = 0; index < keys.length; index++) {
        returnArray.push({key: keys[index], value: values[index]});
    }

    return returnArray;
}

// Hijack bigint for json serialization because the spec writers hate me
(BigInt.prototype as any).toJSON = function () {
    return this.toString();
};