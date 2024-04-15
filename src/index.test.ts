import { keys } from 'ts-transformer-keys';
import { getKeys, getValues, getObject, IProduct, ProductTypes, ProductCategories, IAccount, Roles } from './index';


const correctIProduct: IProduct<ProductTypes.Stock> = {
    id: "1234567890",
    category: ProductCategories.Food,
    name: "name",
    description: "description",
    image: "image",
    price: 100n,
    type: ProductTypes.Stock,
    stock: 100n
};

const expectedIProductKeys = [
    'id',
    'category',
    'name',
    'description',
    'image',
    'price',
    'type',
    'stock'
];

const expectedIProductValues = [
    "1234567890",
    ProductCategories.Food,
    "name",
    "description",
    "image",
    100n,
    ProductTypes.Stock,
    100n
];

const expectedIProductObjects = [
    { key: 'id', value: "1234567890" },
    { key: 'category', value: ProductCategories.Food },
    { key: 'name', value: "name" },
    { key: 'description', value: "description" },
    { key: 'image', value: "image" },
    { key: 'price', value: 100n },
    { key: 'type', value: ProductTypes.Stock },
    { key: 'stock', value: 100n }
];

const correctIAccount: IAccount = {
    id: "1234567890",
    gid: "1234567890",
    username: "username",
    firstName: "first",
    lastName: "last",
    email: "email",
    role: Roles.Admin,
    balance: 100n,
    notify: true
};

const expectedIAccountKeys = [
    'id',
    'gid',
    'username',
    'firstName',
    'lastName',
    'email',
    'role',
    'balance',
    'notify'
];

const expectedIAccountValues = [
    "1234567890",
    "1234567890",
    "username",
    "first",
    "last",
    "email",
    Roles.Admin,
    100n,
    true
];

const expectedIAccountObjects = [
    { key: 'id', value: "1234567890" },
    { key: 'gid', value: "1234567890" },
    { key: 'username', value: "username" },
    { key: 'firstName', value: "first" },
    { key: 'lastName', value: "last" },
    { key: 'email', value: "email" },
    { key: 'role', value: Roles.Admin },
    { key: 'balance', value: 100n },
    { key: 'notify', value: true }
];

describe('getObject', () => {
    it('IProduct', () => {
        expect(getObject(correctIProduct)).toEqual(expectedIProductObjects);
    });
    it('IAccount', () => {
        expect(getObject(correctIAccount)).toEqual(expectedIAccountObjects);
    });
});

describe('getKeys', () => {
    it('IProduct', () => {
        expect(getKeys(correctIProduct)).toEqual(expectedIProductKeys);
    });
    it('IAccount', () => {
        expect(getKeys(correctIAccount)).toEqual(expectedIAccountKeys);
    });
});

describe('getValues', () => {
    it('IProduct', () => {
        expect(getValues(correctIProduct)).toEqual(expectedIProductValues);
    });
    it('IAccount', () => {
        expect(getValues(correctIAccount)).toEqual(expectedIAccountValues);
    });
});
