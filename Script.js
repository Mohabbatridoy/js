//Regular expresion : 
//Pattern Matching : 

let re;
let str;

re = /hello/i; // case insensitive 

console.log(re)
console.log(re.source)

str = 'hello world'
str = "again hello world"
str = "lskdjfrrhellomnks kshfr"

//exec() - returns rsult in an array or null
let result = re.exec(str)

// test() - true/ false
result = re.test(str)

//match() - Returns array or null: 
result = str.match(re)

//search() - Returns index of the first match or -1
result = str.search(re)

//replace() - Return new string
str = "Again Hello world"
let new_str = str.replace(re,'Hi')

console.log(new_str)

console.log(result)