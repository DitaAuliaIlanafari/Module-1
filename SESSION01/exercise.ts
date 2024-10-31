let lh : number = 5
let widht : number = 3
let result = lh * widht

console.log(result)


console.log(2 * (5 + 3))


let PI2 = 3.14
let radius = 5
let diameter = 2 * 5
let circumference = 2 * (PI2 * 5)
let area = (PI2 * 5 * 5)

console.log(`${diameter} diameter, ${circumference} circumference, ${area} area`)


let days = 400
let leftYear =Math.round (days % 365) // days - (sisa berapa tahun * 365)
let year =Math.round (days / 365) // mencari tahu brp tahun dalam hitungan hari
let leftDays =Math.round (leftYear % 30)
let month =Math.round (leftYear / 30)

console.log(`${year} year, ${month} month, ${leftDays} days`)


let days2 = 366
let leftYear2 =Math.round (days2 % 365) 
let year2 =Math.round (days2 / 365) 
let leftDays2 =Math.round (leftYear2 % 30)
let month2 =Math.round (leftYear2 / 30)

console.log(`${year2} year, ${month2} month, ${leftDays2} days`)


let date1 = new Date("2022/01/20")
let date2 = new Date("2022/01/22")
let diff = date1.getTime() - date2.getTime()
let diffDays =Math.abs (diff / (24 * 3600 * 1000))

console.log(diffDays)



