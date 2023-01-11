// @ts-check
import getFunction from '../functions.js';

const get = getFunction();

// BEGIN (write your solution here)
if (get({ hello: 'world' }, 'hello') !== 'world') {
    throw new Error('Функция работает неверно!');
}
if (get({ hello: 'world' }, 'some', 'default') !== 'default') {
    throw new Error('Функция работает неверно!');
}
if (get({ hello: 'world' }, 'hello', 'default') !== 'world') {
    throw new Error('Функция работает неверно!');
}

console.log('Функция работает верно :^)');
// END