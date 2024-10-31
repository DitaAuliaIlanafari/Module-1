var myName = "dita aulia ilanafari";
console.log(myName);
var person = {
    name: "dita",
    title: "digital marketer",
    age: 17
};
console.log(person);
console.log(myName.split(""));
console.log(myName.split(" "));
console.log(myName.split("a"));
console.log("dita\naulia\nilanafari\n".concat(myName, "\n"));
var myNumber = -12.34;
console.log(myNumber.toFixed());
console.log(parseFloat("1234"));
console.log(Number.MAX_VALUE);
console.log(Boolean(1)); // true
console.log(Boolean(0)); // false
console.log(Boolean(123)); // true
console.log(Boolean("")); // false
console.log(Boolean(" ")); //true
console.log(Boolean("abc")); //true
console.log(Boolean(null)); //
console.log(Boolean(undefined));
console.log(Boolean(NaN));
// thruty falsy
console.log(myNumber + 90);
console.log(90 + "ab");
console.log("ab" + 90);
var myDate = new Date;
console.log(new Date());
console.log(new Date(365 * 24 * 60 * 60 * 1000));
console.log(new Date("2024/10/28 16:05:00"));
console.log(myDate.getDay());
console.log(myDate.getFullYear());
console.log(myNumber * 12);
console.log(Math.pow(myNumber, 6));
var num = -12;
var res = num;
console.log(res);
res += 10;
res += 5;
console.log(res);
myNumber = 100;
myNumber += 50;
myNumber += 60;
myNumber *= 2;
myNumber *= 3;
console.log(myNumber);
console.log(myNumber++);
console.log(myNumber);
console.log(++myNumber);
var num2 = 45;
var num3 = 78;
var num4 = "78";
console.log("------------------");
console.log(num2 == num3);
console.log(num2 <= num3);
console.log(num3 < num2);
console.log(num3 > num2);
console.log(num3 >= num2);
console.log(num3 == num4);
console.log(num3 === num4);
