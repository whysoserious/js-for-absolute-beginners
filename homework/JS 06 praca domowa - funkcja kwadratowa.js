// zadanie nr 3 Policzyć deltę dla funkcji kwadratowej.

var delta1 = function(a, b, c) {
  // Δ=b2−4ac
  return Math.pow(b, 2) - 4 * a * c;
}
delta1(5, 8, 3)


// zadanie nr 4 Napisać funkcję, która zwraca liczbę miejsc zerowych funkcji kwadratowej.

var ileMiejsc = function(a, b, c) {
  var delta2 = Math.pow(b, 2) - 4 * a * c;
  if (delta2 > 0) {
    var mz = 2;
  } else if (delta2 == 0) {
    var mz = 1;
  } else {
    var mz = 0;
  }
  return mz;
}
ileMiejsc(5, 8, 3)


// zadanie 5 wypisać miejsca zerowe funkcji kwadratowej.

var miejscaZerowe = function(a, b, c) {
  var delta3 = Math.pow(b, 2) - 4 * a * c;
  if (a == 0) {
    console.log(Infinity);
  } else {
    if (delta3 > 0) {
      var x1 = (-b - Math.pow(delta3, 2)) / (2 * a);
      var x2 = (-b + Math.pow(delta3, 2)) / (2 * a);
      console.log(x1, x2);
    } else if (delta3 == 0) {
      var x3 = -b / 2 * a;
      console.log(x3);
    } else {
      console.log("brak miejsc zerowych");
    }
  }
}
miejscaZerowe(0, 8, 5)
