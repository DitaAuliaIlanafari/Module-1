var num = 25;
if (num % 2 == 1) {
    console.log("angkan ganjil");
}
else {
    console.log("anka genap");
}
if (num % 2 == 0) {
    console.log("angkan genap");
}
else {
    console.log("anka ganjil");
}
//write a code to check wether the number is prime number or not, 
//example 7 prime, 6 is not prime number
//prime number bilangan dibagi 1 dan diri sendiri
// bilangan prima hanya punya 2 faktorial
var res = true;
for (var i = 2; i < num; i++) {
    //7%2==0 --> false
    if (num % i == 0) {
        res = false; //bukan prima 
        break;
    }
}
console.log(res == true ? "prime" : "not prime");
var a = 10; //kopi
var b = 4; //jus
var c = 0;
c = a; //kopi
a = b; // jus
b = c; //kopi
console.log(a); //4
console.log(c); //10
console.log("------");
//write a code to find the sum of the number 1 to N
//eexample 5 = 1+2+3+4+5=15, example 3 = 1+2+3=6
var numberr = 5;
var hasill = 0;
for (var i = 1; i <= numberr; i++) {
    hasill = hasill + i;
}
console.log(hasill);
var number = 3;
var result = 0;
for (var i = 1; i <= number; i++) {
    result = result + i;
}
console.log(result);
console.log("==================");
//write code to find factorial of number
//example 4!= 4x3x2x1=24
//example 6!= 6x5x4x3x2x1=720
var xxx = 4;
var resultss = 1;
for (var i = xxx; i > 0; i--) {
    resultss = resultss * i;
}
console.log(resultss);
var xx = 6;
var rslt = 1;
for (var i = xx; i > 0; i--) {
    rslt = rslt * i;
}
console.log(rslt);
console.log("----------------");
//fibonaci 15 610
//   1 , 2 , 3 , 4 , 5 , 6 , 7 , 8 , 9
//0, 1 , 1 , 2 , 3 , 5 , 8 , 13 , 21 , 34
//               (x + x-1)
var prev_number = 0; //0
var current_number = 1; //1
console.log("i=", i, "current_number=", current_number);
for (i = 2; i <= 15; i++) {
    var temp = prev_number; //0
    prev_number = current_number; //1
    current_number = current_number + temp; //2
    console.log("i=", i, "current_number=", current_number);
}
