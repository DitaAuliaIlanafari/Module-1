var a = "a";
a = a + "b";
console.log(a);
a += "c";
a += "d";
a += "ef";
a += "gh";
console.log(a);
console.log(a[3]);
var input = 5;
var result = "";
for (var i = 1; i <= input; i++) {
    result += "*";
}
for (var j = 1; j <= input; j++) {
    console.log(result);
}
console.log("========");
var result2 = "";
for (var k = 1; k <= input; k++) {
    result2 += "*";
    console.log(result2);
}
console.log("=====");
console.log(a);
console.log(a.length);
var res3 = "";
for (var i = 0; i < a.length; i++) {
    console.log(a[i]);
}
