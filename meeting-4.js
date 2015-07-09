for (var n = 1; n <= 10; n = n + 1) {
  var line = ""
  for (var mult = 1; mult <= 10; mult = mult + 1) {
    line = line + (mult * n) + " "
  }
  console.log("<"+line+">")
}

// funkcje

// napisz funkcję, która dodaje do siebie 3 liczby i zwraca tą sumę

var suma = function(a, b, c) {
  console.log(a, b, c)
  return a + b + c;
};
suma(5)

// zasięg widoczności zmiennych / scope

var str = "Kiełek"
var changeToDaniel = function() {
  var str = "Daniel" // przysłanianie / shadowing
}
changeToDaniel()
console.log(str)

var str2 = "Kiełek"
var changeToDaniel2 = function() {
  str2 = "Daniel"
}
changeToDaniel2()
console.log(str2)

// nested scopes / zagnieżdżanie zakresów [?]

var multiply = function(a, b) {
  // zmienna doKwadratu jest widoczna tylko wewnątrz funkcji multiply
  var doKwadratu = function(x) {
    return x * x
  }
  return square(a) * square(b);
}

multiply(2, 3)
doKwadratu(4)

/*
HOMEWORK 1:
- Napisz funkcję, która wypisze tabliczkę mnożenia dla zadanych liczb.
np.: tabliczka(5, 9).
- Wywalić spację na końcu linii
- Bonus quest: Ładnie sformatować kod [!], Zakładamy, że największa liczba w tabeli to 100
<1  2  3  4  5  6  7  8  9 10>
<2  4  6  8 10 12 14 16 18 20>
<3  6  9 12 15 18 21 24 27 30>
<4  8 12 16 20 24 28 32 36 40>
<5 10 15 20 25 30 35 40 45 50>
<6 12 18 24 30 36 42 48 54 60>

HOMEWORK 2:
Napisz pętlę for, która rysuje następującą piramidę
   #
  ###
 #####
#######
itd..

Piramida ma mieć wysokość 7 wierszy.

HOMEWORK 3:
Napisz funkcję, która:
- rysuje piramidę o powyższym kształcie
- przyjmuje następujące argumenty
  wysokość piramidy,
  znak, który będzie użyty do rysowania parzystych wierszy
  znak, który będzie użyty do rysowania nieparzystych wierszy
Przykład:
piramida(4, "$", "*") <- takie wywołanie funkcji ma narysować następującą piramidę:
   *
  $$$
 *****
$$$$$$$
*/
