let re;
let str;

//Literal character: 
re = /emnei/i;
str = "hello world"

//Meta characters;
re = /^hello/i ; // Must start with the caret symbol 
re = /hello$/i ; // must end with dollar sign word.
re = /^hello$/i; //must start with hello word for caret sign and must end with hello word for dolar sign.
re = /^h.llo$/i ; //match any character one positon of dot.
re = /h*llo/; // 0 or more character can have there.
re = /he?llo/
re = /he?a?llo/i; // optional character
re = /hello\?/i;

str = "hello";
str = "hyllo";
str = "hksdhfjshfhsllo";
str = "hello"
str = "hllo"
str = "hello\?"

console.log(re.exec(str));
reTest(re,str)

function reTest(r,s){
    if(re.test(str)){
        console.log(`${str} matches ${re.source}`)
    }
    else{
        console.log(`${str} dosen't matches ${re.source}`)
    }
}