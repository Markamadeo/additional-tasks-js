/*
 * Задача 1: «Палиндром»
 *
 * Палиндром — это слово, предложение или последовательность символов,
 * которая читается слева направо так же, как и справа налево. Например,
 * «топот» и «Анна» — палиндромы, а «привет» и «Витя» — нет.
 *
 * Напишите функцию palindrome(str), принимающую как аргумент строку.
 * Функция должна вернуть true, если строка — палиндром, и false, если нет.
 *
 * Считайте, что на вход всегда передаётся слово: то есть знаков препинания
 * и пробелов в аргументе быть не может.
 *
*/

function validString(str) {
  let tempStr = str;
  if (typeof(str) === 'number') {
    tempStr = String(str);
  }
  let resultStr = tempStr.replace(/[^0-9A-Za-zА-яа-я_]/g, '');
  return resultStr.toLowerCase();
};


function palindrome(str) {
  const resultStr = validString(str);
  const medianStr = Math.floor(resultStr.length / 2);
  for(let i = 0; i <= medianStr; i += 1) {
    if(resultStr[medianStr - i] != resultStr[medianStr + i]) {
        return false;
    }
  }
  return true;
};

// Протестируйте решение, вызывая функцию с разными аргументами:

console.log(palindrome('топот')); // должно быть true
console.log(palindrome('Saippuakivikauppias')); // true
console.log(palindrome('привет')); // false
console.log(palindrome('О, лета тело!')); // true
console.log(palindrome('О, лета тел!')); // false
console.log(palindrome(12321)); // true
console.log(palindrome("01010")); // true
console.log(palindrome("0122310")); // false


/*
 * Бонус. Задача для любознательных. Пусть функция принимает на вход любую строку,
 * но пробелы и знаки препинания не учитывает. Например:
 *
 * palindrome('О, лета тело!'); // true
 *
*/
