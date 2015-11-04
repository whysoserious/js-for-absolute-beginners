// zmienna ilość parametrów

var fun = function(pierwszy, drugi, trzeci) {
  console.log("Pierwszy: ", pierwszy);
  console.log("Drugi: ", drugi);
  console.log("Trzeci: ", trzeci);
  if (trzeci === undefined) {
    trzeci = 3;
  }
  console.log("Trzeci [po podmianie]: ", trzeci);
  return pierwszy + drugi + trzeci;
}
fun(5, 6);

// Tablice [arrays]
var twoja = "asdfasdfasd";
var arr = [1, 77, twoja, false, "stara", 4];

for (i = 0; i < arr.length; i = i + 1) {
  console.log(arr[i])
}

arr.length
arr[5]

var arr2

// wypisz elementy większe od 10

var arr2 = [1, 20, 3, 30, 4, 40];
// for
for (var i = 0; i < arr2.length; i = i + 1) {
  if (arr2[i] > 10) {
    console.log(arr2[i]);
  }
}
// while
var j = 0;
while(j < arr2.length) {
  if (arr2[j] > 10) {
    console.log(arr2[j]);
  }
  j = j + 1;
}

// wypisz elementy w odwrotnej kolejności
var arr3 = [1, 2, 45553, 4];
for (var i = arr3.length - 1; i >= 0; i = i - 1) {
  console.log(arr3[i])
}

// wypisz połowę tablicy
