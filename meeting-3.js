// rozwiązania zadań

// 1.
var str = "#"
var n = 0
while(n < 7) {
  console.log(str)
  n = n + 1
  str = str + "#"
}

var n = "#"
while(n <= "#######"){
  console.log(n)
  n = n + "#"
}

// 2.

var num = 1
while (num <= 100) {
  if ((num % 3 == 0) && (num % 5 == 0)) {
    console.log("FizzBuzz")
  } else if(num % 5 == 0) {
    console.log("Buzz")
  } else if(num % 3 == 0) {
    console.log("Fizz")
  } else {
    console.log(num)
  }
  num = num + 1
}

// for / []

var n = 1 // initial value
while (n <= 5) {
  // check
  console.log(n)
  n = n + 1 // update
}

// initial value; check; update

// initial value
for (var n = 1; n <= 5; n = n + 1) {
  // check
  console.log(n)
  // update
}

var num = 1
while (num <= 100) {
  if ((num % 3 == 0) && (num % 5 == 0)) {
    console.log("FizzBuzz")
  } else if(num % 5 == 0) {
    console.log("Buzz")
  } else if(num % 3 == 0) {
    console.log("Fizz")
  } else {
    console.log(num)
  }
  num = num + 1
}

for (var num = 1; num <= 100; num = num + 1) {
  if ((num % 3 == 0) && (num % 5 == 0)) {
    console.log("FizzBuzz")
  } else if(num % 5 == 0) {
    console.log("Buzz")
  } else if(num % 3 == 0) {
    console.log("Fizz")
  } else {
    console.log(num)
  }
}


// funkcje / functions

var addTwoNumbers = function(a, b) {
  var c = a + b + 1;
  return c * 2;
}
var wynik = addTwoNumbers(2, 5)
console.log("Wynik operacji to: " + wynik)

//////////////////////////////////

var addTwoNumbersEvil = function(a, b) {
  var c = a + b + 1;
  console.log(c * 2);
}
var wynikEvil = addTwoNumbersEvil(2, 5)
console.log("Wynik operacji to [EVIL]: " + wynikEvil)

var zamieńLiczbęNaStringa = function(num) {
  if ((num % 3 == 0) && (num % 5 == 0)) {
    return "FizzBuzz"
  } else if(num % 5 == 0) {
    return "Buzz"
  } else if(num % 3 == 0) {
    return "Fizz"
  } else {
    return num
  }
}
console.log(zamieńLiczbęNaStringa(15))






















var divisibleBy3 = function(n, ) {
  var k = n % 3
  if (n % 3 == 0) {
    return true;
  } else {
    return false;
  }
}
divisibleBy3(12)
