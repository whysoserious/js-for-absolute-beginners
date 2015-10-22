var f = function(a, b) {
  console.log(a);
  console.log(b);
  return b;
}

f("twoja", "stara");

var g = function() {1};
var h = function() {return 1;};

g();
h();

// 10! = 1 * 2 * 3 * ... * 10
//  0! = 1
// -5! X

// 50

var aggr = 1;
var cnt = 1;
while (cnt <= 10) {
  //      cnt | aggr
  // 1.     1      1
  // 2.     2      1
  // 3.     3      2
  // 4.     4      6
  aggr = aggr * cnt;
  cnt = cnt + 1;
  //      cnt | aggr
  // 1.     2      1
  // 2.     3      2 (1 * 2)
  // 3.     4      6 (1 * 2 * 3)
  // 4.     5     24 (1 * 2 * 3 * 4)
  //10.    10     XX (1 * 2 * ... * 10)
}
console.log ("wynik: " + aggr);
///////////////////////////////////////////////

var aggr = 1;
var cnt = 1;
while (cnt <= 10) {
  aggr = aggr * cnt;
  cnt = cnt + 1;
}

var factorial = function(n) {
  //n % 1 -> 0 : n jet liczbą całkowitą
  if (n == 0) {
    return 1;
  } else {
    if(n < 0) {
      return undefined;
    } else {
      var aggr = 1;
      var cnt = 1;
      while (cnt <= n) {
        aggr = aggr * cnt;
        cnt = cnt + 1;
      }
      return aggr;
    }
  }
}
factorial(-5);
factorial(6.5);

// HOMEWORK

// JS Reference: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference

// 1. Napisać najzwięźlej i najczytelniej funkcję factorial.

// 2. BONUS QUEST Przepisać funkcję factorial:
// dla liczb naturalnych -> zwraca silnię
// dla 0 -> zwraca 1
// dla wszystkiego innego -> zwraca undefined
// testy:
// factorial(3) -> 6
// factorial(0) -> 1
// factorial(-4) -> undefined
// factorial(4.4) -> undefined
// [wpisać w google: how to check if number is integer in javascript]
// factorial("kurwa") -> undefined
// factorial(undefined) -> undefined

// funkcja-kwadratowa: http://www.math.edu.pl/funkcja-kwadratowa

// 3. Policzyć deltę dla funkcji kwadratowej

var delta = function(a, b, c) {
  // ...
  return ??;
}

// 4. Napisać funkcję, która zwraca liczbę miejsc zerowych funkcji kwadratowej

var ileMiejsc = function(a, b, c) {
  // ...
  return ??; //0, 1, 2
}

// 5. BONUS QUEST WYPISAĆ miejsca zerowe funkcji kwadratowej

var miejscaZerowe = function(a, b, c) {
  // ...
  //console.log()
}

// -6x^2 + 2.5x - 5 = 0
miejscaZerowe(-6, 2.5, -5);
