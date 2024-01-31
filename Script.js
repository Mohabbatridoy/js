//error Handling:

let a = prompt("Enter a number: ");
try {
    if(a>15) throw  "too big"
    else if (a<5) throw "too small"
} 
catch (err){
    console.log(err)
}