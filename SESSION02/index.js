var grade = 85;
if (grade >= 85) {
    console.log("congratulation you are graduate");
}
else {
    console.log("you only participant");
}
// type Icolor = ("red" | "yellow" | "green")
var trafficlight = "green";
if (trafficlight == "red") {
    console.log("stop");
}
else if (trafficlight == "yellow") {
    console.log("be carefull");
}
else if (trafficlight == "green") {
    console.log("run");
}
else {
    console.log("invalid color");
}
var trafficlight2 = "yellow";
switch (trafficlight2) {
    case "red":
        console.log("stop");
        break;
    case "yellow":
        console.log("be carefull");
        break;
    case "green":
        console.log("run");
        break;
    default:
        console.log("invalid color");
}
var expr = "Papayas";
switch (expr) {
    case "Orange":
        console.log("Orange are $0.59 a pound");
        break;
    case "Mangoes":
    case "Papayas":
        console.log("Mangos and Papayas are $2.79 a pound");
        break;
    default:
        console.log("sorry we are out of ".concat(expr));
}
switch (true) {
    case grade >= 85:
        console.log("congratulation you are graduate");
        break;
    default:
        console.log("youb only participant");
}
console.log("=======");
console.log(true && true);
console.log(true && false);
console.log(false && false);
console.log(true || true);
console.log(true || false);
console.log(false || false);
console.log("result :", 65 >= 57 && ("a" == "A" || 54 == "54"));
console.log("==========");
console.log("b" != "B");
console.log(!true);
console.log("aa" != "AA" && 667 <= 87);
var str = " Typescript";
if (str === "Typescript") {
    if (56 == 45) {
        console.log("ngapain");
    }
    else {
        console.log("gak ngapa2in");
    }
    console.log("this is typescript");
}
else {
    console.log("this is not typescript");
}
var result3;
(str === "Typescript" ? "this is typescript" : "this is not typrscript");
console.log(result3);
var value = 23;
var result4 = value && "Hello world";
console.log(result4);
var value2 = 0;
var result5 = value2 && " Hello world";
console.log(result5);
var value3 = 0;
var result6 = value3 || "";
console.log(result6);
var value4 = "Dimas";
var result7 = value4 || "Guest";
console.log(result7);
