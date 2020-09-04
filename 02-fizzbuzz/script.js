/*
 * Задача 2: «FizzBuzz»
 *
 * Напишите функцию fizzBuzz(n), принимающую как аргумент натуральное число.
 * Функция должна выводить в консоль числа от 1 до n, заменяя числа:
 *
 * • кратные трём — на fizz;
 * • кратные пяти — на buzz;
 * • кратные и трём, и пяти одновременно — на fizzbuzz.
 *
*/

function fizzBuzz(num) {
  for (let i = 1; i <= num; i += 1) {
    switch (true) {
      case i % 3 === 0 && i % 5 === 0:
        console.log('fizzbuzz');
        break;

      case i % 3 === 0:
        console.log('fizz');
        break;

      case i % 5 === 0:
        console.log('buzz');
        break;

      default:
        console.log(i);
        break;
    }
  }
}

// Протестируйте решение, вызывая функцию с разными аргументами:

console.log(fizzBuzz(15));
