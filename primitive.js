// NN BB SS U
// two types of data types 1. primitive and 2. non-primitive
// 1. primitive data type
let a=9             // number
let b=null               // null
let c= BigInt("567") + BigInt ("3")        //BigInt
let d=true             // or be false    //bool
let e=Symbol("this is symbol")         //Symbol
let f="harry"                        // string
let g=undefined                       //undefined
console.log(a,b,c,d,e,f,g)
console.log(typeof d)
console.log(typeof a)
console.log(typeof f)
console.log(typeof b)
// 2. non-primitive data type or object
const item=
{
    "harry": 87,
    "hemant" :true,
    "anish" :false,
    "rohit" :29,
    "chinky":g
}
console.log(item["harry"])

