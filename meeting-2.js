// zmienne / variables

var liczba1 = 5;
var liczba2 = 6;
liczba1 + liczba2

// nadpisywanie wartości zmiennej

liczba1 = 100;
liczba1 + liczba2

// nadpisywanie wartości zmiennej

liczba1 = liczba1 - 5

// nie wolno używać słów kluczowych

var łódź = 5;
łódź

// conditional expressions / wyrażenia warunkowe

// console.log
console.log("ajdhvlkhj\nszdvljkzh\nsdv" + "   " + 5)

// if / [jeżeli]

var x = "Janek";
x

if (x == "Janek") {
  console.log("tak, równa się")
}

if (x == "Kiełek") {
  console.log("nie, nie równa się")
}

if (x != "Kiełek") {
  console.log("prawda!")
}

// else / [w innym wypadku]

var num = 5;

if (num < 2) {
  console.log("true")
} else {
  console.log("false")
}

// else if

var name = "Janek"

if (name == "Janek") {
  console.log("tak to ja")
} else if (name == "Pszczoła") {
  console.log("To jest Pszczoła")
} else if (name == "Daniel") {
  console.log("To jest Daniel")
} else {
  console.log("To ktoś inny: " + name)
}

// {} / nawiasy klamrowe / curly braces

// 1. n podzielne przez 3 - Fizz
// 2. n podzielne przez 5 - Buzz
// 3. n n podzielne przez 3 i 5 - FizzBuzz
// 4. w innym wypadku - wypisz daną liczbę
// 3 : 3 = 1 r 0
3 % 3
// 4 : 3 = 1 r 1
4 % 3
// 5 : 3 = 1 r 2
5 % 3
// 6 : 3 = 2 r 0
6 % 3

var n = 5;
var divisibleBy3 = n % 3 == 0
var divisibleBy5 = n % 5 == 0
divisibleBy3
divisibleBy5

if (divisibleBy3 && divisibleBy5) {
  console.log("FizzBuzz")
} else if (divisibleBy3) {
  console.log("Fizz")
} else if (divisibleBy5) {
  console.log("Buzz")
} else {
  console.log(n)
}

if ((n % 3 == 0) && (n % 5 == 0)) {
  console.log("FizzBuzz")
} else {
  if (n % 5 == 0) {
    console.log("Buzz")
  } else {
    if ( n % 3 == 0) {
      console.log("Fizz")
    } else {
      console.log("n")
    }
  }
}

// while / podczas gdy

// wypisz 10 pierwszych potęg dwójki: 2, 4, 8, 16, 32, ...
// 1. n = 2, power = 1
// 2. n = 4, power = 2

var power = 1;
var n = 2;
while (power <= 5) {
  console.log("n = " + n + " power = " + power)
  n = n * 2;
  power = power + 1;
}

// ZADANIA:

/*
ZADANIE 1.

założyć konto na https://github.com
kawałki kodu wklejać jankowi na https://gist.github.com

*/

/*
ZADANIE 2.

#
##
###
####
#####
######
#######
*/

var str = "#"
str
str + "#"

/*
ZADANIE 3.

1: 1
2: 2
3: Fizz
4: 4
5: Buzz
...
15: FizzBuzz
...
100: 100
*/

// while(...) {
//   ...
//   if ((n % 3 == 0) && (n % 5 == 0)) {
//     console.log("FizzBuzz")
//   } else {
//     if (n % 5 == 0) {
//       console.log("Buzz")
//     } else {
//       if ( n % 3 == 0) {
//         console.log("Fizz")
//       } else {
//         console.log("n")
//       }
//     }
//   }
//   ...
// }
