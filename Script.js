//Examples: 
let re ;
let str; 


//Postal code
re = /^[0-9]{4}$/
str = "4000"

//phone number
re = /^(\+88)?01[0-9]{9}$/
str = "01997058623"

//email address
//bohubrihi.learn@edu.bd
re = /^([a-zA-Z0-9]\.?)+[^\.]@([a-zA-Z0-9]\.?)+[^\.]$/
str = "bohubrihi.learn@edu.bd"


console.log(re.test(str))