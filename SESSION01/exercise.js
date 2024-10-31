var lh = 5;
var widht = 3;
var result = lh * widht;
console.log(result);
console.log(2 * (5 + 3));
var PI2 = 3.14;
var radius = 5;
var diameter = 2 * 5;
var circumference = 2 * (PI2 * 5);
var area = (PI2 * 5 * 5);
console.log("".concat(diameter, " diameter, ").concat(circumference, " circumference, ").concat(area, " area"));
var days = 400;
var leftYear = Math.round(days % 365); // days - (sisa berapa tahun * 365)
var year = Math.round(days / 365); // mencari tahu brp tahun dalam hitungan hari
var leftDays = Math.round(leftYear % 30);
var month = Math.round(leftYear / 30);
console.log("".concat(year, " year, ").concat(month, " month, ").concat(leftDays, " days"));
var days2 = 366;
var leftYear2 = Math.round(days2 % 365);
var year2 = Math.round(days2 / 365);
var leftDays2 = Math.round(leftYear2 % 30);
var month2 = Math.round(leftYear2 / 30);
console.log("".concat(year2, " year, ").concat(month2, " month, ").concat(leftDays2, " days"));
var date1 = new Date("2022/01/20");
var date2 = new Date("2022/01/22");
var diff = date1.getTime() - date2.getTime();
var diffDays = Math.abs(diff / (24 * 3600 * 1000));
console.log(diffDays);
