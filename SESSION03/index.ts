let a = "a"
a = a + "b"
console.log(a)

a += "c"
a += "d"
a += "ef"
a += "gh"

console.log(a)

console.log(a[3])

let input = 5
let result = ""
for(let i = 1; i <= input; i++){
    result += "*"
}

for(let j = 1; j <= input; j++){
    console.log(result)
}

console.log("========")

let result2 = ""
for(let k = 1; k <= input; k++){
    result2 += "*"
    console.log(result2)

}

console.log("=====")

console.log(a)
console.log(a.length)

let res3 = ""
for(let i = 0; i < a.length; i++){
    console.log(a[i])
}




