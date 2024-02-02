//character set using Brackets []:

let re = /h[ea]llo/i;  //must be one of them inside brackets.
re = /[^ha]ello/i; //Anything except those inside bracket
re = /^[ha]ello/i; //must start with h or a 
re = /[a-z]ello/i; // Start with the range mentioned in [] this brackets
re = /^[A-Z]/i; // must be the fist letter in uper case.
re = /[A-Za-z]ello/ ; // start with any character dosen't matter.
re = /[0-9]ello/;
re = /[^0-9]ello/;

///Braces {}  - Quantifier: 
re = /el{2,6}o/;

//Parentheses  () -- grouping
re = /^([0-9]){10}/;
re = /^01[0-9]{9}$/;
re = /^\+8801[0-9]{9}$/;
re = /([0-9]x){3}/;

let str = "hello"
str = "ello"
str = "mqkello"
str = "Mohabbat"
str = "MOhabbatello"
str = "45ello"
str = "Again 4ello"
str = "23hsalffs"
str = "sadfh"
str = "1helo"
str = "hellllllllo"
str = "123456789010maoshfsoh"
str = "01997058623"
str = "+8801997058623"
str = "2x3x4x"


console.log(re.test(str))
reTest(re,str)

function reTest(re,str){
    if (re.test(str)){
        console.log(`${str} matches with ${re.source}`)
    }
    else{
        console.log(`${str} dosen't matches with ${re.source}`)
    }
}
