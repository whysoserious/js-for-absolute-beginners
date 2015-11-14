// zadanie 1 Napisz dwie funkcje wypisujące indeksy i elementy tablicy.
// while:

var displayElementsWhile = function(arr) {
  var x = 0;
    while (x < arr.length) {
    console.log(x + ": " + arr[x]);
    x = x + 1;
  }
}
displayElementsWhile([6, false, undefined, "arrow"])

// for

var displayElementsFor = function(arr) {
  for (y = 0; y < arr.length; y = y + 1) {
    console.log(y + ": " + arr[y]);
  }
}
displayElementsFor([6, false, undefined, "arrow"])


// zadanie nr 2 Napisz dwie funkcje wypisujące indeksy i elementy tablicy w odwrotnej kolejności.
// while

var displayElementsReversedWhile = function(arr) {
  var z = arr.length - 1;
    while (z >= 0) {
    console.log(z + ": " + arr[z]);
    z = z - 1;
  }
}
displayElementsReversedWhile([6, false, undefined, "arrow"])

// for

var displayElementsReversedFor = function(arr) {
  for (q = arr.length - 1; q >= 0; q = q - 1) {
    console.log(q + ": " + arr[q]);
  }
}
displayElementsReversedFor([6, false, undefined, "arrow"])


// zadanie nr 3 Napisz dwie funkcje wypisujące indeksy i elementy tablicy liczb całkowitych, które są większe od n.
// while

var displaySomeElementsWhile = function(arr, n) {
  var cnt = 0;
    while (cnt < arr.length) {
      if (arr[cnt] > n) {
      console.log(cnt + ": " + arr[cnt]);
      }
      cnt = cnt + 1;
    }
}
displaySomeElementsWhile([1, 10, 2, 20, 3, 30], 5)

// for

var displaySomeElementsFor = function(arr, n) {
  for (cnt1 = 0; cnt1 < arr.length; cnt1 = cnt1 + 1) {
    if (arr[cnt1] > n) {
      console.log(cnt1 + ": " + arr[cnt1]);
    }
  }
}
displaySomeElementsFor([1, 10, 2, 20, 3, 30], 5)


// zadanie nr 4 Napisać funkcję, która zwraca tablicę zawierającą miejsca zerowe funkcji kwadratowej.

var roots = function(a, b, c) {
  var delta = Math.pow(b, 2) - 4 * a * c;
  if (a == 0) {
      console.log(Infinity);
  } else {
        if (delta > 0) {
          var x1 = (-b - Math.pow(delta, 2)) / (2 * a);
          var x2 = (-b + Math.pow(delta, 2)) / (2 * a);
          return x1 + ", " + x2;
        } else if (delta == 0) {
            var x1 = -b / 2 * a;
            return x1;
          } else {
            return "brak miejsc zerowych";
            }
    }
}
roots(2, 8, 2)
