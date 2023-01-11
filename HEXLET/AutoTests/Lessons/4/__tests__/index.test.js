import reverse from '../src/index.js';

test('reverse', () => {
    expect(reverse('hello')).toEqual('lleh');
    expect(reverse('')).toEqual('');
});

// Jest поддерживает ECMAScript модули в экспериментальном режиме
// Чтобы активировать поддержку модулей в тестах,
// нужно запускать тесты с переменной окружения NODE_OPTIONS
// NODE_OPTIONS=--experimental-vm-modules npx jest