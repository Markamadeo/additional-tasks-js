/*
 * Задача 8: «Фибоначчи»
 *
 * Последовательность Фибоначчи — это порядок чисел, где каждое последующее
 * число является суммой двух предыдущих: 0, 1, 1, 2, 3, 5, 8, 13, 21, 34.
 *
 * Напишите функцию, которая принимает на вход число n и возвращает n-й элемент
 * последовательности Фибоначчи.
*/

function fibonacci(n) {
  let zeroValue = 0;
  let firstValue = 1;
  let result = zeroValue + firstValue;

  switch (true) {
    case n === 0:
      return zeroValue;

    case n === 1:
      return firstValue;

    case (n >= 2):
      for (let i = 2; i <= n - 1; i += 1) {
        result = zeroValue + firstValue;
        zeroValue = firstValue;
        firstValue = result;
      }
      return result;

    default:
      return NaN;
  }
};

/* !!! Очень ресурсозатротное решение, очень глубокая рекурсия при больших значениях n.   !!!

function fibonacci(n) {
  return n <= 1 ? n : fibonacci(n - 1) + fibonacci(n - 2);
};

*/

// Протестируйте решение, вызывая функцию с разными аргументами:

console.log(fibonacci(0)); // 0
console.log(fibonacci(2)); // 1
console.log(fibonacci(21)); // 6765
console.log(fibonacci('XD')); // NaN
console.log(fibonacci(4)); // 2. Четвёртое число последовательности — двойка (0, 1, 1, 2)
