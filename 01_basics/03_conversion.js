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
// ************************OPERATIONS****************************//
 let value=3
 let negvalue=-value
 console.log(negvalue)

 console.log(2+3)
 console.log(2-3)
 console.log(2*3)
 console.log(2**3)//power
 console.log(2/3)
 console.log(2%3)

 let str1="srishti"
 let str2="singh"
 let str3=str1+str2
 console.log(str3)

 console.log("1"+2)//12
 console.log(1+"2")//12

 console.log("1"+2+2)//122

 console.log(1+2+"2")//32
 
 console.log(+true);//1
//  console.log(true+)//error

// let num1,num2,num3
// num1=num2=num3=2+2-->not preferred

let gamecounter=11
gamecounter++;//++gamecounter
console.log(gamecounter);//12