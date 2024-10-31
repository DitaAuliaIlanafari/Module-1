let myName : string = "dita aulia ilanafari"
console.log(myName)

interface Iperson {
    name:string
    title:string
    age:number
}

const person : Iperson = {
    name:"dita",
    title:"digital marketer",
    age:17
}

console.log(person)

console.log(myName.split(""))
console.log(myName.split(" "))
console.log(myName.split("a"))


console.log(`dita
aulia
ilanafari
${myName}
`)

let myNumber = - 12.34

console.log(myNumber.toFixed())
console.log(parseFloat("1234"))

console.log(Number.MAX_VALUE)


console.log(Boolean(1)) // true
console.log(Boolean(0)) // false
console.log(Boolean(123)) // true
console.log(Boolean("")) // false
console.log(Boolean(" ")) //true
console.log(Boolean("abc")) //true
console.log(Boolean(null)) //
console.log(Boolean(undefined))
console.log(Boolean(NaN))
// thruty falsy

console.log(myNumber + 90)
console.log(90 + "ab")
console.log("ab" + 90)

let myDate : Date = new Date

console.log(new Date())
console.log(new Date(365 * 24 * 60 * 60 * 1000))
console.log(new Date("2024/10/28 16:05:00"))

console.log(myDate.getDay())
console.log(myDate.getFullYear())

console.log(myNumber * 12)
console.log(myNumber**6)

let num = -12
let res : number = num
console.log(res)

res += 10
res += 5

console.log(res)

myNumber = 100
myNumber += 50
myNumber += 60

myNumber *= 2
myNumber *= 3

console.log(myNumber)

console.log(myNumber++)

console.log(myNumber)

console.log(++myNumber)

let num2 : number = 45
let num3 : number = 78
let num4 : string = "78"

console.log("------------------")
console.log(num2 == num3);
console.log(num2 <= num3);
console.log(num3 < num2);
console.log(num3 > num2);
console.log(num3 >= num2);
//console.log(num3 == num4);
//console.log(num3 === num4);