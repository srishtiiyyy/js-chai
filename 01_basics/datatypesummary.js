/*
ON THE BASIS OF HOW DATA IN STORED AND ACCESSED IN MEMORY IT IS CATEGORISED INTO 2 PARTS
************
1.PRIMITIVE-
7 TYPES
CALL BY VALUE
STRING NUMBER BOOLEAN NULL UNDEFINED SYMBOL BigInt
****************
2.NON PRIMITIVE/REFERENCE
ARRAYS, OBJECTS ,FUNCTIONS
***************

JAVA SCRIPT IS DYNAMICALLY TYPED LANGUAGE WHICH MEANS THAT DATA TYPE OF VARIABLE ARE DETERMINED BY VALUE
THEY HOLD AT RUNTIME AND CAN CHANGE THROUGHOUT THE PROGRAM AS WE ASSIGN DIFFERENT VALUES TO THEM
dynamically typed language is a programming language where the type of a variable
is checked and assigned during runtime, not compile time. This means you don't need to 
declare a variable's type explicitly, as the interpreter determines the type based
on the value it holds at that moment. Examples include JavaScript, Python, and Ruby. 
******************************

*/
 const score=100
 const scoreval=100.3

 const isloggedin=false
 const outsidetemp=null
 let useremail;
 const id=Symbol('123')
 const anotherid=Symbol('123')
 console.log(id===anotherid)//=>gives FALSE

 //ARRAY OBJECT FUNCTION

 const heros=["shaktiman","naagraj","doga"]
 let myobj={
    name:"srishti"
    
 }
 const myfunction=function(){
    console.log("hello world")
 }
 console.log(typeof myfunction)//OBJECT FUNCTION OR FUNCTION
 //NON PRIMITIVE---> TYPEOF FUNCTION
 //NULL-OBJECT
 //ARRAYS-OBKJECT OBJECT-OBJECT

 //******************************************************* *//

 //MEMORY-->STACK HEAP
 //STACK(PRIMITIVE),HEAP(NON PRIMITIVE)

 let  myname="kitti"
 let anothername=myname
 anothername="srishti"
 console.log(myname)
 console.log(anothername)

 let userOne={
    email:"user@google.com",
    upi:"xyz@g"
 }
let usertwo=userOne
usertwo.email="ss@g"
console.log(userOne.email)
console.log(usertwo.email)
//STACK KE ANDR MTLB PRIMITIVE DATA TYPE ME CHANGES KRTE HAIN AGR T0 BS COPY ME CHANGE HOTA HAI
//HEAP ME ORIGINAL VALUE ME CHANGE HOTA H INCASE OF NON PRIMITIVE DATA TYPE