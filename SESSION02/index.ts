let grade : number = 85

if (grade >= 85) {
    console.log("congratulation you are graduate")
} else {
    console.log("you only participant")
}

// type Icolor = ("red" | "yellow" | "green")

let trafficlight : string = "green"

if(trafficlight == "red") {
    console.log("stop")
} else if(trafficlight == "yellow") {
    console.log("be carefull")
} else if(trafficlight == "green") {
    console.log("run")
} else {
    console.log("invalid color")
}

const trafficlight2: string = "yellow"
switch(trafficlight2) {
    case "red":
        console.log("stop")
        break;
    case "yellow":
        console.log("be carefull");
        break
    case "green":
        console.log("run");
        break
    default:
        console.log("invalid color");
} 

const expr: string = "Papayas"
switch (expr) {
    case "Orange":
        console.log("Orange are $0.59 a pound")
        break
    case "Mangoes":
    case "Papayas":
        console.log("Mangos and Papayas are $2.79 a pound")
        break
    default:
        console.log(`sorry we are out of ${expr}`)
}

switch(true){
    case grade >= 85:
        console.log("congratulation you are graduate")
        break
    default:
        console.log("youb only participant")
}

console.log("=======")
console.log(true && true)
console.log(true && false)
console.log(false && false)
console.log(true || true)
console.log(true || false)
console.log(false || false)

console.log("result :", 65 >= 57 && ( "a" == "A" || 54 == "54"))

console.log("==========")

console.log("b" != "B")
console.log(!true)
console.log("aa" != "AA" && 667 <= 87)

let str : sring = " Typescript"
if(str ===  "Typescript") {
    if(56 == 45) {
        console.log("ngapain")
    } else {
        console.log("gak ngapa2in")
    }
    console.log("this is typescript")
} else {
    console.log("this is not typescript")
}

let result3 
    (str === "Typescript" ? "this is typescript" : "this is not typrscript")

console.log(result3)

let value : number = 23
let result4 : number | string = value && "Hello world"
console.log(result4) // kanan ("Hello world")

let value2 : number = 0
let result5 : number | string = value2 && "Hello world"
console.log(result5) // kiri (0)

let value3 : number = 0
let result6 :  number | string = value3 || ""
console.log(result6) // kanan ("")

let value4 : string = "Dimas"
let result7 :  number | string = value4 || "Guest"
console.log(result7) // kiri ("Dimas")

