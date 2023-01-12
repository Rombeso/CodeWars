import reverse from '../src/index.js';
import fill from '../src/fill.js';

describe('Reverse', () => {
    test('reverse', () => {
        expect(reverse('hello')).toEqual('olleh');
        expect(reverse('')).toEqual('');
    });
})


describe('Fill', () => {
    let array;
    beforeEach(() => {
        array = [1, 2, 3, 4];
    });

    test('test 1', () => {
        expect(fill(array, '*', 1, 3)).toEqual([1, '*', '*', 4]);
    });

    test('test 2', () => {
        expect(fill(array, '*')).toEqual(['*', '*', '*', '*']);
    });

    test('test 3', () => {
        expect(fill(array, '*', 4)).toEqual([1, 2, 3, 4]);
    });

    test('test 4', () => {
        expect(fill(array, '*', 0, 10)).toEqual(['*', '*', '*', '*']);
    });
})
// Jest поддерживает ECMAScript модули в экспериментальном режиме
// Чтобы активировать поддержку модулей в тестах,
// нужно запускать тесты с переменной окружения NODE_OPTIONS
// NODE_OPTIONS=--experimental-vm-modules npx jest