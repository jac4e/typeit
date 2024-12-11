import { keys } from 'ts-transformer-keys';
import { IAccount, isIAccount, keysIAccount } from './account.js';
import { IProduct, isIProduct, keysIProduct } from './product.js';
import { isITransaction, ITransaction, keysITransaction } from './transaction.js';
import { isIRefill, keysIRefill } from './refill.js';

export * from './account.js';
export * from './cart.js';
export * from './log.js';
export * from './product.js';
export * from './transaction.js';
export * from './refill.js';
export * from './stats.js';
export * from './task.js';


export type UnionKeys<Type> = Type extends Type ? keyof Type: never
export type UnionValues<Type> = Type extends Type ? Type[keyof Type]: never

// Useful functions to ensure order of keys/values for interfaces match their interface definition

// Returns an array of the objects keys
export function getKeys<Type>(obj: Type) {
    if (isIAccount(obj)) {
        return keysIAccount as (UnionKeys<Type>)[];
    } else if (isITransaction(obj)) {
        return keysITransaction as (UnionKeys<Type>)[];
    } else if (isIProduct(obj)) {
        return keysIProduct as (UnionKeys<Type>)[];
    } else if (isIRefill(obj)) {
        return keysIRefill as (UnionKeys<Type>)[];
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
        ] as (UnionValues<Type>)[];
    } else if (isITransaction(obj)) {
        return [
            obj.date,
            obj.id,
            obj.accountid,
            obj.type,
            obj.reason,
            obj.products,
            obj.total
        ] as (UnionValues<Type>)[];
    } else if (isIProduct(obj)) {
        return [
            obj.id,
            obj.name,
            obj.description,
            obj.image,
            obj.price,
            obj.stock
        ] as (UnionValues<Type>)[];
    } else if (isIRefill(obj)) {
        return [
            obj.id,
            obj.account,
            obj.method,
            obj.reference,
            obj.amount,
            obj.dateCreated,
            obj.dateUpdated,
            obj.status,
            obj.note
        ] as (UnionValues<Type>)[];
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
// Had to update using method found here https://github.com/GoogleChromeLabs/jsbi/issues/30#issuecomment-1721402063
// as previous method (BigInt.prototype.toJSON = function() { return this.toString(); }) was not working anymore
Object.defineProperty(BigInt.prototype, "toJSON", {
    get() {
        "use strict";
        return () => String(this);
    }
});