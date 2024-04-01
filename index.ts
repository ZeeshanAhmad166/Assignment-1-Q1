//first assignment of Q1
//age claculation
var currentyear :number =2024
var birthyear:number =2003
console.log("my age is ",currentyear -birthyear)

//area of a rectangle
var length : number =5
var width : number =10
var area: number =length *width
console.log("area of rectangle is=",area)

//area of a circle
var radius =6
var radiussquare =36
var pi =3.14
console.log("area of a circle is",pi*radiussquare)

//area of a cube
var a =3
var asquare=9
console.log("surface area of a cube is",6*asquare)

//conversion of temperature from forenheight to celcius and vice versa
let tempInFahrenheit=90
let tempInCelcius=45
let fahrenheit_to_celcius = (tempInFahrenheit -32)*5/9
let celcius_to_fahrenheiht = (tempInCelcius * 9/5)+32
console.log("temperature in celcius is =", fahrenheit_to_celcius, "C")
console.log("temperature in fahrenheit is =",celcius_to_fahrenheiht,"F")

//converion of seconds into minutes and minutes using variables
var sec =1440
var min =50
console.log("Given seconds into minutes are =",sec/60,"min")
console .log ("Given minutes into seconds are =",min *60,"sec")




//percentage calculation 
var gained_marks =1020
var total_marks =1100
console.log("percentage of given marks is =",gained_marks/total_marks*100)




// Increment Decrement operations

/*Q#1
var   a =2;
var b =++a*2;
b=?

firstly there is pre-increment and value of a becomes =3
then we multiply it by 2
3*2=6
  The answer is 6
  b = 6

//Q#2
var x =5 ;
var y =x-- + 2
b =?

firstly there is x =5 and it has post decrement so 
5+2 = 7
b=7


//Q#3
var  x =3;
var y =++x + x++ + ++x
y= ?  

firstly there is pre-increment in x value(4) then there is post-decrement (4)so
value of x becomes 5 
then there is pre-increment in value so the value of x becomes 6
so y is  4 + 4 +6 = 14


//Q#4
var m=2
var n= ++m * m++ * --m
n = ?

there is pre-increment in m value so it becomes =3
then there is post-decrement in m value so thatm =3
value of m becomes 4 and there is pre-decrement in m value so m =3
n is 3*3*3=27 


//Q#5
var a =3
var b =5
result = ++a  + b-- - a++ + --b
result =?

there is pre-increment in a vlue so a =4
second step is add b value as there is post-decrement so b =5
then there is post decrement in value of a so a =4
then there is pre-decrement in b value so b= 3
result is = 4 + 5 - 4 + 3 =8


//Q#6
var m=2
var n=4
var p=m++ + ++n - --m + n--
m? ,n?, p?,

firstly there is post-increment in m value so m =2
then there is pre-increment in n value so n =5
as now value of m is 3 by pre-decremnt its value aa given so now m =2
in last there is post-increment in n value so n=5
p is 2+5-2+5 = 10
m=2 ,n=4 ,p=10

 
//Q#7
 var  a = 5
var b=3
var c=2
var d=7
result=++a *(b-- +c)/--d
a?,b?,c?,d? ,result ?

first we solve bracket items so, there is post-decrement in b value so b =3 + c =2
we divide it by pre-decrement of d which is 6
 there is pre-increment in a value so a =6
 result  is  6*(3+2)/6 =  5
 a=6 ,b=2 ,c=2, d=6


//Q#8
var m=2
var n=3
var o=4
result=m++ *(--n +m)/(o-- - n)
m?,o?,n?

we solve bracket values so in first bracket there is pre-decrement in n value so n=2 +3
in second bracket post-decrement in o value so o=4 -n=2
and in first there is post-increment in m value
result  is 2*(2+3)/(4-2)=5
m=3,o=3,n=2
*/