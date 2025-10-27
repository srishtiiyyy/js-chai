let score="33abc"//string

console.log(typeof score)//as a variable
console.log(typeof(score))//as a method

let valueinnumber=Number(score)
console.log(typeof valueinnumber)
console.log(valueinnumber)//"33abc"convert gives NAN
//null->gives 0
// undefined->NaN
//booleanvalue- true-1 false-0

//"33"=>33
//"33abc"=>NaN not a number
//true-1 false-0

let isloggedin=1
let booleanisloggedin= Boolean(isloggedin)
console.log(booleanisloggedin)
//1=>true 0=>false
//""=>false
//"srishti"=>true

let somenumber=33
let stringnumber= String(somenumber)
console.log(typeof stringnumber)