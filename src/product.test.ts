import { IProduct, IProductForm, isIProduct, isIProductForm, ProductTypes, ProductCategories } from "./product";

describe("isIProduct", () => {
    for (const type of [ProductTypes.Stock, ProductTypes.Order]) {
        // isProduct
        it(`should return true for a valid IProduct object with type ${type} with correct typedProperties`, () => {
            const product = {
                id: '123',
                category: ProductCategories.Food,
                name: 'Apple',
                salePrice: 100n,
                purchasePrice: 50n,
                typedProperties: type === ProductTypes.Stock ? { type, stockJournalId: '123' } : { type, minimumOrderQuantity: 100n, preOrders: ['123'] }
            };
            expect(isIProduct(product)).toBe(true);
        });
        it(`should return false for an incorrect IProduct object with type ${type} with incorrect typedProperties`, () => {
            const product = {
                id: '123',
                category: ProductCategories.Food,
                name: 'Apple',
                salePrice: 100n,
                purchasePrice: 50n,
                typedProperties: type === ProductTypes.Order ? { type, stockJournalId: '123' } : { type, minimumOrderQuantity: 100n, preOrders: ['123'] }
            };
            expect(isIProduct(product)).toBe(false);
        });
        it(`should return false for an incorrect IProduct object with type ${type} with extra property`, () => {
            const product = {
                id: '123',
                category: ProductCategories.Food,
                name: 'Apple',
                salePrice: 100n,
                purchasePrice: 50n,
                typedProperties: type === ProductTypes.Stock ? { type, stockJournalId: '123'} : { type, minimumOrderQuantity: 100n },
                extra: 'property'
            };
            expect(isIProduct(product)).toBe(false);
        });
        it(`should return false for an incorrect IProduct object with type ${type} with missing required property`, () => {
            const product = {
                id: '123',
                category: ProductCategories.Food,
                name: 'Apple',
                salePrice: 100n,
                purchasePrice: 50n,
            };
            expect(isIProduct(product)).toBe(false);
        });
    }
});

describe("isIProductForm", () => {
    for (const type of [ProductTypes.Stock, ProductTypes.Order]) {
        it(`should return true for a valid IProductForm object with type ${type} with correct typedProperties`, () => {
            const productForm = {
                category: ProductCategories.Food,
                name: 'Apple',
                salePrice: 100n,
                purchasePrice: 50n,
                typedProperties: type === ProductTypes.Stock ? { type } : { type, minimumOrderQuantity: 100n }
            };
            expect(isIProductForm(productForm)).toBe(true);
        });
        it(`should return false for an incorrect IProductForm object with type ${type} with incorrect typedProperties`, () => {
            const productForm = {
                category: ProductCategories.Food,
                name: 'Apple',
                salePrice: 100n,
                purchasePrice: 50n,
                typedProperties: type === ProductTypes.Order ? { type } : { type, minimumOrderQuantity: 100n }
            };
            expect(isIProductForm(productForm)).toBe(false);
        });
        it(`should return false for an incorrect IProductForm object with type ${type} with extra property`, () => {
            const productForm = {
                category: ProductCategories.Food,
                name: 'Apple',
                salePrice: 100n,
                purchasePrice: 50n,
                typedProperties: type === ProductTypes.Stock ? { type } : { type, minimumOrderQuantity: 100n },
                extra: 'property'
            };
            expect(isIProductForm(productForm)).toBe(false);
        });
        it(`should return false for an incorrect IProductForm object with type ${type} with missing required property`, () => {
            const productForm = {
                category: ProductCategories.Food,
                name: 'Apple',
                salePrice: 100n,
                purchasePrice: 50n,
            };
            expect(isIProductForm(productForm)).toBe(false);
        });
    }
});