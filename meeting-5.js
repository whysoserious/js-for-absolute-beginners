// HOMEWORK
// http://www.math.edu.pl/funkcja-kwadratowa
// ax^2 + bx + c = 0
// 1. Napisać funkcję wyliczającą deltę:

var delta = function(a, b, c) {
  // ...
  return 0;
}

// 2. Napisać funkcję wypisująca miejsca zerowe funkcji kwadratowej

var miejsaZerowe = function(a, b, c) {
  // ...
  // hint: użyj funkcji delta
  console.log("Miejsca zerowe: ...")
}

var multiply3 = function(x, y, z) {
  return x * y * z;
}

var mult = multiply3(1, 2, 3);

console.log("WYNIK: " + mult);

// zwraca sumę zmiennych a, s, d jeśli zmienna multiply jest ustawiona na false
// zwraca iloczyn zmiennych a, s, d  jeśli zmienna multiply jest ustawiona na true
var multiplyOrAdd = function(a, s, d, multiply) {
  console.log("Wartość parametru multiply: " + multiply);
  if (multiply) {
     a * s * d;
  } else {
     a + s + d;
  }
}
multiplyOrAdd(100, 2, 3, true);
multiplyOrAdd(100, 2, 3, false);

// ćwiczenie

var containsMyName = function(k) {
  if (k == "Grzegorz") {
    return true;
  } else {
    return false;
  }
}

containsMyName("Grzegorz")

var containsMyName3 = function(k, l, j) {
  if ((k == "Grzegorz") || (l == "Grzegorz") || (j == "Grzegorz")) {
    return true;
  } else {
    return false;
  }
}

containsMyName3("Grzegorz", "Grzegorz", "Asia");

var containsMyNamePro = function(k, l, j) {
  return k == "Grzegorz" || l == "Grzegorz" || j == "Grzegorz";
}

containsMyNamePro("Grzegorz", "Janek", "Asia");

var containsNameX = function(k, l, j, name) {
  if ((k == name) || (l == name) || (j == name)) {
    return true;
  } else {
    return false;
  }
}

containsNameX("Grzegorz", "Janek", "Asia", "Adolf");
containsNameX("Grzegorz", "Janek", "Asia", "Ewa");
containsNameX("Grzegorz", "Janek", "Asia", "Asia");

var containsNameXPro = function(k, l, j, name) {
  return k == name || l == name || j == name;
}

containsNameXPro("Grzegorz", "Janek", "Asia", "Asia");

containsNameX("Grzegorz", "Janek", "Asia", "Adolf");

var containsNameX = function("Grzegorz", "Janek", "Asia", "Adolf") {
  if (false) {
    return true;
  } else {
    return false;
  }
}

containsNameXPro("Grzegorz", "Janek", "Asia", "Asia");
var containsNameXPro = function("Grzegorz", "Janek", "Asia", "Asia") {
  return true;
}
