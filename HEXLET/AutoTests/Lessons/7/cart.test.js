// @ts-check

import getImpelementation from '../implementations/index.js';

const makeCart = getImpelementation();

// BEGIN (write your solution here)

let cart;

describe('Cart', () => {
    beforeAll(() => {
        cart = makeCart()
    });

    test('should be have two order in cart', () => {
        cart.addItem({ name: 'car', price: 3 }, 5);
        cart.addItem({ name: 'house', price: 10 }, 2);
        expect(cart.getItems()).toHaveLength(2);
        expect(cart.getCost()).toEqual(35);
        expect(cart.getCount()).toEqual(7);
    });

    test('should be have three order in cart', () => {
        cart.addItem({ name: 'house', price: 10 }, 1);
        expect(cart.getItems()).toHaveLength(3);
        expect(cart.getCost()).toEqual(45);
    });
});

// END

//Решение учителя

import getImpelementation from '../implementations/index.js';

const makeCart = getImpelementation();

// BEGIN
// test('Cart', () => {
//     const cart = makeCart();
//     expect(cart.getItems()).toHaveLength(0);
//
//     const car = { name: 'car', price: 3 };
//     cart.addItem(car, 5);
//     expect(cart.getItems()).toEqual(expect.arrayContaining([{ good: car, count: 5 }]));
//     expect(cart.getCost()).toBe(15);
//     expect(cart.getCount()).toBe(5);
//
//     const house = { name: 'house', price: 10 };
//     cart.addItem(house, 2);
//     expect(cart.getItems()).toEqual(
//         expect.arrayContaining([{ good: car, count: 5 }, { good: house, count: 2 }],
//         ));
//     expect(cart.getCost()).toBe(35);
//     expect(cart.getCount()).toBe(7);
// });
// END